/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Briefcase, Calendar, Sparkles, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { BookingForm } from '../types';

export default function ContactForm() {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    company: '',
    serviceType: 'palestra',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-hidden" id="booking-contact-block">
      {/* Absolute graphic layout */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded inline-flex items-center gap-1.5 font-bold">
                <Calendar className="w-3.5 h-3.5" /> Bookings & Parcerias
              </span>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                Traga a IA Generativa para sua Organização
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-balance">
                Contrate palestras impactantes, workshops práticos corporativos ou estabeleça campanhas de publicidade com o criador do canal **Dica Top Dmais** (+650K seguidores somados).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Seu Nome / Organizador *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Carlos Silva"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-slate-200 text-xs sm:text-sm outline-none transition-all duration-200 shadow-inner"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 font-semibold uppercase">E-mail Corporativo *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: carlos@empresa.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-slate-200 text-xs sm:text-sm outline-none transition-all duration-200 shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Company */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Empresa / Instituição</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex: Tech Soluções"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-slate-200 text-xs sm:text-sm outline-none transition-all duration-200 shadow-inner"
                  />
                </div>

                {/* Service type */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Tipo de Colaboração *</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e: any) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-slate-200 text-xs sm:text-sm outline-none transition-all duration-200 cursor-pointer"
                  >
                    <option value="palestra">🎤 Palestra Presencial / Online</option>
                    <option value="consultoria">⚙️ Consultoria IA Empresa</option>
                    <option value="patrocinio">📱 Post Patrocinado & Publi</option>
                    <option value="outro">✉️ Outros Assuntos / Contatos</option>
                  </select>
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Detalhes da Demanda *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Conte seu objetivo, data estimada (se aplicável) e como Israel pode ajudar..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-slate-200 text-xs sm:text-sm outline-none transition-all duration-200 resize-none shadow-inner"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.details}
                className="w-full py-4 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 hover:opacity-95 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/10 cursor-pointer active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processando Dados de Conexão IA...
                  </>
                ) : (
                  <>
                    Enviar Proposta <Send className="w-4 h-4 ml-0.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white border-2 border-emerald-300/20">
              <CheckCircle className="w-8 h-8 animate-bounce mt-1" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-white">Proposta Enviada com Sucesso!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Olá, **{formData.name}**! Agradecemos o interesse. Nossos agentes de inteligência e equipe humana receberam seus dados corporativos e entrarão em contato no e-mail **{formData.email}** dentro das próximas 24 horas.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-[11px] sm:text-xs font-mono text-slate-400 max-w-sm mt-2 text-left space-y-1">
              <div className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Resumo Protocolo:</div>
              <div>• Cliente: {formData.name}</div>
              <div>• Empresa: {formData.company || 'Não informada'}</div>
              <div>• Categoria: {formData.serviceType.toUpperCase()}</div>
              <div>• Status: AGUARDANDO CONTATO COMERCIAL</div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', company: '', serviceType: 'palestra', details: '' });
              }}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer underline flex items-center gap-1.5"
            >
              Enviar outra mensagem ou agendamento
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
