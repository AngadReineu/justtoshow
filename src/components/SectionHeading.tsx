interface Props {
  index: string;
  title: string;
  dek?: string;
}

export default function SectionHeading({ index, title, dek }: Props) {
  return (
    <div className="pt-14 pb-6">
      <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest text-inkFaint">
        <span>§{index}</span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="mt-2 font-display font-semibold text-2xl md:text-3xl text-ink tracking-tight">
        {title}
      </h2>
      {dek && <p className="mt-2 text-inkSoft max-w-2xl">{dek}</p>}
    </div>
  );
}
