import type { Filter } from "../App";
import { kimiSpecSheet } from "../data";
import SectionHeading from "./SectionHeading";

interface Props {
  filter: Filter;
}

export default function KimiSpecSheet({ filter }: Props) {
  return (
    <section
      id="kimi-spec"
      className={`pb-20 transition-opacity ${filter === "anthropic" ? "opacity-30" : ""}`}
    >
      <SectionHeading
        index="6"
        title="Kimi K3 — full spec sheet"
        dek="Moonshot AI, Beijing (backed by Alibaba). Released July 16, 2026. Compiled from official docs and independent verification."
      />

      <div className="border border-moonshot/40">
        <div className="bg-moonshot text-paper px-5 py-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
          <span>Insert — Model ID: kimi-k3</span>
          <span>Modified MIT · weights pending</span>
        </div>

        <div className="divide-y divide-line">
          {kimiSpecSheet.map((group) => (
            <div key={group.heading} className="grid md:grid-cols-[220px_1fr]">
              <div className="bg-paperDim px-5 py-4 md:py-5 font-display font-semibold text-sm text-ink">
                {group.heading}
              </div>
              <div className="px-5 py-4 md:py-5 bg-card">
                <dl className="space-y-2.5">
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-x-4 gap-y-0.5 text-sm"
                    >
                      <dt className="font-mono text-xs uppercase tracking-wide text-inkFaint">
                        {row.label}
                      </dt>
                      <dd className="font-mono text-xs text-ink leading-relaxed break-words">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
