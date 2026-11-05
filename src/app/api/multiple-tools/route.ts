import { groq } from "@ai-sdk/groq";
import {
  convertToModelMessages,
  streamText,
  UIMessage,
  tool,
  UIDataTypes,
  InferUITools,
  stepCountIs,
} from "ai";
import { z } from "zod";

const tools = {
  getLocation: tool({
    description: "Get the location of a user",
    inputSchema: z.object({
      name: z.string().describe("The name of the user"),
    }),
    execute: async ({ name }) => {
      if (name === "Bruce Wayne") {
        return "Delhi";
      } else if (name === "Clark Kent") {
        return "Mumbai";
      } else {
        return "Unknown";
      }
    },
  }),
  getWeather: tool({
    description: "Get the weather for a location",
    inputSchema: z.object({
      city: z.string().describe("The city to get the weather for"),
    }),
    execute: async ({ city }) => {
      if (city === "Delhi") {
        return "90°F and cloudy";
      } else if (city === "Mumbai") {
        return "80°F and sunny";
      } else {
        return "Unknown";
      }
    },
  }),
};

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    const result = streamText({
      model: groq("openai/gpt-oss-120b"),
      messages: [
        {
          role: "assistant",
          content:
            "You are a helpful coding assistant. Keep responses under 3 sentences and focus on practical examples.",
        },
        ...(await convertToModelMessages(messages)),
      ],
      tools,
      stopWhen:
        stepCountIs(
          3,
        ) /* step 1 -> calls getLocation tool to get the location info
             step 2 -> get's the location info from step 1, and calls the getWeather tool to get the weather info
             step 3 -> get's the weather info from step 2 and processes and returns the output 
           */,
    });

    result.usage.then((usage) => {
      console.log({
        messageCount: messages.length,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        totalTokens: usage.totalTokens,
      });
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error streaming chat completion:", error);
    return new Response("Failed to stream chat completion", { status: 500 });
  }
}
