import { useState } from "react";
import type { Vendor } from "./data";
import Header from "./components/Header";
import ComparisonTable from "./components/ComparisonTable";
import PricingSection from "./components/PricingSection";
import ArchitectureSection from "./components/ArchitectureSection";
import DecisionSection from "./components/DecisionSection";
import BenchmarkSection from "./components/BenchmarkSection";
import KimiSpecSheet from "./components/KimiSpecSheet";
import Footer from "./components/Footer";

export type Filter = Vendor | "both";

function App() {
  const [filter, setFilter] = useState<Filter>("both");

  return (
    <div className="min-h-screen">
      <Header filter={filter} setFilter={setFilter} />

      <main className="max-w-5xl mx-auto px-6 md:px-10">
        <ComparisonTable filter={filter} />
        <PricingSection filter={filter} />
        <ArchitectureSection filter={filter} />
        <DecisionSection filter={filter} />
        <BenchmarkSection filter={filter} />
        <KimiSpecSheet filter={filter} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
