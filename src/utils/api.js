import OpenAI from "openai";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function generateResponse(prompt) {
  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt,
      max_tokens: 200,
    });

    if (response && response.choices && response.choices.length > 0) {
      return response.choices[0].text.trim();
    }

    throw new Error("Invalid response format or empty choices array");
  } catch (error) {
    console.error("요약 생성 중 에러:", error);
    throw error;
  }
}

export default generateResponse;
