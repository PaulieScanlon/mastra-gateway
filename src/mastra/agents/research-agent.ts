import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { webSearchTool } from "../tools/web-search";

export const researchAgent = new Agent({
  id: "research-agent",
  name: "Research Agent",
  instructions: `
    You are a research assistant. For every question, search the web before answering.
    Run several searches when a question has more than one part.
    Summarize what you find and cite each claim with its source URL.`,
  model: "mastra/anthropic/claude-fable-5.2",
  tools: { webSearchTool },
  memory: new Memory()
});
