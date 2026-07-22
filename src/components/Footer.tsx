export default function Footer() {
  return (
    <footer className="border-t border-line mt-10">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="font-mono text-xs text-inkFaint uppercase tracking-widest">
          End of dossier — §6 of 6
        </p>
        <p className="font-mono text-xs text-inkFaint">
          Prices in ₹, converted from USD list rates. All benchmark figures via Artificial Analysis.
        </p>
      </div>
    </footer>
  );
}
