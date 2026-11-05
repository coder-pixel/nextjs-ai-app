import { groq } from "@ai-sdk/groq";
import {
  convertToModelMessages,
  streamText,
  UIMessage,
  UIDataTypes,
  InferUITools,
  stepCountIs,
} from "ai";

const tools = {
  web_search: groq.tools.browserSearch({}),
};

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    const result = streamText({
      model: groq("openai/gpt-oss-120b"),
      messages: [...(await convertToModelMessages(messages))],
      tools,
      stopWhen: stepCountIs(2),
    });

    result.usage.then((usage) => {
      console.log({
        messageCount: messages.length,
        inputTokens: usage.inputTokens,
        outputTokens: usage.outputTokens,
        totalTokens: usage.totalTokens,
      });
    });

    return result.toUIMessageStreamResponse({
      sendSources: true, // change to better model for getting the sources
    });
  } catch (error) {
    console.error("Error streaming chat completion:", error);
    return new Response("Failed to stream chat completion", { status: 500 });
  }
}
