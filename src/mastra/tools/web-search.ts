import { createTool } from "@mastra/core/tools";
import Exa from "exa-js";
import { z } from "zod";

const exa = new Exa("6e60700f-2d62-4123-bcb3-32fa1e0f5006");

export const webSearchTool = createTool({
  id: "web-search",
  description: "Search the web and return sources with highlighted excerpts.",
  inputSchema: z.object({
    query: z.string().describe("A search query")
  }),
  outputSchema: z.object({
    results: z.array(
      z.object({
        title: z.string().nullable(),
        url: z.string(),
        publishedDate: z.string().nullable(),
        highlights: z.array(z.string())
      })
    )
  }),
  execute: async ({ query }) => {
    const response = await exa.search(query, {
      type: "auto",
      numResults: 5,
      contents: { highlights: true }
    });

    return {
      results: response.results.map((result) => {
        return {
          title: result.title ?? null,
          url: result.url,
          publishedDate: result.publishedDate ?? null,
          highlights: result.highlights ?? []
        };
      })
    };
  }
});
