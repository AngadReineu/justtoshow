import type { Filter } from "../App";
import { models } from "../data";
import { isDimmed, accentText, accentBg } from "../vendorStyles";
import SectionHeading from "./SectionHeading";

interface Props {
  filter: Filter;
}

const fields: { key: keyof (typeof models)[number]; label: string }[] = [
  { key: "developer", label: "Developer" },
  { key: "access", label: "Access model" },
  { key: "parameters", label: "Parameters" },
  { key: "context", label: "Context window" },
  { key: "inputPrice", label: "Input / 1M tok" },
  { key: "outputPrice", label: "Output / 1M tok" },
  { key: "reasoning", label: "Reasoning" },
  { key: "bestFor", label: "Best suited for" },
  { key: "tier", label: "Benchmark tier" },
  { key: "maturity", label: "Maturity" },
];

export default function ComparisonTable({ filter }: Props) {
  return (
    <section id="comparison">
      <SectionHeading
        index="1"
        title="The comparison table"
        dek="Six models, one ledger. Rust marks the Anthropic family; jade marks Moonshot."
      />

      {/* Mobile: stacked cards. Desktop: full ledger table. */}
      <div className="hidden md:block overflow-x-auto border border-line">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-ink text-paper">
              <th className="text-left font-mono font-medium uppercase tracking-wide text-xs px-4 py-3 sticky left-0 bg-ink">
                Attribute
              </th>
              {models.map((m) => (
                <th
                  key={m.key}
                  className={`text-left font-display font-medium px-4 py-3 whitespace-nowrap transition-opacity ${
                    isDimmed(filter, m.vendor) ? "opacity-30" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${accentBg(m.vendor)}`} />
                    {m.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fields.map((f, i) => (
              <tr key={f.key} className={i % 2 === 0 ? "bg-card" : "bg-paperDim"}>
                <td className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-inkFaint sticky left-0 bg-inherit">
                  {f.label}
                </td>
                {models.map((m) => (
                  <td
                    key={m.key + f.key}
                    className={`px-4 py-3 font-mono text-xs text-ink whitespace-nowrap transition-opacity ${
                      isDimmed(filter, m.vendor) ? "opacity-30" : ""
                    }`}
                  >
                    {m[f.key] as string}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {models.map((m) => (
          <div
            key={m.key}
            className={`border-l-2 ${
              m.vendor === "anthropic" ? "border-anthropic" : "border-moonshot"
            } bg-card p-4 transition-opacity ${isDimmed(filter, m.vendor) ? "opacity-30" : ""}`}
          >
            <div className={`font-display font-semibold text-lg ${accentText(m.vendor)}`}>
              {m.name}
            </div>
            <dl className="mt-2 divide-y divide-line">
              {fields.map((f) => (
                <div key={f.key} className="flex justify-between gap-4 py-1.5 text-sm">
                  <dt className="font-mono text-xs uppercase tracking-wide text-inkFaint shrink-0">
                    {f.label}
                  </dt>
                  <dd className="font-mono text-xs text-right text-ink">{m[f.key] as string}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
