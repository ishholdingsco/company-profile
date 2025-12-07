"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6281222337568", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#EFF4FF" }}>
      <Header variant="light" pageTitle="Contact" />

      <main className="flex-1 py-12 md:py-20">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Top Section - Email us & Form */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center">
              {/* Left - Heading */}
              <h1 className="text-5xl md:text-6xl font-normal" style={{ fontFamily: "var(--font-merriweather)" }}>
                Email us
              </h1>

              {/* Right - Form with Fixed Width */}
              <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-auto md:flex-1 md:max-w-lg">
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-[10px] border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#003680] transition-all"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-6 py-4 rounded-[10px] border border-gray-300 bg-white text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#003680] transition-all"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    required
                  />
                </div>

                {/* Send Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-[10px] text-white font-medium text-base transition-all hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    style={{
                      backgroundColor: "#003680",
                      fontFamily: "var(--font-plus-jakarta-sans)",
                    }}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Bottom Section - Contact Info & WhatsApp Button */}
            <div className="grid md:grid-cols-2 gap-8 items-end">
              {/* Left - Contact Information */}
              <div className="space-y-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                <p className="text-base text-gray-700">Jakarta, Indonesia</p>
                <p className="text-base text-gray-700">+62 812-2233-7568</p>
                <p className="text-base text-gray-700">ish.holdings.co@gmail.com</p>
              </div>

              {/* Right - WhatsApp Button with Floating Icon */}
              <div className="flex justify-start md:justify-end">
                <div className="relative inline-block">
                  <button
                    onClick={handleWhatsApp}
                    className="relative pl-6 pr-20 py-3 bg-white rounded-[10px] border-2 border-foreground transition-all hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    style={{
                      fontFamily: "var(--font-plus-jakarta-sans)",
                    }}
                  >
                    <span className="text-base font-medium">Chat through Whatsapp</span>
                  </button>

                  {/* Floating WhatsApp Icon */}
                  <div
                    className="absolute -right-10 -top-12 cursor-pointer"
                    onClick={handleWhatsApp}
                  >
                    <Image
                      src="/icons/whatsapp.png"
                      alt="WhatsApp"
                      width={100}
                      height={100}
                      className="w-25 h-25 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
