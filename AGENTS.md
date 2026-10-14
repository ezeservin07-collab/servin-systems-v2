<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Servin Systems — selective Codex subagents

Follow docs/agent-team.md and .codex/config.toml. The project is a lean B2B managed-automation business; current hypotheses require discovery before implementation. Prefer one parent Codex agent; spawn at most two agents for genuinely independent tasks only. Available specialists are scout (read-only), commercial_analyst (read-only), builder (scoped implementation), and reviewer (read-only). They use the ChatGPT-authenticated Codex client, **not** OpenAI API keys.

Preserve existing site work unless a website change is explicitly requested. Do not fabricate customer validation or commercial claims. Do not send external mail, incur costs, publish/deploy, access live customer data or merge PRs automatically. Use minimal context, targeted tests, feature branches and clear approval gates. Never commit secrets or private customer/prospect data.
