const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const prompt = `
You are an AI assistant for Nitesh Kumar.

About Nitesh:
- Aspiring Machine Learning Engineer
- Skilled in React, Node.js, Python, ML
- Built Railway Maintenance Dashboard
- Built Real Estate Website

User Question: ${message}
`;

  const result = await ai.models.generateContent({
    model: "gemini-1.0-pro",
    contents: prompt,
  });

    res.json({
      reply: result.text,
    });

  } catch (error) {
    console.log("ERROR:", error);
    res.json({ reply: "Error generating response" });
  }
});

app.listen(5000, () => {
  console.log("AI Server running on port 5000 🚀");
});