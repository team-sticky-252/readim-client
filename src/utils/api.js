import OpenAI from "openai";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function generateResponse(prompt) {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: `${prompt}
    ---
    Please translate the above sentence into Korean using the OpenAI API.
    Focus strictly on summarizing the core content in the translation within 300 characters.
    Exclude any unrelated information or filler text, and utilize the provided max_tokens effectively for accuracy.`,
    max_tokens: 300,
  });

  if (response?.choices?.length > 0) {
    return response.choices[0].text.trim();
  }

  throw new Error("Invalid response format or empty choices array");
}

export default generateResponse;
