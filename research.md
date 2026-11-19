# Mastra Gateway — research

Checked 2026-11-19.

## What it is

OpenAI-compatible API proxy with built-in Observational Memory. Model IDs use the `mastra/` prefix (`mastra/openai/gpt-6.1-sol`). Keys, credits, spend limits and billing live in Mastra platform.

## Docs

- `https://mastra.ai/models/gateways/mastra` (mastra repo `docs/src/content/en/models/gateways/mastra.mdx`)
- `https://gateway.mastra.ai/docs` — features, models, limits, API reference, examples
- Gateway docs say it supports every model in OpenRouter's catalog

## Models page

- Live at `https://mastra.ai/ai-gateway/models` (`/gateway/models` redirects)
- mastra-website PR #1615 (Max Katz), merged 2026-11-19 01:38 UTC
- Search, filter by lab/type/capabilities, sort by price/context/release date; input, output, cache prices per 1M tokens
- Backed by `/api/gateway-models`, revalidates hourly
- Newest model on 2026-11-19: Gemini 4 Neon (`google/gemini-4-neon`, released 2026-11-18)

## Observational Memory

- Pass `memory.thread` + `memory.resource` on generate/stream
- Project key (`msk_...`) + gateway-managed provider keys + project memory enabled → gateway stores observations
- Org key (`msk-gateway-...` / `mskv2_...`) → no memory API; configure `Memory` with `observationalMemory: true` to run it locally

## Scaffold

- `create-mastra --llm mastra` writes a Gateway key to `.env` as `MASTRA_GATEWAY_API_KEY` and prints the org's credit balance
- Default starter model: `mastra/openai/gpt-6.1-sol`; OM model `mastra/openai/gpt-6-luna`
- create-mastra 1.40.1 / @mastra/core 1.85.0

## Demo

Research assistant: `researchAgent` with an Exa `webSearchTool`, model `mastra/openai/gpt-6.1-sol`.
