import { GoogleGenAI, Type, Chat, GenerateContentResponse } from "@google/genai";

// Fix: Initialize GoogleGenAI with the API key from environment variables as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCareerRecommendations(interests: string, skills: string, subjects: string) {
  // Fix: Removed API_KEY check to align with guideline that API_KEY is always available.
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the following student profile, suggest 3 distinct career paths.
      
      Interests: "${interests}"
      Skills: "${skills}"
      Favorite Subjects: "${subjects}"
      
      For each career, provide a careerName, a brief description, a list of requiredSkills, and an averageSalary (as a string).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              careerName: { type: Type.STRING },
              description: { type: Type.STRING },
              requiredSkills: { type: Type.ARRAY, items: { type: Type.STRING } },
              averageSalary: { type: Type.STRING }
            },
            required: ["careerName", "description", "requiredSkills", "averageSalary"]
          }
        }
      }
    });
    
    const jsonText = response.text.trim();
    return JSON.parse(jsonText);

  } catch (error) {
    console.error("Error fetching career recommendations:", error);
    return [];
  }
}

export async function getScholarshipRecommendations(level: string, field: string, keywords: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the following student profile, suggest 5 relevant scholarships.
      
      Academic Level: "${level}"
      Field of Study: "${field}"
      Keywords: "${keywords}"
      
      For each scholarship, provide a scholarshipName, a brief description, eligibility criteria, the awardAmount, and a direct application link.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              scholarshipName: { type: Type.STRING },
              description: { type: Type.STRING },
              eligibility: { type: Type.STRING },
              awardAmount: { type: Type.STRING },
              link: { type: Type.STRING, description: "A direct URL to the scholarship application page." }
            },
            required: ["scholarshipName", "description", "eligibility", "awardAmount", "link"]
          }
        }
      }
    });
    
    const jsonText = response.text.trim();
    return JSON.parse(jsonText);

  } catch (error) {
    console.error("Error fetching scholarship recommendations:", error);
    throw new Error("Failed to fetch scholarship recommendations.");
  }
}


let chatInstance: Chat | null = null;

function getChatInstance(): Chat {
  if (!chatInstance) {
    chatInstance = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
          systemInstruction: "You are 'Pathy', a friendly, encouraging, and helpful AI career guide for the FindMyPath website. Your goal is to assist students from grades 9-12 and undergraduate levels. Answer questions about careers, exams, and skills clearly and concisely. Guide users to relevant sections of the website. Keep your tone positive and motivating. Use Markdown for formatting, like lists and bold text.",
      }
    });
  }
  return chatInstance;
}


export async function streamChatResponse(message: string, onChunk: (text: string) => void): Promise<void> {
    // Fix: Removed API_KEY check and fallback behavior to align with guidelines.
    try {
        const chat = getChatInstance();
        const result = await chat.sendMessageStream({ message });

        for await (const chunk of result) {
            onChunk(chunk.text);
        }

    } catch (error) {
        console.error("Error streaming chat response:", error);
        onChunk("Sorry, I encountered an error. Please try again.");
    }
}
