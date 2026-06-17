/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Instagram, Youtube, GraduationCap, Award, Terminal, Check, ExternalLink, ArrowRight, Laptop } from 'lucide-react';
import BackgroundParticles from './components/BackgroundParticles';
import PromptOptimizer from './components/PromptOptimizer';
import DicaHub from './components/DicaHub';
import VirtualBot from './components/VirtualBot';
import ContactForm from './components/ContactForm';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-indigo-500/30 selection:text-white" id="main-portfolio-page">
      
      {/* Dynamic Animated Particles background of highest-end craft */}
      <BackgroundParticles />

      {/* Modern Top Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/40 border-b border-slate-900/60 transition-all duration-300" id="header-navbar">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-display font-black text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 select-none">
              ISRAEL PIMENTEL
            </span>
            <span className="text-[10px] font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full hidden sm:inline-block">
              Especialista em IA Generativa
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden md:flex items-center gap-1.5 text-slate-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Dica Top Dmais: +650K seguidores</span>
            </span>
            <button
              onClick={() => scrollToSection('contact-row')}
              className="px-4 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-300 hover:text-white border border-indigo-500/20 hover:border-indigo-500/40 rounded-xl cursor-pointer transition-all duration-300"
            >
              Falar Conosco
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-24 relative z-10">

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="hero-section">
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold text-slate-300 hover:border-slate-700 transition-colors">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Especialista & Pós-Graduado em IA Generativa</span>
            </div>

            {/* Main title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight text-balance">
              Transformando a Complexidade da IA em <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">Dicas Práticas.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance max-w-2xl">
              Sou o **Israel Pimentel**. Conecto o rigor acadêmico da inteligência artificial generativa com a linguagem prática das redes sociais. Criador do canal **Dica Top Dmais**, ajudando mais de **650 mil pessoas** a otimizarem suas rotinas de trabalho com automação em lote, vídeo inteligente e comandos profissionais.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => scrollToSection('ai-sandbox')}
                className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xl shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2 group transition-all active:scale-[0.98]"
              >
                Testar Prancheta de Prompt <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('dica-hub')}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                Explorar Dicas Virais
              </button>
            </div>

          </div>

          {/* Right Side: Virtual Identity Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 pointer-events-none animate-pulse" />
              
              <div className="relative border border-slate-800 bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 space-y-6 shadow-2xl">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">ID Digital Ativo</span>
                  </div>
                  <Terminal className="w-4 h-4 text-indigo-400" />
                </div>

                {/* Avatar portrait representation */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative group">
                    {/* Ring wrapper */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-60" />
                    <img
                      src="https://picsum.photos/seed/israelpimentel/300/300"
                      alt="Israel Pimentel"
                      referrerPolicy="no-referrer"
                      className="relative w-28 h-28 rounded-full object-cover border-2 border-slate-950 z-10"
                    />
                  </div>

                  <div>
                    <h2 className="font-display font-black text-xl text-white">Israel Pimentel</h2>
                    <p className="text-xs text-indigo-300 font-mono mt-0.5">@IsraelPimentel</p>
                  </div>
                </div>

                {/* Micro tech metrics stats inside card */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/40 text-center">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Instagram</div>
                    <div className="text-[15px] font-bold text-white font-mono mt-0.5">+590K</div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Seguidores</div>
                  </div>
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/40 text-center">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">YouTube</div>
                    <div className="text-[15px] font-bold text-white font-mono mt-0.5">+60K</div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Inscritos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CREDENTIALS METRIC GRID */}
        <section className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6" id="metrics-block">
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">digital footprint</div>
            <div className="text-2xl sm:text-3xl font-black font-display text-white">+650.000</div>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">Mentes alcançadas e impactadas diariamente com dicas diretas e pragmáticas no Brasil.</p>
          </div>
          <div className="space-y-1.5 sm:border-l sm:border-slate-900 sm:pl-6">
            <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">educational background</div>
            <div className="text-2xl sm:text-3xl font-black font-display text-white">Pós-Graduado</div>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">Especialista acadêmico certificado em modelagem preditiva e Inteligência Artificial Generativa.</p>
          </div>
          <div className="space-y-1.5 sm:border-l sm:border-slate-900 sm:pl-6">
            <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">content engagement</div>
            <div className="text-2xl sm:text-3xl font-black font-display text-white">Milhões</div>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">De visualizações mensais orgânicas, demonstrando autoridade na simplificação da tecnologia.</p>
          </div>
        </section>


        {/* BENTO GRI PROFESSIONAL PILLARS */}
        <section className="space-y-10" id="bento-expertise">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 font-bold">PILARES PROFISSIONAIS</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white">A Autoridade de Israel Pimentel</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">Por que Israel é a ponte certa entre a inovação acadêmica profunda e os resultados reais do mercado digital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Box 1: Academics */}
            <div className="md:col-span-4 bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-8 group transition-all duration-300">
              <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20 text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-base text-white">Formação de Vanguarda</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Especialista e pós-graduado focado no ecossistema de Inteligência Artificial Generativa, compreendendo os pilares que regem LLMs e difusão.</p>
              </div>
            </div>

            {/* Box 2: Social Media Hub */}
            <div className="md:col-span-8 bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-8 group transition-all duration-300 relative overflow-hidden">
              {/* Decorative faint glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/20 text-pink-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20 text-rose-400">
                  <Youtube className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-1.5 max-w-xl">
                <h3 className="font-display font-bold text-base text-white">Criação de Conteúdo Viral: Dica Top Dmais</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Simplificação absoluta de complexidades de codificação e automação. Com mais de **590 mil no Instagram** e **60 mil no YouTube**, Israel ensina milhões a dominar a tecnologia de ponta no dia a dia.</p>
              </div>
            </div>

            {/* Box 3: Enterprise consulting */}
            <div className="md:col-span-8 bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-8 group transition-all duration-300">
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 text-purple-400">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 max-w-xl">
                <h3 className="font-display font-bold text-base text-white">Palestras & Consultorias de Impacto</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Engenharia de prompt para o ecossistema corporativo. Condução de consultorias estratégicas para desmistificar regras técnicas, elevar a produtividade por colaborador e automatizar fluxos de marketing em escala.</p>
              </div>
            </div>

            {/* Box 4: Tech Stack Specialist */}
            <div className="md:col-span-4 bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-8 group transition-all duration-300">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-base text-white">Alinhamento Prático</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Conexão transparente entre dezenas de ferramentas líderes como Midjourney, ChatGPT, Luma Dream Machine, Make.com, runway e n8n.</p>
              </div>
            </div>
          </div>
        </section>


        {/* PROMPT SANDBOX COMPONENT */}
        <section className="space-y-8 scroll-mt-20" id="ai-sandbox">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 font-bold">1. EXPERIMENTE NA PRÁTICA</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white">Engenharia de Prompt Inteligente</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Escreva comandos básicos na prancheta interativa e assista ao otimizador avançado traduzir suas ideias nos mesmos parâmetros técnicos que Israel Pimentel constrói para seus vídeos de alta performance corporativa.
            </p>
          </div>
          <PromptOptimizer />
        </section>


        {/* CONTENT HUB CONTAINER */}
        <section className="space-y-8 scroll-mt-20" id="dica-hub">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 font-bold">2. CONTEÚDO EXCLUSIVO</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white">Explorar Tutoriais: Dica Top Dmais</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Mapeie os truques, ferramentas secretas e prompts que geraram milhões de impressões orgânicas e impulsionaram carreiras com IA generativa prática. Filtre os tópicos e aprenda o passo a passo de cada um.
            </p>
          </div>
          <DicaHub />
        </section>


        {/* VIRTUAL BOT / CHAT WITH ISRAEL AI */}
        <section className="space-y-8 scroll-mt-20" id="virtual-bot">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 font-bold">3. COPILOTO VIRTUAL DE IA</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white">Converse com "Israel AI"</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Quer saber qual ferramenta se encaixa no seu projeto, como o canal Dica Top Dmais conquistou mais de meio milhão de seguidores ou como funciona a consultoria corporativa? Interaja agora com o clone inteligente de Israel.
            </p>
          </div>
          <VirtualBot />
        </section>


        {/* BOOKING CONTACT ROW */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-20 items-stretch" id="contact-row">
          
          <div className="lg:col-span-5 bg-slate-900/20 border border-slate-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-400 font-bold">CONTATO DIRETO</span>
              <h3 className="font-display font-black text-2xl text-white">Tire suas ideias do papel.</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-balance">
                Procurando assessoria, palestras dinâmicas de tecnologia, parcerias editoriais de alto engajamento ou consultoria especializada de IA em processos? Fale diretamente com a equipe.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 items-center text-xs sm:text-sm text-slate-300">
                  <span className="p-2 bg-slate-900 border border-slate-800 rounded bg-indigo-500/5 text-indigo-400">✉️</span>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Inquiries Diretos</div>
                    <a href="mailto:contato@dicatopdmais.com.br" className="hover:text-indigo-400 transition-colors">contato@dicatopdmais.com.br</a>
                  </div>
                </div>

                <div className="flex gap-3 items-center text-xs sm:text-sm text-slate-300">
                  <span className="p-2 bg-slate-900 border border-slate-800 rounded bg-pink-500/5 text-pink-400">📱</span>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Instagram Oficial</div>
                    <a href="https://instagram.com/dicatopdmais" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors flex items-center gap-1">@dicatopdmais <ExternalLink className="w-3 h-3" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl flex items-center gap-3">
              <Laptop className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed">
                "A inteligência artificial não vai substituir você, mas o profissional que a utiliza com maestria irá acadêmica e profissionalmente." — **Israel Pimentel**
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-500 text-xs py-8 mt-16" id="footer-section">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-display font-medium text-slate-300 tracking-wider">ISRAEL PIMENTEL</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span>Dica Top Dmais © {new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px]">
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-850">React 19 & Vite</span>
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-850">Framer Motion</span>
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-850 font-semibold text-indigo-400">Generative AI expert</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
