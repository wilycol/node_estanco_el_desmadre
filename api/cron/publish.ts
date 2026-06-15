import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  // Habilitar CORS si es necesario
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  const startTime = Date.now();
  const nodeId = 'node_estanco_el_desmadre';
  const omniCoreUrl = process.env.OMNI_CORE_API_URL || 'https://neural-nexus-inky.vercel.app/api/ai/generate';
  
  let telemetryUrl = '';
  try {
    const urlObj = new URL(omniCoreUrl);
    telemetryUrl = `${urlObj.protocol}//${urlObj.host}/api/telemetry/report`;
  } catch {
    telemetryUrl = 'https://neural-nexus-inky.vercel.app/api/telemetry/report';
  }

  try {
    // 1. Verificar autorización del cron (Secret de Vercel)
    const authHeader = request.headers['authorization'];
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return response.status(401).json({ error: 'No autorizado' });
    }

    // Configuración de metadatos del nodo (ADN de Estanco El Desmadre)
    const businessName = 'Estanco El Desmadre';
    const niche = 'General';
    const city = 'Colombia';
    const supabaseUrl = 'https://lkctxyoyajqrhaavnzrv.supabase.co';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

    if (!supabaseKey) {
      throw new Error('Falta la clave de Supabase');
    }

    // 2. Consulta de IA vía Pasarela Central Neural API DB (Omni Core)
    const omniCoreToken = process.env.OMNI_CORE_API_KEY || 'beatriz_publisher_sync_key_2026';

    const prompt = `Actúa como redactor publicitario para el negocio "${businessName}" en la ciudad de "${city}". Su nicho es "${niche}". Genera una noticia de marketing corta, atractiva y profesional para su feed web. Devuelve la respuesta en formato JSON plano con los campos: "title" (título corto y potente), "category" (Moda, Tecnología, Soporte, Servicios o Novedades), "summary" (resumen de 1 frase), "content" (artículo de 3-4 frases).`;

    const aiResponse = await fetch(omniCoreUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${omniCoreToken}`
      },
      body: JSON.stringify({ prompt, jsonMode: true })
    });

    if (!aiResponse.ok) {
      throw new Error(`Fallo en la llamada a Omni Core: ${aiResponse.statusText}`);
    }

    const aiData = await aiResponse.json();
    const post = typeof aiData.result === 'string' ? JSON.parse(aiData.result) : aiData.result;

    if (!post || !post.title || !post.content) {
      throw new Error('Formato de post inválido devuelto por Omni Core');
    }

    let imageUrl = '';
    // Verificar si existen recursos reales en el storage de Supabase para este nodo
    try {
      const storageUrl = `${supabaseUrl}/storage/v1/object/list/business-assets`;
      const listResponse = await fetch(storageUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        },
        body: JSON.stringify({
          prefix: `${nodeId}/gallery`,
          limit: 10,
          sort_by: { column: 'name', order: 'desc' }
        })
      });

      if (listResponse.ok) {
        const assets = await listResponse.json();
        if (Array.isArray(assets) && assets.length > 0) {
          // Seleccionar una foto real aleatoria de la galería
          const randomIndex = Math.floor(Math.random() * assets.length);
          const selectedAsset = assets[randomIndex];
          imageUrl = `${supabaseUrl}/storage/v1/object/public/business-assets/${nodeId}/gallery/${selectedAsset.name}`;
          console.log(`📸 Foto real seleccionada del bucket: ${imageUrl}`);
        }
      }
    } catch (err) {
      console.warn('No se pudo leer el bucket de Supabase, usando fallback de Picsum:', err);
    }

    // Fallback: Picsum con semilla del slug
    const slug = post.title.toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!imageUrl) {
      imageUrl = `https://picsum.photos/seed/${slug}/800/450`;
      console.log(`🎨 Imagen de Picsum generada como fallback: ${imageUrl}`);
    }

    // 4. Inyección del Post en Supabase
    const insertUrl = `${supabaseUrl}/rest/v1/news`;
    const insertResponse = await fetch(insertUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        title: post.title,
        summary: post.summary || post.content.substring(0, 100) + '...',
        content: post.content,
        image_url: imageUrl,
        source_name: 'Auto-Publisher Autónomo',
        source_url: `https://${nodeId.replace(/_/g, '')}.vercel.app`,
        published_at: new Date().toISOString(),
        category: post.category || 'Novedades',
        tags: [nodeId],
        relevance_score: 0.7,
        mention_count: 1,
        is_top_story: false,
        ai_generated: true,
        status: 'published'
      })
    });

    if (!insertResponse.ok) {
      const errText = await insertResponse.text();
      throw new Error(`Fallo al insertar post en Supabase: ${errText}`);
    }

    const insertedData = await insertResponse.json();

    // Reportar telemetría exitosa
    try {
      const executionTimeMs = Date.now() - startTime;
      await fetch(telemetryUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nodeId,
          status: 'success',
          executionTimeMs
        })
      });
    } catch (telemetryErr) {
      console.error('Fallo al reportar telemetría:', telemetryErr);
    }

    return response.status(200).json({
      success: true,
      message: 'Post autónomo publicado exitosamente',
      data: insertedData
    });

  } catch (error) {
    console.error('Error en el auto-publicador del nodo:', error);
    
    // Reportar telemetría fallida
    try {
      const executionTimeMs = Date.now() - startTime;
      await fetch(telemetryUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nodeId,
          status: 'failed',
          executionTimeMs,
          errorMessage: error instanceof Error ? error.message : String(error)
        })
      });
    } catch (telemetryErr) {
      console.error('Fallo al reportar telemetría de error:', telemetryErr);
    }

    return response.status(500).json({
      error: error instanceof Error ? error.message : 'Error interno'
    });
  }
}
