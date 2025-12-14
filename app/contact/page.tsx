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

    // Buat Gmail compose URL dengan semua field terisi
    const to = "partnership@ish-technologies.com";
    const subject = encodeURIComponent("New Contact Inquiry from Website");
    const body = encodeURIComponent(
      `From: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Buka Gmail dengan compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6281222337568", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header variant="light" pageTitle="Contact" />

      <main className="flex-1 pt-20 md:pt-36 pb-8 md:pb-12">
        <Container>
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
            {/* Top Section - Contact Heading & Form */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              {/* Left - Heading */}
              <div className="flex flex-col space-y-2" style={{ fontFamily: "var(--font-merriweather)" }}>
                {/* Small text - Idea doesn't come fully formed (Desktop & Tablet only) */}
                <p className="hidden md:block text-xl lg:text-2xl font-normal text-black">
                  Idea doesn't come fully formed.
                </p>

                {/* Main heading */}
                <div className="flex flex-col">
                  <h2 className="text-4xl md:text-6xl font-normal text-black leading-tight">
                    <span className="font-bold">Lets talk</span> to shape
                  </h2>
                  <h2 className="text-4xl md:text-6xl font-normal text-black leading-tight">
                    your idea better!
                  </h2>
                </div>

                {/* Small text - Idea doesn't come fully formed (Mobile only) */}
                <p className="block md:hidden text-xl font-normal text-black mt-2">
                  Idea doesn't come fully formed.
                </p>
              </div>

              {/* Right - Form with Fixed Width */}
              <form onSubmit={handleSubmit} className="space-y-6 w-full lg:flex-1">
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-[48px] border border-black bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#003680] transition-all"
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
                    rows={10}
                    className="w-full px-6 py-4 rounded-[48px] border border-black bg-white text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#003680] transition-all"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    required
                  />
                </div>

                {/* Send Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-10 py-3 rounded-[48px] text-white font-medium text-base transition-all hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
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
            <div className="grid md:grid-cols-2 gap-8 items-center pt-8 md:pt-0">
              {/* Left - Contact Information (Order 2 on mobile, 1 on desktop) */}
              <div className="order-2 md:order-1 space-y-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                <p className="text-base" style={{ color: "#737373" }}>Jakarta, Indonesia</p>
                <p className="text-base" style={{ color: "#737373" }}>+62 812-2233-7568</p>
                <p className="text-base" style={{ color: "#737373" }}>partnership@ish-technologies.com</p>
              </div>

              {/* Right - WhatsApp Button with Floating Icon (Order 1 on mobile, 2 on desktop) */}
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative inline-block">
                  <button
                    onClick={handleWhatsApp}
                    className="relative pl-6 pr-20 py-3 bg-white rounded-[48px] border border-black transition-all hover:translate-x-[2px] hover:translate-y-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    style={{
                      fontFamily: "var(--font-plus-jakarta-sans)",
                    }}
                  >
                    <span className="text-base font-medium">Chat through Whatsapp</span>
                  </button>

                  {/* Floating WhatsApp Icon */}
                  <div
                    className="absolute -right-8 -top-14 cursor-pointer"
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
