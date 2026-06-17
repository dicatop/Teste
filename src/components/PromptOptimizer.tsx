/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Copy, Check, Settings, Code, ArrowRight } from 'lucide-react';
import { PROMPT_EXAMPLES } from '../data';
import { OptimizedPrompt } from '../types';

export default function PromptOptimizer() {
  const [selectedExample, setSelectedExample] = useState<OptimizedPrompt>(PROMPT_EXAMPLES[0]);
  const [customInput, setCustomInput] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [resultPrompt, setResultPrompt] = useState<OptimizedPrompt | null>(PROMPT_EXAMPLES[0]);

  const handleSelectExample = (ex: OptimizedPrompt) => {
    setSelectedExample(ex);
    setResultPrompt(ex);
    setCustomInput('');
  };

  const handleOptimizeCustom = () => {
    if (!customInput.trim()) return;
    setIsOptimizing(true);

    // Heuristics to make the prompt optimization super rich and smart dynamically
    setTimeout(() => {
      const input = customInput.trim().toLowerCase();
      let category = 'Geral & Produtividade';
      let optimized = '';
      let explanation = '';
      let style = 'Moderno & Estruturado';
      let lighting = 'Estúdio';
      let aspect = '16:9';

      if (input.includes('foto') || input.includes('imagem') || input.includes('desenho') || input.includes('gato') || input.includes('pessoa')) {
        category = 'Imagens Fotográficas';
        style = 'Fotorrealista Hiper-detalhado';
        lighting = 'Luz Natural Volumétrica & Golden Hour';
        aspect = '3:2';
        optimized = `A flawless, high-resolution aesthetic photo of ${customInput}. Photorealistic detail, captured on a professional full-frame camera with 50mm f/1.2 lens. Sophisticated lighting with beautiful lens flares, cinematic rim light, crisp focus. Atmospheric depth of field, rich textures, 8k resolution, professionally color-graded --ar 3:2 --v 6.0`;
        explanation = 'Definimos a câmera (full-frame, lente 50mm), os detalhes de iluminação atmosférica de contorno (rim light) e adicionamos os parâmetros de renderização de imagem de nova geração (--v 6.0) para conferir um aspecto fotográfico intencional.';
      } else if (input.includes('video') || input.includes('filme') || input.includes('animação') || input.includes('correndo')) {
        category = 'Vídeo Gerado por IA';
        style = 'Cinematográfico 3D';
        lighting = 'Sombrio e Contraste Alto';
        aspect = '16:9';
        optimized = `Cinematic slow-motion scene of ${customInput}. Hyper-realistic textures, fluid camera motion zooming smoothly. Photorealistic VFX, dynamic smoke and particles, stunning volumetric light, epic orchestral vibe in the sequence. Created for Gen-3 and Runway engine, locked motion scale --ar 16:9`;
        explanation = 'Adicionamos direções de taxa de movimento (slow-motion), controle de profundidade tridimensional, e otimizamos o texto com terminologia nativa de motores de vídeo geradores para prevenir distorções na cena.';
      } else {
        category = 'Criação de Conteúdo & Copy';
        style = 'Marketing Digital';
        lighting = 'Estruturado';
        optimized = `Atue como um Engenheiro de Prompts e Copywriter Sênior especializado em reter a atenção nas redes sociais. Crie um roteiro ou texto atraente baseado em: "${customInput}". 
\nEstruture a resposta da seguinte forma:
- GANCHO DE ENTRADA: 1 frase magnética para os primeiros 3 segundos quebradora de padrão.
- CORPO DO CONTEÚDO: 3 pontos chaves muito práticos e diretos ("Dica Top!").
- CHAMADA PARA AÇÃO (CTA): Instrução clara focada no salvamento do post. 
\nMantenha um tom profissional, moderno, entusiasmado brasileiro e livre de enrolações.`;
        explanation = 'Estruturamos a IA sob uma persona de prestígio (Copywriter Sênior) e detalhamos o formato rígido de entrega técnica de retenção (gancho de 3 segundos + CTA de salvamento), otimizando a qualidade pragmática do output.';
      }

      setResultPrompt({
        id: 'custom-res',
        category,
        userPrompt: customInput,
        optimizedPrompt: optimized,
        explanation,
        parameters: {
          temperature: 0.7,
          style,
          lighting,
          aspectRatio: aspect
        }
      });
      setIsOptimizing(false);
    }, 1200);
  };

  const handleCopy = () => {
    if (!resultPrompt) return;
    navigator.clipboard.writeText(resultPrompt.optimizedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative" id="prompt-optimizer-container">
      {/* Decorative gradient corners */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header bar */}
      <div className="border-b border-slate-800 bg-slate-950/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">Prancheta de Prompt de Israel</h3>
            <p className="text-xs text-slate-400">Ferramenta interativa de otimização para IAs Generativas</p>
          </div>
        </div>
        
        {/* Example tabs */}
        <div className="flex flex-wrap gap-2">
          {PROMPT_EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => handleSelectExample(ex)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200 ${
                selectedExample.id === ex.id && !customInput
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {ex.category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Side: Input area */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5 uppercase tracking-wide">
              <Code className="w-3.5 h-3.5" /> 1. Digite sua Ideia de Comando
            </span>
            <p className="text-sm text-slate-300">
              Escreva como se estivesse conversando. Iremos reestruturar o comando utilizando as melhores técnicas de engenharia de contexto:
            </p>
            
            <div className="relative mt-2">
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Exemplo: foto realista de um programador no computador de noite, com linhas azuis de led..."
                className="w-full h-36 px-4 py-3 bg-slate-950/80 hover:bg-slate-950 focus:bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-slate-200 text-sm placeholder-slate-500 outline-none resize-none transition-all duration-300 shadow-inner"
              />
              {customInput && (
                <button
                  onClick={() => setCustomInput('')}
                  className="absolute right-3 top-3 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 px-2 py-1 rounded cursor-pointer transition-colors"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          <button
            onClick={handleOptimizeCustom}
            disabled={isOptimizing || !customInput.trim()}
            className={`w-full py-3.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
              !customInput.trim()
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-800'
                : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-xl shadow-indigo-600/10 hover:shadow-indigo-600/25 active:scale-[0.98]'
            }`}
          >
            {isOptimizing ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Otimizando com IAs Generativas...
              </>
            ) : (
              <>
                Ativar Otimizador "Dica Top!" <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Right Side: Result Output area */}
        <div className="flex flex-col bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 justify-between">
          {resultPrompt ? (
            <div className="space-y-4">
              {/* Category indicator & Copy */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/10 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {resultPrompt.category}
                </span>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg cursor-pointer transition-all duration-200 active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Formatted prompt block */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Comando Otimizado ("Top!"):</span>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-lg text-xs leading-relaxed font-mono text-slate-200 select-all max-h-40 overflow-y-auto whitespace-pre-wrap">
                  {resultPrompt.optimizedPrompt}
                </div>
              </div>

              {/* Explanation block */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wide">Por que este comando funciona melhor?</span>
                <p className="text-xs text-slate-400 leading-relaxed text-balance">
                  {resultPrompt.explanation}
                </p>
              </div>

              {/* Prompt engineering metadata stats */}
              <div className="pt-3 border-t border-slate-800/60 grid grid-cols-2 gap-3 text-[10px] font-mono text-slate-500">
                <div className="bg-slate-900/50 p-2 rounded border border-slate-800/40">
                  <div className="text-slate-400 uppercase tracking-wider text-[9px] mb-0.5">Estilo Artístico</div>
                  <div className="text-indigo-400 font-semibold">{resultPrompt.parameters.style}</div>
                </div>
                <div className="bg-slate-900/50 p-2 rounded border border-slate-800/40">
                  <div className="text-slate-400 uppercase tracking-wider text-[9px] mb-0.5">Iluminação & Foco</div>
                  <div className="text-purple-400 font-semibold">{resultPrompt.parameters.lighting || 'Padrão IA'}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500">
              <Settings className="w-8 h-8 opacity-20 mb-3 animate-spin duration-[6s]" />
              <p className="text-xs">Insira um prompt simples no editor ao lado e clique em otimizar para ver a engenharia de prompts acontecer.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
