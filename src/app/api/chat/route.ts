import { streamText, UIMessage, convertToModelMessages } from "ai"
import { z } from "zod"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const {
      messages,
      model,
      webSearch,
      sendReasoning,
    }: {
      messages: UIMessage[]
      model?: string
      webSearch?: boolean
      sendReasoning?: boolean
    } = await req.json()

    const selectedModel = webSearch
      ? "perplexity/sonar"
      : model || "openai/gpt-4o"

    const result = streamText({
      model: selectedModel,
      messages: convertToModelMessages(messages),
      tools: {
        delete_file: {
          description: "Delete a file from the file system",
          inputSchema: z.object({
            filePath: z.string().describe("The path to the file to delete"),
            confirm: z
              .boolean()
              .default(false)
              .describe("Confirmation that the user wants to delete the file"),
          }),
          requireApproval: true,
          execute: async ({ filePath, confirm }) => {
            if (!confirm) {
              return {
                success: false,
                message: "Deletion not confirmed",
              }
            }
            await new Promise((resolve) => setTimeout(resolve, 500))
            return {
              success: true,
              message: `Successfully deleted ${filePath}`,
            }
          },
        },
      },
    })

    return result.toUIMessageStreamResponse({
      sendReasoning: sendReasoning || false,
    })
  } catch (error) {
    console.error("Chat API Error:", error)
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: (error as Error).message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
