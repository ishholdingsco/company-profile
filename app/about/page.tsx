import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Header />
      <main className="w-full pt-32 pb-20 px-12">
        <div className="w-full">
          <div className="flex flex-col gap-20">
            {/* Hero */}
            <div className="space-y-6">
              <div className="w-full border-t-2 border-foreground" />
              <h1 className="text-5xl font-bold">About Us</h1>
              <div className="w-full border-t-2 border-foreground" />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Who We Are</h2>
                <p className="text-lg leading-relaxed">
                  ISH Technologies is a <span className="font-bold">consolidated technologies company</span> dedicated to delivering cutting-edge software solutions at scale.
                </p>
                <p className="text-lg leading-relaxed">
                  We specialize in developing innovative applications for the mining industry, leveraging advanced technologies such as computer vision, machine learning, and automation to solve complex challenges.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To transform industries through intelligent technology solutions that drive efficiency, safety, and sustainability.
                </p>
                <div className="p-6 border-2 border-foreground rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Core Values</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Innovation-driven development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Client-focused solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>Sustainable technology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-6 mt-16">
              <h2 className="text-3xl font-bold">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
                  <h3 className="text-xl font-bold mb-3">Mining Technology</h3>
                  <p className="text-sm">Specialized solutions for the mining industry, from automation to safety systems.</p>
                </div>
                <div className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
                  <h3 className="text-xl font-bold mb-3">AI & Computer Vision</h3>
                  <p className="text-sm">Advanced machine learning and computer vision applications for industrial use.</p>
                </div>
                <div className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
                  <h3 className="text-xl font-bold mb-3">Software Development</h3>
                  <p className="text-sm">Full-stack development with modern technologies and best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
