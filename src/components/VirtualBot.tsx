/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageSquare, Sparkles, BookOpen, User, HelpCircle, Laptop } from 'lucide-react';
import { CHAT_BOT_FAQ } from '../data';
import { ChatMessage } from '../types';

export default function VirtualBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init-1',
      sender: 'bot',
      text: 'Fala galera! Bem-vindo ao meu espaço digital. Eu sou o Israel AI, um assistente inteligente programado com todos os meus conteúdos sobre Inteligência Artificial Generativa, dicas de redes sociais e produtividade corporativa.',
      time: 'Agora'
    },
    {
      id: 'msg-init-2',
      sender: 'bot',
      text: 'O que você quer ver hoje? Você pode digitar sua pergunta abaixo ou clicar em um dos tópicos rápidos para começarmos!',
      time: 'Agora'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    { label: '📱 Como crescer no Instagram?', keyword: 'instagram' },
    { label: '🎓 Como virar um Especialista IA?', keyword: 'estudar' },
    { label: '⚙️ Quais suas ferramentas prediletas?', keyword: 'ferramenta' },
    { label: '💼 Como contratar palestras/consultoria?', keyword: 'palestra' },
    { label: '🎁 Revelar uma Dica Secreta!', keyword: 'dica' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // AI thinking simulation
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let matchResponse = '';

      // Find keyword match in FAQ
      for (const faq of CHAT_BOT_FAQ) {
        if (faq.keywords.some(keyword => lowerText.includes(keyword))) {
          matchResponse = faq.response;
          break;
        }
      }

      // Default fallback
      if (!matchResponse) {
        matchResponse = `Cara, essa pergunta é sensacional! Falando como Especialista em IA Generativa, eu te diria que o grande segredo hoje é entender o **processo de instrução híbrida**. 
\nNo canal **Dica Top Dmais**, sempre mostro que a tecnologia precisa servir para economizar seu tempo real. 
\nSe quiser uma ajuda cirúrgica para seu projeto ou negócio, me conta em detalhes lá no formulário de contato abaixo ou interaja comigo no Instagram! E aí, qual outra dúvida de IA você tem?`;
      }

      setMessages(prev => [...prev, {
        id: `msg-bot-${Date.now()}`,
        sender: 'bot',
        text: matchResponse,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[520px]" id="virtual-assistant-chat-container">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/40 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border border-indigo-400/30">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full" />
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-white">Israel AI (Copiloto Virtual)</h3>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              Online e Pronto para Dicas
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-950/40 border border-slate-800/80 px-2.5 py-1 rounded-md">
          <Laptop className="w-3.5 h-3.5 text-indigo-400" />
          <span>V1.4-Llama-FineTuned</span>
        </div>
      </div>

      {/* Messages Sandbox container */}
      <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-slate-950/30 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
          >
            {/* Avatar indicator */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.sender === 'user' 
                ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white' 
                : 'bg-slate-800 text-indigo-400 border border-slate-700/60'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
            </div>

            {/* Bubble */}
            <div className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed space-y-1.5 ${
              msg.sender === 'user'
                ? 'bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-600/10'
                : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none'
            }`}>
              {/* Parse double asterisks to bold text naturally in React without external heavy deps */}
              <p className="whitespace-pre-line text-slate-100">
                {msg.text.split('**').map((chunk, idx) => (
                  idx % 2 === 1 ? <strong key={idx} className="text-white font-bold">{chunk}</strong> : chunk
                ))}
              </p>
              <div className={`text-[9px] font-mono text-right ${msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-500'}`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-slate-800 text-indigo-400 border border-slate-700/60 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 animate-bounce" />
            </div>
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl rounded-tl-none px-4 py-3 text-xs flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Israel AI está formulando resposta</span>
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick promts shortcut */}
      <div className="p-3 bg-slate-900/40 border-t border-slate-800/60 flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
        {quickPrompts.map((qp, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(qp.label.slice(2))}
            disabled={isTyping}
            className="flex-none px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-750 text-slate-300 hover:text-white rounded-full text-xs font-medium cursor-pointer transition-colors active:scale-95 disabled:opacity-50"
          >
            {qp.label}
          </button>
        ))}
      </div>

      {/* Input container footer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputText);
        }}
        className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Faça uma pergunta para Israel AI..."
          className="flex-1 bg-slate-900 hover:bg-slate-900/80 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-slate-200 placeholder-slate-500 text-xs sm:text-sm outline-none transition-all duration-200"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl shadow-lg shadow-indigo-600/10 cursor-pointer transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
