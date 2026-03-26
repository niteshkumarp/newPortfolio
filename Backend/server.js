const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

// 🔑 Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 🔥 Custom prompt (VERY IMPORTANT)
    const prompt = `
You are an AI assistant for Nitesh Kumar.

About Nitesh:
- Aspiring Machine Learning Engineer
- Skilled in React, Node.js, Python, ML
- Built Railway Maintenance Dashboard using ML
- Built Real Estate Website
- Passionate about AI and Full Stack Development

User Question: ${message}

Answer clearly and professionally like a portfolio assistant.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });

  } catch (error) {
    console.log(error);
    res.json({ reply: "Error generating response" });
  }
});

app.listen(5000, () => {
  console.log("AI Server running on port 5000 🚀");
});