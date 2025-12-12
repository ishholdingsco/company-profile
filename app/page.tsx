import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MottoSection } from "@/components/motto-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Header variant="dark" />
      <main className="w-full flex flex-col">
        <HeroSection />
        <MottoSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
