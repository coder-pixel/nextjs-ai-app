import {
  streamText,
  UIMessage,
  convertToModelMessages,
  tool,
  InferUITools,
  UIDataTypes,
  stepCountIs,
} from "ai";
import { createMCPClient } from "@ai-sdk/mcp";
import { z } from "zod";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { groq } from "@ai-sdk/groq";

const tools = {
  getWeather: tool({
    description: "Get the weather for a location",
    inputSchema: z.object({
      city: z.string().describe("The city to get the weather for"),
    }),
    execute: async ({ city }) => {
      if (city === "Delhi") {
        return "70°F and cloudy";
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

    const httpTransport = new StreamableHTTPClientTransport(
      new URL("https://app.mockmcp.com/servers/hKW4Dxa4-Kz6/mcp"),
      {
        requestInit: {
          headers: {
            Authorization:
              "Bearer mcp_m2m_85yyqvE_LL0IIRwM0JHTUd4HnzEu5iIeu-dD-ZjHyNc_96d229f96e2af9b4",
          },
        },
      },
    );

    const mcpClient = await createMCPClient({
      transport: httpTransport,
    });

    const mcpTools = await mcpClient.tools();

    const result = streamText({
      model: groq("openai/gpt-oss-120b"),
      messages: [...(await convertToModelMessages(messages))],
      tools: { ...tools, ...mcpTools },
      stopWhen: stepCountIs(2),
      onFinish: async () => {
        await mcpClient.close();
      },
      onError: async (error) => {
        await mcpClient.close();
        console.error("Error during streaming:", error);
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error streaming chat completion:", error);
    return new Response("Failed to stream chat completion", { status: 500 });
  }
}
