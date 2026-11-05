import { generateSpeech } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

// Create an OpenAI-compatible instance routed directly to Groq
const groqSpeechProvider = createOpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { text, voice = "hannah" } = await req.json(); // Default to 'hannah' if not specified

    // 1. Fixed the 'possibly undefined' error by ensuring the method exists
    if (!groqSpeechProvider.speechModel) {
      throw new Error(
        "The installed version of @ai-sdk/groq does not support speechModel.",
      );
    }

    // Call generateSpeech completely using the Vercel AI SDK patterns
    const { audio } = await generateSpeech({
      model: groqSpeechProvider.speechModel("canopylabs/orpheus-v1-english"),
      text,
      // ✅ Core Fix: Pass voice & outputFormat directly at the top level
      //   instructions:
      //     "Speak the given text in hindi language with proper prounciation",
      voice: voice,
      outputFormat: "wav",
      language: "auto",
    });

    // Cast the uint8Array as BodyInit to satisfy the Next.js/Browser Response constructor
    return new Response(audio.uint8Array as BodyInit, {
      headers: {
        "Content-Type": audio.mediaType || "audio/wav", // Note: Orpheus outputs WAV natively
      },
    });
  } catch (error) {
    console.error("Error generating speech:", error);
    return new Response("Failed to generate speech", { status: 500 });
  }
}
