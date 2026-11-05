import { streamObject } from "ai";
import { pokemonSchema } from "./schema";
import { groq } from "@ai-sdk/groq";

export async function POST(req: Request) {
  try {
    const { type } = await req.json();

    const result = streamObject({
      model: groq("openai/gpt-oss-120b"),
      output: "array",
      schema: pokemonSchema,
      prompt: `Generate a list of 5 ${type} type pokemon`,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error generating pokemon:", error);
    return new Response("Failed to generate pokemon", { status: 500 });
  }
}
