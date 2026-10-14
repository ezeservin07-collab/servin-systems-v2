# Servin Systems — Codex agent team

This config enables a **supervised** multiagent working style inside a signed-in Codex client. It is not a 24/7 autonomous server, CRM, email-sending bot or OpenAI API service. The parent Codex session owns all decisions and must explicitly start work. With an eligible ChatGPT Plus account, supported Codex usage consumes plan allowance subject to caps; no API usage is provisioned by this repository.

## Team and routing
- Parent coordinator: plan the smallest measurable next milestone with a capable model selected in the Codex UI.
- scout (Luna): read-only code/project mapping, short evidence.
- commercial_analyst (Luna): research/discovery, short hypotheses; never assert buyer intent without a reply.
- builder (Sol): narrow implementation, only after scope is clear.
- reviewer (Sol): independent targeted check for high-risk or customer-facing changes.

Use the parent only when tasks are short. At most two subagents can run concurrently. Delegate only independent, bounded work; if a task depends on another, do it sequentially. Keep one writer per file. Reuse test results and exact docs, not large old chat transcripts. Do not create perpetual loops or retry beyond one controlled diagnostic attempt per failure.

## Business priorities
Current hypothesis: managed B2B microautomations, implementation fee plus recurring service. First validate supplier price-list changes and invoice discrepancies among distributors in Chile; Uruguay as a second geography. No signed customers, prospect commitments, fixed pricing or guaranteed outcomes are established by these instructions. Prefer narrow and auditable proof-of-value over generalized chatbots or large CRM/database builds. Website content may represent an older positioning: do not silently overwrite it; propose any positioning change for explicit review.

## Safety and approval gates
- Never send or schedule outreach, sign contracts, deploy, bill, buy domains, spend paid credits, contact prospects or modify live customer data without the owner's explicit authorization for that action.
- Never store secrets, private customer datasets, personal prospect contact details or auth tokens in GitHub source, Issues, logs or agent output.
- Build in feature branches, run tests, submit PR for review. No automatic merges.
- Technical lint passing cannot verify a commercial claim or establish legal compliance.
- Confirm any external framework/API details from authoritative current documentation rather than memory when necessary.

## Suggested prompts
- 'Inspect only the Servin Systems web repo. Have scout identify actual page claims and reviewer assess factual/security risks independently. Return concise findings; do not edit.'
- 'Evaluate the distributor price-list/invoice discrepancy hypothesis using only evidence I provide. commercial_analyst should draft five short discovery questions, mark assumptions and recommend a pilot metric. Do not send anything.'
- 'Implement the agreed, isolated prototype. Have builder edit only the relevant files; verify lint and build locally. Ask reviewer to check PII exposure and unsupported claims. Open a PR, do not merge.'

## Cost and completion policy
No API-key inference, unauthorized subscription credit purchases, browser-session harvesting or billing bypass. The two-subagent limit reduces concurrency but does not guarantee a particular quota consumption. Stop on usage limit or request for payment. Report summary, changed paths, test commands and results, unverified risks, commercial assumptions and owner decisions required.
