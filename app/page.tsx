import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ImpactShowcase from "@/components/ImpactShowcase";
import ProprietaryProducts from "@/components/ProprietaryProducts";



export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Services />
      <ImpactShowcase />
      <ProprietaryProducts />
    </main>
  );
}
