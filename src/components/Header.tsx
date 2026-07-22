import type { Filter } from "../App";

interface Props {
  filter: Filter;
  setFilter: (f: Filter) => void;
}

const options: { key: Filter; label: string; swatch?: string }[] = [
  { key: "both", label: "Both vendors" },
  { key: "anthropic", label: "Anthropic family", swatch: "bg-anthropic" },
  { key: "moonshot", label: "Moonshot", swatch: "bg-moonshot" },
];

export default function Header({ filter, setFilter }: Props) {
  return (
    <header className="border-b border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-10 pb-8">
        <div className="flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-widest text-inkFaint">
          <span>Dossier No. 026 — Model Evaluation</span>
          <span>Filed 22 Jul 2026</span>
        </div>

        <h1 className="mt-4 font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink">
          Claude family
          <span className="text-inkFaint font-normal"> vs. </span>
          <br className="hidden md:block" />
          Kimi K3
        </h1>

        <p className="mt-4 max-w-2xl text-inkSoft text-base md:text-lg leading-relaxed">
          A working comparison of Anthropic's Claude lineup against Moonshot AI's
          newly released, open-weight Kimi K3 — specs, pricing, architecture, and
          a straight answer on whether it's worth switching.
        </p>

        {/* Signature control: vendor lens toggle. Recolors emphasis across the whole dossier. */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-inkFaint mr-1">
            View:
          </span>
          {options.map((opt) => {
            const active = filter === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key)}
                className={`inline-flex items-center gap-2 rounded-none border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors
                  ${
                    active
                      ? "bg-ink text-paper border-ink"
                      : "bg-transparent text-inkSoft border-line hover:border-lineStrong hover:text-ink"
                  }`}
                aria-pressed={active}
              >
                {opt.swatch && (
                  <span className={`w-2 h-2 rounded-full ${opt.swatch} ${active ? "" : ""}`} />
                )}
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
