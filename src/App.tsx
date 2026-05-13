import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Heart, ArrowRight, Truck, Shield, RotateCcw, Beer, Wine, GlassWater, Zap, Instagram, Facebook, Twitter, Flame, Award, Clock } from "lucide-react";

// --- NEURAL DNA COMPONENT (AUTONOMOUS FEED) ---
const NeuralFeed = ({ businessName, accentColor }: { businessName: string, accentColor: string }) => {
  const [posts] = useState([
    {
      id: 1,
      title: `Innovación en ${businessName}`,
      content: 'Hemos industrializado nuestra cava para garantizar que cada botella se mantenga a la temperatura perfecta de degustación. ¡Descubre la diferencia!',
      date: 'Hace 45 minutos',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop'
    }
  ]);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-1.5 w-16 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-4xl font-black uppercase tracking-tighter italic">Neural <span style={{ color: accentColor }}>Feed</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map(post => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[3rem] bg-slate-900/50 border border-white/5 p-10 hover:border-orange-500/30 transition-all shadow-2xl"
          >
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-8 relative">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">EXCLUSIVO</span>
              </div>
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">{post.title}</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">{post.content}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Zap size={18} className="text-orange-500" />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
              </div>
              <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:translate-x-2 transition-transform" style={{ color: accentColor }}>
                Explorar <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);
  
  const accent = "#f97316"; 
  const bg = "#020617";
  const surface = "#0f172a";

  const featured = { 
    name: "Whisky Blue Label - Ghost & Rare", 
    price: 950, 
    oldPrice: 1200, 
    tag: "ELITE SELECTION" 
  };

  const categories = [
    { name: "Single Malt", icon: Wine },
    { name: "Importados", icon: Flame },
    { name: "Artesanales", icon: Beer },
    { name: "Reserva VIP", icon: Award },
  ];

  const products = [
    { name: "Tequila Clase Azul", price: 450, oldPrice: 520, sale: true, img: "https://images.unsplash.com/photo-1516535794938-6063878f08cc?q=80&w=400&auto=format&fit=crop" },
    { name: "Champagne Dom Pérignon", price: 380, oldPrice: 450, sale: true, img: "https://images.unsplash.com/photo-1594460750222-29337fecaa8d?q=80&w=400&auto=format&fit=crop" },
    { name: "Gin Hendrick's Lunar", price: 190, sale: false, img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=400&auto=format&fit=crop" },
    { name: "Vodka Beluga Gold", price: 280, oldPrice: 310, sale: true, img: "https://images.unsplash.com/photo-1608885898957-a559228e8749?q=80&w=400&auto=format&fit=crop" },
    { name: "Ron Diplomático", price: 145, sale: false, img: "https://images.unsplash.com/photo-1516535794938-6063878f08cc?q=80&w=400&auto=format&fit=crop" },
    { name: "Cognac Hennessy XO", price: 550, oldPrice: 620, sale: true, img: "https://images.unsplash.com/photo-1594460750222-29337fecaa8d?q=80&w=400&auto=format&fit=crop" },
    { name: "Mezcal 400 Conejos", price: 110, sale: false, img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=400&auto=format&fit=crop" },
    { name: "Cerveza Stella Artois", price: 15, oldPrice: 22, sale: true, img: "https://images.unsplash.com/photo-1608885898957-a559228e8749?q=80&w=400&auto=format&fit=crop" },
  ];

  const reviews = [
    { name: "Wily C.", text: "La mejor selección de licores que he visto. El Blue Label llegó impecable.", stars: 5 },
    { name: "Beatriz S.", text: "Servicio premium y entrega ultrarrápida. Mi tienda de confianza.", stars: 5 },
    { name: "Carlos R.", text: "Licores originales y asesoría de primer nivel. Recomendado 100%.", stars: 5 },
  ];

  const toggleLike = (i: number) => {
    setLiked((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  };

  return (
    <div style={{ backgroundColor: bg, color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      {/* NAV */}
      <nav className="flex items-center justify-between px-10 py-8 border-b sticky top-0 z-50 backdrop-blur-2xl bg-black/40" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center rotate-3">
             <Wine size={24} className="text-white" />
          </div>
          <span className="text-3xl font-black uppercase tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>EL <span className="text-orange-500">DESMADRE</span></span>
        </div>
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: "#94a3b8" }}>
          <a href="#" className="hover:text-orange-500 transition-colors">Cava Virtual</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Colecciones</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Eventos VIP</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Contacto</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 group transition-all">
            <ShoppingCart size={22} className="group-hover:scale-110 transition-transform text-slate-400" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-[10px] flex items-center justify-center font-black shadow-xl" style={{ backgroundColor: accent, color: "#fff" }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* HERO - TITAN STRUCTURE */}
      <section className="relative pt-20 pb-32 px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full -z-10" />
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1">
            <span
              className="inline-block px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-black mb-8 shadow-2xl"
              style={{ backgroundColor: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
            >
              {featured.tag}
            </span>
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              MAESTRÍA EN <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">LICORES.</span>
            </h1>
            <p className="text-xl mb-12 leading-relaxed text-slate-400 max-w-xl font-medium">
              Sumerge tus sentidos en nuestra exclusiva selección de destilados internacionales. Un viaje de sabor diseñado para los verdaderos conocedores.
            </p>
            <div className="flex items-center gap-10 mb-12">
              <div className="flex flex-col">
                <span className="text-5xl font-black tracking-tighter" style={{ color: accent }}>${featured.price}</span>
                <span className="text-lg line-through opacity-30 text-slate-500">${featured.oldPrice}</span>
              </div>
              <div className="h-16 w-[1px] bg-white/10" />
              <div className="flex flex-col gap-2">
                 <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={accent} style={{ color: accent }} />)}
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Pureza Certificada</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCartCount((c) => c + 1)}
                className="px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] flex items-center justify-center gap-4"
                style={{ backgroundColor: accent, color: "#fff" }}
              >
                Adquirir Ahora <ArrowRight size={20} />
              </button>
              <button className="px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center">
                Ver Catálogo
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto group">
              <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full group-hover:bg-orange-500/30 transition-all duration-700" />
              <div className="relative h-full w-full rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-xs font-black uppercase tracking-[0.4em] text-orange-500 mb-2">Reserva Anual</p>
                    <p className="text-2xl font-black uppercase tracking-tighter">Vintage Collection 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES - TITAN STYLE */}
      <section className="py-24 px-8 bg-slate-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[3.5rem] border border-white/5 cursor-pointer transition-all hover:bg-orange-500 hover:border-orange-500 shadow-xl text-center"
                style={{ backgroundColor: surface }}
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto transition-all group-hover:bg-white group-hover:scale-110 shadow-2xl" style={{ backgroundColor: `${accent}15` }}>
                  <cat.icon size={32} style={{ color: accent }} className="group-hover:text-orange-500 transition-colors" />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 group-hover:text-white transition-all">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID - TITAN STYLE */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Selección <span className="text-orange-500 italic">Desmadre.</span></h2>
            <p className="text-lg opacity-40 font-medium tracking-wide">Los diamantes de nuestra cava, listos para tu copa.</p>
          </div>
          <button className="px-8 py-4 rounded-2xl border border-white/10 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:bg-white/5 transition-all">
            Ver Todos <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-[3rem] border border-white/5 overflow-hidden group hover:border-orange-500/30 transition-all shadow-2xl flex flex-col"
              style={{ backgroundColor: surface }}
            >
              <div className="relative aspect-[3/4] flex items-center justify-center overflow-hidden">
                <img src={p.img} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-90 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                {p.sale && (
                  <span className="absolute top-8 left-8 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl" style={{ backgroundColor: "#ef4444", color: "#fff" }}>
                    OFFER
                  </span>
                )}
                <button
                  onClick={() => toggleLike(i)}
                  className="absolute top-8 right-8 p-3.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 transition-all hover:scale-110"
                >
                  <Heart size={18} fill={liked.includes(i) ? accent : "none"} style={{ color: liked.includes(i) ? accent : "#fff" }} />
                </button>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black mb-4 truncate tracking-tighter">{p.name}</h4>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black" style={{ color: accent }}>${p.price}</span>
                    {p.oldPrice && <span className="text-sm line-through opacity-30 tracking-widest">${p.oldPrice}</span>}
                  </div>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all hover:scale-110 shadow-2xl group-hover:bg-orange-500"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#fff" }}
                  >
                    <ShoppingCart size={24} className="group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS - TITAN STYLE */}
      <section className="py-32 px-8 max-w-6xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full -z-10" />
        <h2 className="text-5xl font-black mb-20 text-center uppercase tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Voz de la <span className="text-orange-500">Cava.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group hover:border-orange-500/20 transition-all"
              style={{ backgroundColor: surface }}
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill={j < r.stars ? accent : "none"} style={{ color: j < r.stars ? accent : "#1e293b" }} />
                ))}
              </div>
              <p className="text-lg font-medium mb-8 leading-relaxed opacity-70 italic">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-black">
                  {r.name[0]}
                </div>
                <p className="text-sm font-black uppercase tracking-[0.2em]">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TRUST BADGES - TITAN STYLE */}
      <section className="py-24 px-8 border-y border-white/5 bg-slate-950/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { icon: Clock, label: "Entrega Flash", sub: "Tu pedido en menos de 25 min" },
            { icon: Shield, label: "Garantía Elite", sub: "Sellos de seguridad originales" },
            { icon: RotateCcw, label: "Devolución VIP", sub: "Sin preguntas, sin demoras" },
          ].map((b, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-[2rem] border border-white/5 flex items-center justify-center mb-8 transition-all group-hover:-translate-y-3 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]" style={{ backgroundColor: `${accent}05` }}>
                <b.icon size={40} style={{ color: accent }} />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter mb-3">{b.label}</span>
              <span className="text-sm font-medium opacity-40 uppercase tracking-widest">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEURAL FEED */}
      <NeuralFeed businessName="Estanco EL DESMADRE" accentColor={accent} />

      {/* NEWSLETTER - TITAN STYLE */}
      <section className="py-32 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-7xl font-black uppercase tracking-tighter mb-6 leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MEMBRESÍA <span className="text-orange-500">DESMADRE.</span></h2>
        <p className="text-xl font-medium opacity-50 mb-12 max-w-2xl mx-auto leading-relaxed">Únete al círculo exclusivo de Neural Nexus. Ofertas que solo existen para los elegidos.</p>
        <div className="flex flex-col md:flex-row gap-5">
          <input
            placeholder="TU EMAIL DE ÉXITO..."
            className="flex-1 px-10 py-6 rounded-3xl bg-white/5 border border-white/10 outline-none focus:border-orange-500 text-sm font-black tracking-[0.3em] uppercase transition-all"
            style={{ color: "#fff" }}
          />
          <button className="px-14 py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(249,115,22,0.5)]" style={{ backgroundColor: accent, color: "#fff" }}>
            UNIRME AHORA
          </button>
        </div>
      </section>

      {/* FOOTER - TITAN STYLE */}
      <footer className="py-20 px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-black tracking-tighter mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: accent }}>EL DESMADRE</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30">Industrial Spirits & Celebration Node</p>
          </div>
          <div className="flex items-center gap-8">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 rounded-2xl border border-white/5 flex items-center justify-center hover:bg-white/5 transition-all hover:-translate-y-2 hover:border-orange-500/50" style={{ color: "#94a3b8" }}>
                <Icon size={24} />
              </a>
            ))}
          </div>
          <div className="text-center lg:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">&copy; 2026 Federation Neural Nexus. All rights reserved.</p>
             <p className="text-[10px] font-bold text-orange-500/40 uppercase tracking-widest mt-2">Serie X Elite Production</p>
          </div>
        </div>
      </footer>
    </div>
  );
}