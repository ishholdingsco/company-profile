import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SolutionsSection } from "@/components/solutions-section";
import { IndustriesSection } from "@/components/industries-section";
import { ProductsSection } from "@/components/products-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Header />
      <main className="w-full flex flex-col gap-16">
        <HeroSection />
        <SolutionsSection />
        <IndustriesSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
}
