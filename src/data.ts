/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DicaItem, OptimizedPrompt } from './types';

export const DICAS_DATA: DicaItem[] = [
  {
    id: 'dica-1',
    category: 'ia',
    title: 'Geração de Avatares em Vídeo Ultra-Realistas',
    description: 'Como gerar apresentadores virtuais com sincronia labial impecável usando IAs gratuitas para automação de canais.',
    platform: 'instagram',
    stats: '1.2M visualizações',
    link: 'https://instagram.com/dicatopdmais',
    tips: [
      'Use áudios de alta qualidade para melhor sincronia',
      'Prefira iluminação frontal no avatar estático',
      'Evite movimentos bruscos de cabeça no modelo base'
    ]
  },
  {
    id: 'dica-2',
    category: 'produtividade',
    title: 'Apresentações de Auto-Impacto em 1 Minuto',
    description: 'Como encadear o Gamma App com o ChatGPT para estruturar e desenhar slides corporativos inteiros apenas com um prompt.',
    platform: 'instagram',
    stats: '840K visualizações',
    link: 'https://instagram.com/dicatopdmais',
    tips: [
      'Defina a persona do público-alvo no prompt inicial',
      'Ordene os blocos de informação usando a técnica AIDA',
      'Use IA de imagem para criar as ilustrações de fundo uniformes'
    ]
  },
  {
    id: 'dica-3',
    category: 'videos',
    title: 'O Guia Supremo de Modelos de Vídeo Gen-3 e Luma',
    description: 'Dominando direções de câmera virtuais (pan, tilt, zoom) por escrita de prompt para obter resultados hiper-realistas de cinema.',
    platform: 'youtube',
    stats: '75K visualizações',
    link: 'https://youtube.com',
    tips: [
      'Inicie os prompts com verbos de ação cinematográficos',
      'Utilize termos de câmera como "FPV camera drone shot" ou "35mm dolly zoom"',
      'Mantenha as taxas de movimento entre 4 e 7 para maior naturalidade'
    ]
  },
  {
    id: 'dica-4',
    category: 'redes',
    title: 'Otimização Algorítmica para Criadores de Conteúdo',
    description: 'Como usar análise de sentimento e ferramentas de inteligência artificial para mapear tópicos de altíssimo engajamento.',
    platform: 'instagram',
    stats: '950K visualizações',
    link: 'https://instagram.com/dicatopdmais',
    tips: [
      'Analise os 10 primeiros segundos com o retentor de atenção',
      'Use ganchos de curiosidade científica ou quebra de padrão visual',
      'Estruture as legendas focando no salvamento e compartilhamento'
    ]
  },
  {
    id: 'dica-5',
    category: 'ia',
    title: 'Engenharia de Prompt para Agentes Autônomos',
    description: 'Técnicas avançadas de Few-Shot prompting e Chain-of-Thought estruturadas para tomadas de decisão complexas e automações reais.',
    platform: 'youtube',
    stats: '60K visualizações',
    link: 'https://youtube.com',
    tips: [
      'Insira sempre exemplos claros de input/output (Few-shot)',
      'Instrua a IA a detalhar o raciocínio passo a passo antes de resolver',
      'Delimite regras estritas de restrição para evitar alucinações'
    ]
  },
  {
    id: 'dica-6',
    category: 'produtividade',
    title: 'Automação Absoluta de Planilhas e Relatórios com IA',
    description: 'Aprenda a integrar o Google Sheets com APIs de modelos de linguagem para processar milhares de leads e feedbacks de forma autônoma.',
    platform: 'instagram',
    stats: '810K visualizações',
    link: 'https://instagram.com/dicatopdmais',
    tips: [
      'Proteja dados sensíveis limpando-os antes do envio',
      'Use prompts estruturados para classificar sentimentos em lote',
      'Configure acionadores de tempo (triggers) para operar em segundo plano'
    ]
  }
];

