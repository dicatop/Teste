/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Eye, Flame, Instagram, Youtube, ArrowUpRight, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { DICAS_DATA } from '../data';
import { DicaItem } from '../types';

export default function DicaHub() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ia' | 'produtividade' | 'videos' | 'redes'>('all');
  const [selectedDica, setSelectedDica] = useState<DicaItem | null>(null);

  const filteredDicas = activeCategory === 'all' 
    ? DICAS_DATA 
    : DICAS_DATA.filter(d => d.category === activeCategory);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'ia', name: '🤖 IA & Agentes' },
    { id: 'produtividade', name: '⚡ Produtividade' },
    { id: 'videos', name: '🎥 Inteligência de Vídeo' },
    { id: 'redes', name: '📱 Crescimento Digital' }
  ] as const;

  return (
    <div className="space-y-6" id="dicas-hub-container">
      {/* Category selector */}
      <div className="flex flex-wrap items-center justify-center gap-2" id="category-selector-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setSelectedDica(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/10'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredDicas.map((dica) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={dica.id}
              onClick={() => setSelectedDica(dica.id === selectedDica?.id ? null : dica)}
              className={`p-5 rounded-2xl border bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 cursor-pointer relative group flex flex-col justify-between ${
                selectedDica?.id === dica.id
                  ? 'border-indigo-500 shadow-xl shadow-indigo-500/5 ring-1 ring-indigo-500/50'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header row: Platform badge & Stats */}
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                  <span className={`flex items-center gap-1.5 font-bold ${
                    dica.platform === 'instagram' ? 'text-pink-400' : 'text-rose-400'
                  }`}>
                    {dica.platform === 'instagram' ? (
                      <Instagram className="w-4 h-4" />
                    ) : (
                      <Youtube className="w-4 h-4" />
                    )}
                    {dica.platform === 'instagram' ? 'Instagram Reels' : 'YouTube Channel'}
                  </span>

                  <span className="flex items-center gap-1 text-slate-400 font-medium">
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    {dica.stats}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display font-bold text-[15px] sm:text-base text-white group-hover:text-indigo-400 transition-colors mb-2 leading-tight">
                  {dica.title}
                </h4>

                {/* Short description */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {dica.description}
                </p>
              </div>

              {/* Expansion helper badge / footer button */}
              <div className="pt-3 border-t border-slate-900/60 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-500 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  {selectedDica?.id === dica.id ? 'Fechar guia passo a passo' : 'Ver guia prático de execução'}
                </span>
                <ChevronRight className={`w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-all ${
                  selectedDica?.id === dica.id ? 'rotate-90' : ''
                }`} />
              </div>

              {/* Absolut top-right spark badge for highly digital stats */}
              {dica.stats.includes('M') && (
                <div className="absolute -top-2.5 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-[9px] uppercase font-bold px-2 py-0.5 rounded-full shadow-lg text-white flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-white" /> Viral
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Expandable step-by-step walkthrough card */}
      <AnimatePresence>
        {selectedDica && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border border-slate-800 bg-slate-950/40 rounded-2xl w-full"
            id="dica-walkthrough-drawer"
          >
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                      Tutorial Estruturado
                    </span>
                    <span className="text-slate-500 text-xs font-mono">• {selectedDica.stats}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg md:text-xl text-white">
                    {selectedDica.title}
                  </h4>
                </div>

                <a
                  href={selectedDica.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 rounded-xl text-xs font-semibold text-white shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  {selectedDica.platform === 'instagram' ? 'Ir para o Reels' : 'Ver Vídeo no YouTube'}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Walkthrough list */}
              <div className="bg-slate-900/60 border border-slate-800/60 p-5 rounded-xl space-y-4">
                <h5 className="text-xs uppercase font-mono tracking-wide text-slate-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" /> Checklist Prático para Execução ("Dica Top"):
                </h5>
                <ol className="space-y-4">
                  {selectedDica.tips.map((step, index) => (
                    <li key={index} className="flex gap-3 items-start text-xs sm:text-sm text-slate-300">
                      <span className="flex-none w-5 h-5 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono font-bold text-[11px] rounded flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="leading-relaxed pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Creator disclaimer banner */}
              <div className="flex items-start gap-3 text-slate-500 text-[11px] leading-relaxed max-w-2xl">
                <span>⚠️</span>
                <p>
                  As estratégias e ferramentas de IA Generativa passam por atualizações constantes. Esta metodologia reflete o conhecimento estruturado de Israel Pimentel para as versões de sistemas correntes, visando maximizar o rendimento analítico e estético.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
