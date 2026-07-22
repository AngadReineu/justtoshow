export type Vendor = "anthropic" | "moonshot";

export interface ModelRow {
  key: string;
  name: string;
  vendor: Vendor;
  developer: string;
  access: string;
  parameters: string;
  context: string;
  inputPrice: string;
  outputPrice: string;
  reasoning: string;
  bestFor: string;
  tier: string;
  maturity: string;
}

export const models: ModelRow[] = [
  {
    key: "haiku",
    name: "Claude Haiku 4.5",
    vendor: "anthropic",
    developer: "Anthropic",
    access: "Proprietary (API only)",
    parameters: "Not disclosed",
    context: "200K",
    inputPrice: "₹96",
    outputPrice: "₹482",
    reasoning: "Basic",
    bestFor: "High-volume, simple tasks",
    tier: "Entry",
    maturity: "Mature, GA",
  },
  {
    key: "sonnet",
    name: "Claude Sonnet 5",
    vendor: "anthropic",
    developer: "Anthropic",
    access: "Proprietary (API only)",
    parameters: "Not disclosed",
    context: "1M",
    inputPrice: "₹289 (intro ₹193)",
    outputPrice: "₹1,445 (intro ₹963)",
    reasoning: "Adaptive thinking",
    bestFor: "Balanced production work",
    tier: "Near-Opus",
    maturity: "Mature, GA (June 2026)",
  },
  {
    key: "opus",
    name: "Claude Opus 4.8",
    vendor: "anthropic",
    developer: "Anthropic",
    access: "Proprietary (API only)",
    parameters: "Not disclosed",
    context: "1M",
    inputPrice: "₹482",
    outputPrice: "₹2,408",
    reasoning: "Adaptive, effort modes",
    bestFor: "Hardest reasoning tasks",
    tier: "Flagship",
    maturity: "Mature, GA",
  },
  {
    key: "fable",
    name: "Claude Fable 5",
    vendor: "anthropic",
    developer: "Anthropic",
    access: "Proprietary (API only)",
    parameters: "Not disclosed",
    context: "1M",
    inputPrice: "₹963",
    outputPrice: "₹4,815",
    reasoning: "Max thinking, tiered",
    bestFor: "Most capable, long-horizon agents",
    tier: "Frontier (top tier)",
    maturity: "New (June 2026), briefly suspended for export controls",
  },
  {
    key: "mythos",
    name: "Claude Mythos 5",
    vendor: "anthropic",
    developer: "Anthropic",
    access: "Proprietary, restricted access",
    parameters: "Not disclosed",
    context: "1M",
    inputPrice: "Not public",
    outputPrice: "Not public",
    reasoning: "Max thinking, tiered",
    bestFor: "Restricted-use frontier work",
    tier: "Frontier (top tier)",
    maturity: "New, very limited access",
  },
  {
    key: "kimi",
    name: "Kimi K3",
    vendor: "moonshot",
    developer: "Moonshot AI",
    access: "Open-weight (downloadable)",
    parameters: "2.8 trillion (MoE)",
    context: "1M",
    inputPrice: "₹289",
    outputPrice: "₹1,445",
    reasoning: "Max effort by default",
    bestFor: "Long-horizon coding, agentic work",
    tier: "Just below frontier proprietary tier",
    maturity: "Newly released (July 16, 2026), weights pending",
  },
];

export interface EfficiencyPoint {
  label: string;
  detail: string;
}

export const efficiencyPoints: EfficiencyPoint[] = [
  {
    label: "Mixture of Experts (MoE) sparsity",
    detail:
      "2.8 trillion total parameters, but only 16 of 896 experts activate per token enormous stored knowledge, a fraction of the compute cost per token.",
  },
  {
    label: "Scaling efficiency",
    detail:
      "Moonshot reports roughly 2.5x the scaling efficiency of its predecessor, Kimi K2 more capability per unit of training compute.",
  },
  {
    label: "Quantization-aware training (QAT)",
    detail:
      "Trained from the fine-tuning stage to run natively in MXFP4 weights / MXFP8 activations, cutting serving cost without the usual post-hoc quantization penalty.",
  },
  {
    label: "Open-weight distribution",
    detail:
      "Because Moonshot releases the weights, third parties can host and serve the model competitively pressuring API pricing versus a single-source closed model.",
  },
];

export interface Reason {
  title: string;
  detail: string;
}

export const cautionReasons: Reason[] = [
  {
    title: "Maturity gap",
    detail:
      "Released July 16, 2026, with full weights not public until July 27, 2026. No meaningful production track record. Claude models have months to years of enterprise-grade deployment behind them.",
  },
  {
    title: "Benchmark position",
    detail:
      "Independent evaluations place Kimi K3 third overall on major intelligence indexes behind Claude Fable 5 and GPT-5.6 Sol Max, and behind Claude Opus 4.8 on some knowledge-work benchmarks.",
  },
  {
    title: "Real-world UX",
    detail:
      "Reports note it is notably slow (~35 tokens/sec per this comparison, ~62 tokens/sec per Moonshot's own spec sheet) and verbose — tasks may cost more tokens in practice than headline pricing suggests.",
  },
  {
    title: "Agentic-reliability",
    detail:
      "Early reports flag a tendency to act rather than ask for clarification in ambiguous situations, and quality degradation in harnesses that truncate its reasoning history.",
  },
  {
    title: "Vendor and support risk",
    detail:
      "Anthropic provides enterprise support, safety guarantees, and a consistent API contract. Kimi K3 is served primarily through Moonshot and third-party routers reporting limited capacity and rate-limit errors.",
  },
];

