import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Shield, Zap, Database } from 'lucide-react';

const SalesAdvisorWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 overflow-hidden rounded-2xl border border-red-500/30 bg-black/95 backdrop-blur-xl shadow-2xl shadow-red-500/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-black p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                  <span className="text-[10px] font-bold tracking-widest uppercase italic">Neural Status: Active</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:text-red-200">
                  <X size={18} />
                </button>
              </div>
              <h3 className="mt-2 text-lg font-bold">Beatriz Serie X</h3>
              <p className="text-[10px] opacity-70 uppercase tracking-tighter">Federación Neural Nexus | Asistente de Élite</p>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-4">
              <div className="rounded-lg bg-white/5 p-3 text-xs text-gray-300 border border-white/10">
                <p className="italic">"Hola, soy Beatriz. He analizado el ADN de <span className="text-red-500 font-bold">Space Gym</span> en Cúcuta. Este sitio está optimizado para dominar el mercado local mientras tú descansas."</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                <div className="flex items-center gap-1 p-2 rounded bg-white/5 border border-white/10">
                  <Database size={10} className="text-red-500" />
                  <span>30/30 Sembrado</span>
                </div>
                <div className="flex items-center gap-1 p-2 rounded bg-white/5 border border-white/10">
                  <Zap size={10} className="text-yellow-500" />
                  <span>IA: 2.4% Carga</span>
                </div>
                <div className="flex items-center gap-1 p-2 rounded bg-white/5 border border-white/10 col-span-2">
                  <Shield size={10} className="text-green-500" />
                  <span>Protección Hive Activa</span>
                </div>
              </div>

              <button className="w-full rounded-full bg-red-600 py-3 text-xs font-bold text-white hover:bg-red-700 transition-all uppercase tracking-widest shadow-lg shadow-red-600/20">
                Hablar con Beatriz
              </button>
            </div>
            
            <div className="bg-white/5 p-2 text-center text-[8px] text-gray-500">
              CONECTADO A LA COLMENA CENTRAL V3.1
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/40 border-2 border-white/10"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </motion.button>
    </div>
  );
};

export default SalesAdvisorWidget;
