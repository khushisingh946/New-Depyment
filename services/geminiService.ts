
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// Note: process.env.API_KEY is handled by the execution environment
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateAssistantResponse = async (prompt: string): Promise<string> => {
  try {
    const ai = getAIClient();
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are Nexus, a helpful and efficient workspace assistant. Keep responses concise and focused on productivity.",
        temperature: 0.7,
      }
    });
    
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Could not connect to Nexus AI. Please check your configuration.";
  }
};
