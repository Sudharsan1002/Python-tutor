import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const askGeminiAI = async (message) => {
  try {
    if (!API_KEY) {
      throw new Error("API key is missing! Please set VITE_GEMINI_API_KEY in .env");
    }
    const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
            contents: [
                {
                    role: "user",
                    parts:[{text:message}]
                }
            ]
        },
        {
            headers: {
                "Content-Type":"application/json"
            }
        }
    );
    return response.data.candidates[0].content.parts[0].text
  } catch (error) {
     console.error("Error communicating with Gemini AI:", error);
     return "Sorry, I couldn't process that request.";
  }
};
