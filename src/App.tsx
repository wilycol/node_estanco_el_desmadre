import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Heart, ArrowRight, Truck, Shield, RotateCcw, Beer, Wine, GlassWater, Zap, Instagram, Facebook, Twitter } from 'lucide-react';

// --- NEURAL DNA COMPONENT (AUTONOMOUS FEED) ---
const NeuralFeed = ({ businessName, accentColor }: { businessName: string, accentColor: string }) => {
  const [posts] = useState([
    {
      id: 1,
      title: `Innovación en ${businessName}`,
      content: 'Hoy hemos optimizado nuestra logística de entregas para que tus licores lleguen más fríos que nunca. ¡Salud!',
      date: 'Hace 1 hora',
      image: 'https://images.unsplash.com/photo-1563223552-30d01fda3ea6?q=80&w=800&auto=format&fit=crop'
    }
  ]);

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Neural <span style={{ color: accentColor }}>Feed</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map(post => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Neural Update</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                Leer Más <ArrowRight size={14} />
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
  
  const accent = "#f97316"; // Naranja Titan/Desmadre
  const bg = "#0f172a";
  const surface = "#1e293b";

  const featured = { 
    name: "Whisky Blue Label - Edición Colección", 
    price: 850, 
    oldPrice: 990, 
    tag: "ELITE" 
  };

  const categories = [
    { name: "Whisky", icon: Wine },
    { name: "Cervezas", icon: Beer },
    { name: "Vinos", icon: Wine },
    { name: "Cócteles", icon: GlassWater },
  ];

  const products = [
    { name: "Gin Tanqueray", price: 120, oldPrice: 150, sale: true },
    { name: "Vodka Grey Goose", price: 180, oldPrice: 210, sale: true },
    { name: "Ron Zacapa 23", price: 250, sale: false },
    { name: "Tequila Don Julio 70", price: 320, oldPrice: 380, sale: true },
    { name: "Brandy Domecq", price: 85, sale: false },
    { name: "Baileys Irish Cream", price: 95, oldPrice: 110, sale: true },
    { name: "Aguardiente Antioqueño", price: 45, sale: false },
    { name: "Jagermeister", price: 105, oldPrice: 130, sale: true },
  ];

  const toggleLike = (i: number) => {
    setLiked((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  };

  return (
    <div style={{ backgroundColor: bg, color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-6 border-b sticky top-0 z-50 backdrop-blur-xl bg-slate-950/50" style={{ borderColor: "#1e293b" }}>
        <span className="text-2xl font-black uppercase tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif", color: accent }}>EL DESMADRE</span>
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest" style={{ color: "#94a3b8" }}>
          <a href="#" className="hover:text-white transition-colors">Catálogo</a>
          <a href="#" className="hover:text-white transition-colors">Promociones</a>
          <a href="#" className="hover:text-white transition-colors">Domicilios</a>
          <a href="#" className="hover:text-white transition-colors">VIP</a>
        </div>
        <button className="relative p-3 rounded-2xl border hover:bg-white/5 group transition-all" style={{ borderColor: "#1e293b" }}>
          <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" style={{ color: "#94a3b8" }} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-black" style={{ backgroundColor: accent, color: "#fff" }}>
              {cartCount}
            </span>
          )}
        </button>
      </nav>

      {/* HERO */}
      <section className="relative py-24 px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-black mb-6"
              style={{ backgroundColor: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
            >
              {featured.tag}
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              EL SABOR DE LA <span className="italic" style={{ color: accent }}>CELEBRACIÓN.</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed max-w-xl" style={{ color: "#94a3b8" }}>
              Licores nacionales e importados de la más alta calidad. Entrega express en minutos para que la fiesta nunca se detenga.
            </p>
            <div className="flex items-center gap-6 mb-10">
              <div className="flex flex-col">
                <span className="text-4xl font-black" style={{ color: accent }}>${featured.price}</span>
                <span className="text-sm line-through opacity-50" style={{ color: "#64748b" }}>${featured.oldPrice}</span>
              </div>
              <div className="h-12 w-[1px] bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={accent} style={{ color: accent }} />)}
                </div>
                <span className="text-xs font-bold opacity-60">99+ Reseñas</span>
              </div>
            </div>
            <button
              onClick={() => setCartCount((c) => c + 1)}
              className="px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] flex items-center gap-3"
              style={{ backgroundColor: accent, color: "#fff" }}
            >
              Comprar Ahora <ArrowRight size={18} />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            className="flex-1 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent blur-3xl rounded-full" />
            <div className="w-80 h-[450px] bg-slate-900 rounded-[3rem] border-2 border-white/10 overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Destacado</p>
                  <p className="text-sm font-black uppercase tracking-tighter">Premium Selection 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group p-8 rounded-[2.5rem] border border-white/5 cursor-pointer transition-all hover:bg-white/5 hover:border-orange-500/30 text-center"
              style={{ backgroundColor: surface }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-transform group-hover:scale-110" style={{ backgroundColor: `${accent}15` }}>
                <cat.icon size={28} style={{ color: accent }} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Catálogo <span style={{ color: accent }}>Elite</span></h2>
            <p className="text-sm opacity-60 font-medium tracking-wide">Selección curada para los paladares más exigentes.</p>
          </div>
          <button className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity" style={{ color: accent }}>
            Ver Todo <ArrowRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-orange-500/20 transition-all"
              style={{ backgroundColor: surface }}
            >
              <div className="relative aspect-square flex items-center justify-center overflow-hidden" style={{ backgroundColor: `${accent}05` }}>
                <span className="text-8xl font-black opacity-[0.03] absolute select-none" style={{ color: accent }}>{p.name[0]}</span>
                <div className="w-3/4 h-3/4 rounded-2xl bg-slate-900 shadow-xl group-hover:scale-110 transition-transform duration-500 flex items-center justify-center border border-white/5">
                   <Zap size={40} className="opacity-20" style={{ color: accent }} />
                </div>
                {p.sale && (
                  <span className="absolute top-6 left-6 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl" style={{ backgroundColor: "#ef4444", color: "#fff" }}>
                    OFFER
                  </span>
                )}
                <button
                  onClick={() => toggleLike(i)}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 transition-all hover:scale-110"
                >
                  <Heart size={16} fill={liked.includes(i) ? accent : "none"} style={{ color: liked.includes(i) ? accent : "#94a3b8" }} />
                </button>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold mb-2 truncate tracking-tight">{p.name}</h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black" style={{ color: accent }}>${p.price}</span>
                    {p.oldPrice && <span className="text-sm line-through opacity-40">${p.oldPrice}</span>}
                  </div>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: `${accent}10`, color: accent }}
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEURAL FEED */}
      <NeuralFeed businessName="Estanco EL DESMADRE" accentColor={accent} />

      {/* TRUST BADGES */}
      <section className="py-24 px-8 border-y border-white/5 bg-slate-950/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: Truck, label: "Domicilio Express", sub: "Menos de 30 minutos" },
            { icon: Shield, label: "Garantía Original", sub: "Licores 100% legales" },
            { icon: RotateCcw, label: "Pago Contraentrega", sub: "Efectivo o Transferencia" },
          ].map((b, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-2" style={{ backgroundColor: `${accent}05` }}>
                <b.icon size={28} style={{ color: accent }} />
              </div>
              <span className="text-lg font-black uppercase tracking-tighter mb-2">{b.label}</span>
              <span className="text-sm font-medium opacity-50">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Club <span style={{ color: accent }}>EL DESMADRE</span></h2>
        <p className="text-lg font-medium opacity-60 mb-10">Únete a nuestra lista VIP para recibir promociones exclusivas y lanzamientos limitados.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            placeholder="Tu email elite..."
            className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-500/50 text-sm font-bold tracking-widest uppercase transition-all"
            style={{ color: "#fff" }}
          />
          <button className="px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]" style={{ backgroundColor: accent, color: "#fff" }}>
            Unirme Ahora
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-black tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif", color: accent }}>EL DESMADRE</h3>
            <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-40 mt-1">Industrial Liquor Store</p>
          </div>
          <div className="flex items-center gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center hover:bg-white/5 transition-all hover:-translate-y-1" style={{ color: "#94a3b8" }}>
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">&copy; 2026 Federation Neural Nexus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}