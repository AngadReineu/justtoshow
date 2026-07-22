import type { Filter } from "../App";
import { efficiencyPoints } from "../data";
import SectionHeading from "./SectionHeading";

export default function PricingSection({ filter }: Props) {
  return (
    <section id="pricing" className={filter === "anthropic" ? "opacity-40" : ""}>
      <SectionHeading
        index="2"
        title="Why is Kimi K3 cheaper?"
        dek="₹289 input / ₹1,445 output matching Sonnet 5's standard rate, well under Opus 4.8, and far under Fable 5. The gap is architectural, not a pricing decision."
      />

      <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
        {efficiencyPoints.map((p, i) => (
          <div key={p.label} className="bg-card p-6">
            <div className="font-mono text-xs text-inkFaint">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-2 font-display font-semibold text-lg text-ink">{p.label}</h3>
            <p className="mt-2 text-sm text-inkSoft leading-relaxed">{p.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface Props {
  filter: Filter;
}
