import type { Filter } from "../App";
import SectionHeading from "./SectionHeading";

interface Props {
  filter: Filter;
}

export default function ArchitectureSection({ filter }: Props) {
  return (
    <section id="architecture">
      <SectionHeading
        index="3"
        title="Architecture: attention mechanisms"
        dek="What decides which earlier tokens matter when generating the next one — and why long context used to be expensive."
      />

      <div className="grid md:grid-cols-2 border border-line">
        <div
          className={`p-6 border-b md:border-b-0 md:border-r border-line transition-opacity ${
            filter === "moonshot" ? "opacity-30" : ""
          }`}
        >
          <div className="font-mono text-xs uppercase tracking-widest text-anthropic">Anthropic</div>
          <h3 className="mt-2 font-display font-semibold text-xl text-ink">Undisclosed by design</h3>
          <p className="mt-3 text-sm text-inkSoft leading-relaxed">
            Anthropic has not publicly disclosed the internal attention architecture used in
            current Claude models. Sonnet 5, Opus 4.8, and Fable 5 all support a 1-million-token
            context window in production, which implies proprietary efficiency techniques — but
            the mechanism itself is not published and can't be confirmed here.
          </p>
        </div>
        <div className={`p-6 transition-opacity ${filter === "anthropic" ? "opacity-30" : ""}`}>
          <div className="font-mono text-xs uppercase tracking-widest text-moonshot">Moonshot</div>
          <h3 className="mt-2 font-display font-semibold text-xl text-ink">
            Kimi Delta Attention (KDA)
          </h3>
          <p className="mt-3 text-sm text-inkSoft leading-relaxed">
            A hybrid linear-attention mechanism replacing standard quadratic attention in most
            layers (roughly a 3:1 ratio), preserving full quadratic attention only where it
            matters most. Paired with Attention Residuals (AttnRes), which selectively retrieve
            information across model depth rather than accumulating it uniformly — together
            enabling a 1M-token window at a fraction of the usual compute cost.
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-inkFaint font-mono leading-relaxed">
        Bottom line: this is a comparison of a published design against an unpublished one. Kimi
        K3's architecture is unusually transparent because Moonshot released the technical details
        alongside the open weights. Claude achieves comparable practical outcomes — long context,
        strong reasoning — through methods Anthropic hasn't disclosed.
      </p>
    </section>
  );
}
