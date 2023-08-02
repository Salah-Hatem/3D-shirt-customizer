import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAi = new OpenAIApi(config);

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Hello from DALL.E" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openAi.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const img = response.data.data[0].b64_json;
    res.status(200).json({ photo: img });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
