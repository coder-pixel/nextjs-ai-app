import { generateText } from "ai";
import { groq } from "@ai-sdk/groq";

export async function POST() {
  const { text } = await generateText({
    model: groq("openai/gpt-oss-120b"),
    prompt: "Explain what an LLM is?",
  });

  return Response.json({ text });
}