export const PROMPT_EXAMPLES: OptimizedPrompt[] = [
  {
    id: 'ex-1',
    category: 'Imagens Fotográficas',
    userPrompt: 'foto de um empresário trabalhando',
    optimizedPrompt: 'A highly detailed professional photorealistic portrait of an experienced Brazilian tech founder in his late 30s, working in a modern minimalist home office. Clean wooden desk, soft ambient warm lights glowing in the background, bokeh effect, focused facial expression, shallow depth of field. Shot on 85mm lens, f/1.8, cinematic lighting, 8k resolution, volumetric light --ar 16:9',
    explanation: 'Adicionamos contexto geográfico e profissional para dar mais personalidade, especificamos a iluminação de fundo (backlit ambient warm lights) para dar profundidade estética, e indicamos controles fotográficos profissionais de câmera (lente 85mm f/1.8) e proporção de tela apropriada para banner corporativo.',
    parameters: {
      temperature: 0.7,
      style: 'Fotorrealismo Cinematográfico',
      lighting: 'Controles Volumétricos de Estúdio',
      aspectRatio: '16:9'
    }
  },
  {
    id: 'ex-2',
    category: 'Vídeo Gerado por IA',
    userPrompt: 'carro correndo no deserto na lua de noite',
    optimizedPrompt: 'Cinematic FPV drone tracking shot, flying low and fast chasing a futuristic lunar rover speeding through illuminated craters on a dark dust-filled moon desolation planet. Massive galaxy and nebulae shining brightly in the deep black sky above, dramatic shadows, lens flares, ultra-realistic engine exhaust glow, 4k, slow-motion, Gen-3 motion scale 6',
    explanation: 'Substituímos termos simples por direções técnicas de movimento de câmera ("Cinematic FPV drone tracking shot"), descrevemos a iluminação dramática exigida para espaço sideral de noite, e incluímos parâmetros de renderização de movimento para suavizar artefatos típicos de IAs de vídeo.',
    parameters: {
      temperature: 0.8,
      style: 'Space Sci-Fi Cinema',
      lighting: 'Brilho de Nebulosa + Faróis de Carro',
      aspectRatio: '16:9'
    }
  },
  {
    id: 'ex-3',
    category: 'Marketing & Copys',
    userPrompt: 'escrever post de instagram sobre dicas de produtividade',
    optimizedPrompt: 'Atue como um especialista sênior em neuromarketing e copywriter de alto engajamento. Redija um carrossel de 5 slides para o Instagram sobre produtividade prática focada em profissionais de tecnologia cansados. Use a técnica AIDA. Slide 1 deve ter um gancho de quebra de padrão chocante. Utilize tom persuasivo, objetivo, empático e prático. Adicione 3 chamadas para ação diferentes focadas em bookmark (salvamento). Defina hashtags estratégicas.',
    explanation: 'Definimos o papel da IA como especialista de alto nível (Neuromarketing) para elevar o nível cognitivo das respostas, estruturamos o formato exato que gera engajamento (Carrossel com gancho visual inicial e técnica AIDA) de modo a reter o usuário no post.',
    parameters: {
      temperature: 0.6,
      style: 'Neuromarketing Persuasivo',
      lighting: 'Estruturação AIDA + Carrossel'
    }
  }
];

export const CHAT_BOT_FAQ = [
  {
    keywords: ['instagram', 'crescer', 'seguidores', 'canal', 'dica top dmais'],
    response: 'Fala, pessoal! O canal **Dica Top Dmais** nasceu com um objetivo muito claro: descomplicar a tecnologia e a IA. Para passar de **590 mil seguidores no Instagram**, a chave de ouro foi aliar **resolução prática de problemas diários** logo nos primeiros 3 segundos do vídeo com ganchos ultra-dinâmicos. O algoritmo de Reels valoriza a retenção rápida e o salvamento do post. Cada vídeo precisa entregar valor acionável que as pessoas sintam vontade de guardar e enviar para amigos!'
  },
  {
    keywords: ['estudar', 'especialista', 'pós-graduado', 'instituto', 'formação', 'carreira'],
    response: 'Fazer uma pós-graduação em **IA Generativa** abriu minha mente para a estrutura matemática por trás dos modelos LLM, difusão e redes adversárias. A minha recomendação para quem quer virar Especialista de fato é: não seja apenas um digitador de prompt! Entenda a arquitetura de context window, os padrões de fine-tuning e aprenda a conectar ferramentas através de APIs. O mercado busca quem sabe construir soluções, não apenas quem acha dicas bonitinhas.'
  },
  {
    keywords: ['palestra', 'contratar', 'consultoria', 'empresa', 'workshop', 'agenda'],
    response: 'Com todo prazer! Eu ministro **palestras exclusivas, workshops práticos corporativos e consultorias estratégicas** para empresas que desejam aplicar Inteligência Artificial Generativa para otimizar tempo, criar conteúdo em escala e aumentar a produtividade operacional. Você pode preencher o formulário no final deste site ou clicar no botão de contato direto. Vamos transformar os processos da sua empresa!'
  },
  {
    keywords: ['favoritas', 'ferramentas', 'recomenda', 'melhores', 'ia'],
    response: 'Minhas dicas top de ouro de ferramentas indispensáveis:\n\n1. **Para Produtividade e Texto:** Claude 3.5 Sonnet (melhor para códigos e raciocínio profundo) e Gemini 1.5 Pro (pela janela de contexto gigantesca).\n2. **Para Imagens:** Midjourney v6 e Stable Diffusion (para controle cirúrgico).\n3. **Para Vídeos:** Runway Gen-3 Alpha, Kling AI e Luma Dream Machine.\n4. **Para Automações de Trabalho:** Make.com e n8n empacotados com agentes GPT.'
  },
  {
    keywords: ['dica', 'secreta', 'hoje', 'bônus'],
    response: 'Aqui vai uma **Dica Top Secreta** extra: sempre que for criar um prompt complexo, use o método de **Metaprompting**. Em vez de tentar escrever o prompt perfeito de primeira, instrua o ChatGPT ou Gemini da seguinte forma: *"Atue como um Engenheiro de Prompt Sênior. Faça-me 5 perguntas chave sobre meu objetivo para que, com minhas respostas, você mesmo construa o melhor prompt absoluto para essa tarefa."* Isso economiza horas de tentativas e erro!'
  }
];
