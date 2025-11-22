import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { products } from '../data';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "Frosty", the helpful AI sales assistant for "Arctic Flow", a premium cooler brand.
Your goal is to help customers find the perfect cooler based on their activities (camping, beach, fishing, party, etc.).

Here is our current product catalog:
${JSON.stringify(products.map(p => ({ id: p.id, name: p.name, price: p.price, features: p.features, capacity: p.capacity, category: p.category })))}

Rules:
1. Be friendly, enthusiastic, and concise.
2. If a user asks for a recommendation, suggest a specific product from the catalog above and explain why it fits their need.
3. If the user asks about pricing, quote the exact price from the catalog.
4. Do not recommend products we don't have.
5. Use emojis occasionally to keep it fun 🧊.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I got a bit frozen up. Could you repeat that?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the main server right now. Please try again in a moment!";
  }
};
