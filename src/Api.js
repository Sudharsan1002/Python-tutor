import axios from "axios";

export const askGeminiAI = async (message, apiKey) => {
  try {
    const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
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
                "Content-Type":"application/jsoon"
            }
        }
    );
    return response.data.candidates[0].content.parts[0].text
  } catch (error) {
     console.error("Error communicating with Gemini AI:", error);
     return "Sorry, I couldn't process that request.";
  }
};
