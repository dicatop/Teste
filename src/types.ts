/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DicaItem {
  id: string;
  category: 'ia' | 'produtividade' | 'videos' | 'redes';
  title: string;
  description: string;
  platform: 'instagram' | 'youtube';
  stats: string; // e.g. "1.2M views", "250K views"
  link: string;
  tips: string[];
}

export interface OptimizedPrompt {
  id: string;
  category: string;
  userPrompt: string;
  optimizedPrompt: string;
  explanation: string;
  parameters: {
    temperature: number;
    style: string;
    lighting?: string;
    aspectRatio?: string;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export interface BookingForm {
  name: string;
  email: string;
  company: string;
  serviceType: 'palestra' | 'consultoria' | 'patrocinio' | 'outro';
  details: string;
}
