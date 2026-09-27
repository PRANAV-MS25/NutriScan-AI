import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function analyzeFoodImage(base64Image) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `Analyze this food image and estimate its nutritional breakdown. Return STRICTLY valid JSON with no markdown formatting or extra text:
    {
      "meal": "Detected Food Item Name",
      "calories": 450,
      "protein": 25,
      "carbs": 50,
      "fats": 15
    }`;

    const imagePart = {
      inlineData: { 
        data: base64Image.split(",")[1], 
        mimeType: "image/jpeg" 
      },
    };

    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().replace(/```json|```/g, "").trim();
    
    return JSON.parse(responseText);
  } catch (err) {
    console.error("AI Analysis Error:", err);
    throw new Error(err.message || "Failed to analyze image.");
  }
}