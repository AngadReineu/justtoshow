import type { Filter } from "../App";
import { cautionReasons, selectiveReasons } from "../data";
import SectionHeading from "./SectionHeading";

interface Props {
  filter: Filter;
}

export default function DecisionSection({ filter }: Props) {
  return (
    <section id="decision">
      <SectionHeading
        index="4"
        title="Should we switch Claude out for Kimi K3?"
        dek="Short answer: not as a replacement — at most, as a supplement for narrow, cost-sensitive workloads, and only after our own evaluation."
      />

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3">
          <h3 className="font-mono text-xs uppercase tracking-widest text-inkFaint pb-3 border-b border-line">
            Reasons to be cautious
          </h3>
          <div className="mt-4 space-y-5">
            {cautionReasons.map((r) => (
              <div key={r.title} className="flex gap-4">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-ink">{r.title}</h4>
                  <p className="mt-1 text-sm text-inkSoft leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`md:col-span-2 border-l border-line md:pl-6 transition-opacity ${
            filter === "anthropic" ? "opacity-30" : ""
          }`}
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-moonshot pb-3 border-b border-line">
            Worth using selectively
          </h3>
          <div className="mt-4 space-y-5">
            {selectiveReasons.map((r) => (
              <div key={r.title} className="flex gap-4">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-moonshot shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-ink">{r.title}</h4>
                  <p className="mt-1 text-sm text-inkSoft leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
