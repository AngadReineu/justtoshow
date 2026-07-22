import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { Filter } from "../App";
import { intelligenceIndex, gdpvalIndex, tokenEfficiency, sourceNote } from "../data";
import { vendorHex } from "../vendorStyles";
import SectionHeading from "./SectionHeading";

interface Props {
  filter: Filter;
}

const neutralHex = "#8993A4"; // for third-party models like GPT that are neither vendor family

function barColor(vendor: "anthropic" | "moonshot", name: string, filter: Filter) {
  const hex = name.startsWith("GPT") ? neutralHex : vendorHex(vendor);
  if (filter !== "both" && filter !== vendor && !name.startsWith("GPT")) {
    return `${hex}55`;
  }
  return hex;
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-line p-5">
      <h3 className="font-mono text-xs uppercase tracking-widest text-inkFaint mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function BenchmarkSection({ filter }: Props) {
  return (
    <section id="benchmarks">
      <SectionHeading
        index="5"
        title="Benchmark visual"
        dek="Figures from Artificial Analysis, an independent third-party evaluator, showing where Kimi K3 lands relative to the Claude family and GPT-5.6 Sol."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Intelligence Index v4.1 — composite score">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={intelligenceIndex} layout="vertical" margin={{ left: 8, right: 16 }}>
              <CartesianGrid stroke="#C7CDD6" horizontal={false} />
              <XAxis type="number" domain={[0, 65]} tick={{ fontSize: 11, fill: "#4B5566" }} />
              <YAxis
                type="category"
                dataKey="name"
                width={110}
                tick={{ fontSize: 11, fill: "#171B23" }}
              />
              <Tooltip
                cursor={{ fill: "#ECEFF3" }}
                contentStyle={{ fontFamily: "IBM Plex Mono", fontSize: 12, borderRadius: 0 }}
              />
              <Bar dataKey="value" radius={[0, 2, 2, 0]}>
                {intelligenceIndex.map((d) => (
                  <Cell key={d.name} fill={barColor(d.vendor, d.name, filter)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="GDPval-AA v2 — agentic task Elo (human baseline 1,000)">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={gdpvalIndex} layout="vertical" margin={{ left: 8, right: 16 }}>
              <CartesianGrid stroke="#C7CDD6" horizontal={false} />
              <XAxis type="number" domain={[0, 1900]} tick={{ fontSize: 11, fill: "#4B5566" }} />
              <YAxis
                type="category"
                dataKey="name"
                width={110}
                tick={{ fontSize: 11, fill: "#171B23" }}
              />
              <Tooltip
                cursor={{ fill: "#ECEFF3" }}
                contentStyle={{ fontFamily: "IBM Plex Mono", fontSize: 12, borderRadius: 0 }}
              />
              <Bar dataKey="value" radius={[0, 2, 2, 0]}>
                {gdpvalIndex.map((d) => (
                  <Cell key={d.name} fill={barColor(d.vendor, d.name, filter)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Token efficiency — output tokens to run full Intelligence Index (millions)">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={tokenEfficiency} margin={{ left: 8, right: 16 }}>
              <CartesianGrid stroke="#C7CDD6" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#171B23" }} />
              <YAxis tick={{ fontSize: 11, fill: "#4B5566" }} />
              <Tooltip
                cursor={{ fill: "#ECEFF3" }}
                contentStyle={{ fontFamily: "IBM Plex Mono", fontSize: 12, borderRadius: 0 }}
              />
              <Bar dataKey="tokens" radius={[2, 2, 0, 0]}>
                {tokenEfficiency.map((d) => (
                  <Cell key={d.name} fill={barColor(d.vendor, d.name, filter)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-2 text-xs text-inkFaint font-mono">
            132M tokens vs. K2.6's 166M — a 21% reduction while gaining 13 Intelligence Index
            points. Still noticeably more than Claude Sonnet 5 and Opus 4.8 use to reach their
            scores.
          </p>
        </ChartCard>

        <div className="flex items-end p-5">
          <p className="text-xs text-inkFaint font-mono leading-relaxed">{sourceNote}</p>
        </div>
      </div>
    </section>
  );
}