export const selectiveReasons: Reason[] = [
  {
    title: "Cost-sensitive, high-volume tasks",
    detail:
      "Where Sonnet-tier quality is sufficient and volume is very high, Kimi K3's pricing — or self-hosting the open weights once released — could reduce cost.",
  },
  {
    title: "Self-hosting flexibility",
    detail:
      "Open-weight means it can eventually be fine-tuned or deployed on private infrastructure — useful for data residency or customization Claude's API model cannot meet.",
  },
  {
    title: "Frontend / coding tasks",
    detail:
      "Reportedly leads the Frontend Code Arena benchmark, so a narrow pilot for that specific use case may be worth running.",
  },
];

export interface BenchmarkDatum {
  name: string;
  value: number;
  vendor: Vendor;
}

export const intelligenceIndex: BenchmarkDatum[] = [
  { name: "Claude Fable 5", value: 60, vendor: "anthropic" },
  { name: "GPT-5.6 Sol", value: 59, vendor: "anthropic" }, // neutral third-party, colored separately in chart
  { name: "Kimi K3", value: 57, vendor: "moonshot" },
  { name: "Claude Opus 4.8", value: 56, vendor: "anthropic" },
];

export const gdpvalIndex: BenchmarkDatum[] = [
  { name: "Claude Fable 5", value: 1750, vendor: "anthropic" },
  { name: "GPT-5.6 Sol", value: 1748, vendor: "anthropic" },
  { name: "Kimi K3", value: 1668, vendor: "moonshot" },
  { name: "Claude Opus 4.8", value: 1600, vendor: "anthropic" },
];

export const tokenEfficiency: { name: string; tokens: number; vendor: Vendor }[] = [
  { name: "Kimi K2.6", tokens: 166, vendor: "moonshot" },
  { name: "Kimi K3", tokens: 132, vendor: "moonshot" },
];

export interface SpecGroup {
  heading: string;
  rows: { label: string; value: string }[];
}

export const kimiSpecSheet: SpecGroup[] = [
  {
    heading: "Model & architecture",
    rows: [
      { label: "Developer", value: "Moonshot AI (Beijing, backed by Alibaba)" },
      { label: "Release date", value: "July 16, 2026" },
      { label: "Parameters", value: "2.8 trillion total (Mixture-of-Experts)" },
      { label: "Active experts / token", value: "16 of 896, via Stable LatentMoE" },
      {
        label: "Architecture",
        value: "Kimi Delta Attention (KDA) — hybrid linear/full attention, ~3:1 ratio, + Attention Residuals (AttnRes)",
      },
      { label: "Training", value: "Quantization-aware training — MXFP4 weights, MXFP8 activations" },
      { label: "License / weights", value: "Modified MIT · full weights expected July 27, 2026 — not yet available" },
    ],
  },
  {
    heading: "Context & input/output",
    rows: [
      { label: "Context window", value: "1,048,576 tokens (1M) — flat pricing, no long-context surcharge" },
      { label: "Default max output", value: "131,072 tokens, configurable up to full 1M window" },
      { label: "Modalities", value: "Text, images, video (native multimodal)" },
      { label: "Image limit", value: "4K resolution" },
      { label: "Video limit", value: "1080p" },
      { label: "Image input format", value: "Base64 or ms:// file references only — no public URLs" },
    ],
  },
  {
    heading: "Reasoning",
    rows: [
      { label: "Thinking mode", value: "Always-on — no toggle to disable" },
      { label: "reasoning_effort", value: "max by default; low/high support inconsistently documented" },
      { label: "Multi-turn behavior", value: "Preserved thinking required across multi-turn and tool-calling sessions" },
    ],
  },
  {
    heading: "Performance (Artificial Analysis, independent)",
    rows: [
      { label: "Intelligence Index (v4.1)", value: "57 — 4th overall, behind Claude Fable 5 (60) and GPT-5.6 Sol (59)" },
      { label: "GDPval-AA v2 (agentic)", value: "1,668–1,687 Elo" },
      { label: "AA-Briefcase (knowledge work)", value: "1,543–1,547 Elo — 2nd highest recorded" },
      { label: "Frontend Code Arena", value: "#1" },
      { label: "Output speed", value: "~62 tokens/sec (below the ~72 median)" },
      { label: "Hallucination rate (AA-Omniscience)", value: "50.9%, up from K2.6's 39.3%" },
    ],
  },
  {
    heading: "API & pricing",
    rows: [
      { label: "Model ID", value: "kimi-k3" },
      { label: "Base URL", value: "https://api.moonshot.ai/v1" },
      { label: "Input", value: "$3.00/M tokens (₹289) — $0.30/M (₹29) on cache hit" },
      { label: "Output", value: "$15.00/M tokens (₹1,445)" },
      { label: "API compatibility", value: "OpenAI Chat Completions format" },
      { label: "Account requirement", value: "Minimum $1 top-up to unlock flagship tier; rate limits scale with cumulative top-up" },
    ],
  },
];

export const sourceNote =
  "Benchmark figures drawn from Artificial Analysis, an independent third-party AI model evaluator — artificialanalysis.ai/models/kimi-k3 and artificialanalysis.ai/models.";
