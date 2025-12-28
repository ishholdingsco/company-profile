"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import Link from "next/link";

// Animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } }
};

export default function AboutPage() {
  return (
    <>
      {/* Header with dark variant for black hero background */}
      <Header variant="dark" />

      {/* Hero Section - Bell Animation */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          background: '#000',
          fontSize: 'calc(var(--_size) * 0.01)',
          ['--_size' as any]: 'min(min(600px, 50vh), 50vw)',
          ['--base-clr' as any]: '#b7b5b4',
          ['--degofrot' as any]: '0.8',
        }}
      >
        <div
          className="bell-container off"
          onClick={(e) => e.currentTarget.classList.toggle("off")}
        >
          <div className="rope"></div>
          <div className="bell-top"></div>
          <div className="bell-base"></div>
          <div className="bell-base"></div>
          <div className="shadow-l1"></div>
          <div className="shadow-l2"></div>
          <div className="left-glow"></div>
          <div className="left-glow2"></div>
          <div className="r-glow"></div>
          <div className="r-glow2"></div>
          <div className="mid-ring"></div>
          <div className="mid-ring small"></div>
          <div className="glow"></div>
          <div className="glow2"></div>
          <div className="bell-buff-t"></div>
          <div className="bell-buff"></div>
          <div className="bell-btm"></div>
          <div className="bell-btm2"></div>
          <div className="bell-ring-container">
            <div className="bell-ring"></div>
            <div className="bell-rays"></div>
          </div>
          <div className="volumetric">
            <div className="vl"></div>
            <div className="vr"></div>
          </div>
        </div>
        <div className="hero-text">
          Bring out the <span className="bold-text">Genius</span> in <span className="bold-text">You</span>.<br />
          ISH Technologies and Consulting
        </div>
        <div className="grain"></div>
      </section>

      {/* Ars Technologia Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            {/* Title */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold italic text-center mb-12"
              style={{ fontFamily: "var(--font-merriweather)" }}
              variants={fadeInUp}
            >
              Ars Technologia
            </motion.h1>

            {/* Definition */}
            <motion.div
              className="mb-16 text-sm md:text-base text-black"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <p className="mb-2">
                <span className="font-bold italic">Ars Technologia</span> | /ärz tek-nə-ˈlō-jē-ə/
              </p>
              <p className="mb-1">noun, Latin</p>
              <p className="mb-2">Definition:</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>The art of technology; the synthesis of creative craft and technical knowledge.</li>
                <li>The disciplined practice of applying systematic methods with aesthetic sensibility.</li>
                <li>The philosophy that technology, at its highest form, is an art.</li>
              </ol>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px", once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-10"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                Our Mission
              </h2>

              <div className="space-y-6 text-black text-sm md:text-base leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Investing in digital transformation of your enterprise should feel <span className="font-bold">free of anxiety</span>, make you feel <span className="font-bold">understood</span>, and bring <span className="font-bold">real impacts</span>.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  We are the <span className="font-bold">trusted</span> partner for you in crafting together the digital vision of your enterprise AI & Software Development; through <span className="font-bold italic" style={{ marginRight: '0.25em' }}>Intelligent</span>Enterprise Systems and <span className="font-bold italic" style={{ marginRight: '0.25em' }}>Human-Centered</span>Design, without interfering legacy process, to empower your enterprise in navigating the next digital age.
                </motion.p>

                <motion.p variants={fadeInUp}>
                  We believe in our philosophy of Ars Technologia—where the art of technology is crafted to empower and make human lives better.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Our Commitments Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16"
            style={{ fontFamily: "var(--font-merriweather)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Our commitments for you
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "We Listen First", desc: `We dive into your "why" before we touch the "how." We build what you need, not just what you ask for.` },
              { title: "Thoughtful Product", desc: "We ensure you build the right thing—not just build things right." },
              { title: "Zero Friction", desc: "We are communicative, collaborative, and fast. No corporate jargon, just straight talk and quick movement." },
              { title: "Reliable Delivery", desc: "We keep our commitments. Deadlines, scope, quality—what we agree, we deliver." },
              { title: "Smart Value", desc: "Cost-effective without cutting corners. Maximum impact for your investment." },
              { title: "Transparent Progress", desc: "Shared online project boards, regular updates, no surprises. You always know where things stand." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pl-6 max-w-md"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-black text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Why Us Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Top Marquee */}
        <div className="absolute top-8 left-0 right-0 overflow-hidden pointer-events-none">
          <div className="marquee-container">
            <div className="marquee-content animate-marquee">
              {[...Array(10)].map((_, i) => (
                <Image
                  key={i}
                  src="/about/ISH.png"
                  alt="ISH"
                  width={200}
                  height={80}
                  className="mx-8"
                />
              ))}
            </div>
            <div className="marquee-content animate-marquee" aria-hidden="true">
              {[...Array(10)].map((_, i) => (
                <Image
                  key={i}
                  src="/about/ISH.png"
                  alt="ISH"
                  width={200}
                  height={80}
                  className="mx-8"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Marquee - reverse direction */}
        <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none">
          <div className="marquee-container">
            <div className="marquee-content animate-marquee-reverse">
              {[...Array(10)].map((_, i) => (
                <Image
                  key={i}
                  src="/about/ISH.png"
                  alt="ISH"
                  width={200}
                  height={80}
                  className="mx-8"
                />
              ))}
            </div>
            <div className="marquee-content animate-marquee-reverse" aria-hidden="true">
              {[...Array(10)].map((_, i) => (
                <Image
                  key={i}
                  src="/about/ISH.png"
                  alt="ISH"
                  width={200}
                  height={80}
                  className="mx-8"
                />
              ))}
            </div>
          </div>
        </div>

        <Container className="relative z-10 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              Why us?
            </h2>
            <p className="text-black text-lg italic mb-12">What makes us different</p>
          </motion.div>

          {/* Desktop Layout - Grid */}
          <motion.div
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Engineered with Empathy",
                desc: "Combination of Deep Tech capability and Human-Centered empathy. Our solutions are built to be highly reliable, scalable, and effortlessly intuitive for the end-user.",
              },
              {
                title: "Portfolio-Piece Dedication",
                desc: "We are hungry for success stories. We offer highly competitive rates because we treat your project as our future flagship case study. We don't just want to finish the job; we want to show it off.",
              },
              {
                title: "Multi-Disciplinary",
                desc: "Powered by experienced and multi-disciplinary team. We can answer your diverse needs without losing touch of domain expertise.",
              },
              {
                title: "Change Management",
                desc: "We make sure your adoption to new systems run smoothly through neat documentation and post launch support. We also won't interfere with your legacy process while you transition to new systems.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border border-black rounded-[30px] p-6 hover:shadow-lg transition-shadow cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-black text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile & Tablet Layout - Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 scrollbar-hide -mx-8 px-8">
            <div className="flex gap-4 min-w-max">
              {[
                {
                  title: "Engineered with Empathy",
                  desc: "Combination of Deep Tech capability and Human-Centered empathy. Our solutions are built to be highly reliable, scalable, and effortlessly intuitive for the end-user.",
                },
                {
                  title: "Portfolio-Piece Dedication",
                  desc: "We are hungry for success stories. We offer highly competitive rates because we treat your project as our future flagship case study. We don't just want to finish the job; we want to show it off.",
                },
                {
                  title: "Multi-Disciplinary",
                  desc: "Powered by experienced and multi-disciplinary team. We can answer your diverse needs without losing touch of domain expertise.",
                },
                {
                  title: "Change Management",
                  desc: "We make sure your adoption to new systems run smoothly through neat documentation and post launch support. We also won't interfere with your legacy process while you transition to new systems.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-black rounded-[30px] p-6 hover:shadow-lg transition-shadow cursor-pointer shrink-0"
                  style={{ width: "280px", minHeight: "200px" }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* The People Behind Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <Container>
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center mb-20 text-black"
            style={{ fontFamily: "var(--font-merriweather)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Familiar faces bring the ideas closer
          </motion.h2>

          {/* Leaders - Arch shaped cards */}
          {/* Mobile Only: Horizontal Scroll */}
          <div className="md:hidden mb-12 overflow-x-auto pb-4 scrollbar-hide -mx-8 px-8">
            <div className="flex gap-8 min-w-max">
              {[
                { name: "Harris", role: "Project Manager", image: "/team/harris.png" },
                { name: "Fawwaz", role: "Product Manager", image: "/about/fawwaz.png" },
              ].map((person, i) => (
                <motion.div
                  key={i}
                  className="text-center shrink-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Container with rounded top only - responsive size */}
                  <div className="mx-auto mb-4 flex items-end justify-center overflow-hidden relative"
                    style={{
                      width: "min(291px, 80vw)",
                      height: "min(302px, calc(80vw * 1.04))",
                      borderRadius: "min(145px, 40vw) min(145px, 40vw) 0 0",
                      backgroundImage: "url('/about/background.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  >
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <span className="text-6xl text-gray-400 mb-4">👤</span>
                    )}
                  </div>
                  <Link
                    href={person.name === "Harris" ? "https://www.linkedin.com/in/harristio-adam/" : "https://www.linkedin.com/in/fawwazanvilen/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg font-bold underline hover:text-blue-600 transition-colors"
                  >
                    {person.name}
                  </Link>
                  <p className="text-xs text-black">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tablet & Desktop: Centered */}
          <motion.div
            className="hidden md:flex justify-center gap-8 md:gap-16 lg:gap-32 mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: true }}
            variants={staggerContainer}
          >
            {[
              { name: "Harris", role: "Project Manager", image: "/team/harris.png" },
              { name: "Fawwaz", role: "Product Manager", image: "/about/fawwaz.png" },
            ].map((person, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={fadeInUp}
              >
                {/* Container with rounded top only - responsive size */}
                <div className="mx-auto mb-4 flex items-end justify-center overflow-hidden relative"
                  style={{
                    width: "291px",
                    height: "302px",
                    borderRadius: "145px 145px 0 0",
                    backgroundImage: "url('/about/background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="text-6xl text-gray-400 mb-4">👤</span>
                  )}
                </div>
                <Link
                  href={person.name === "Harris" ? "https://www.linkedin.com/in/harristio-adam/" : "https://www.linkedin.com/in/fawwazanvilen/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline hover:text-blue-600 transition-colors"
                >
                  {person.name}
                </Link>
                <p className="text-xs text-black">{person.role}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Teams Container - Left Aligned */}
          <div className="flex flex-col gap-8 items-start w-full">

            {/* IT Team */}
            <div className="w-full">
              {/* Mobile Only: Header + Horizontal Scroll */}
              <div className="md:hidden mb-6 w-full">
                <h3 className="text-lg font-medium text-black mb-4">IT Team</h3>
                <div className="overflow-x-auto pb-4 scrollbar-hide -mx-8 px-8">
                  <div className="flex gap-4 min-w-max">
                    {[
                      { name: "Econ", role: "Full-Stack Engineer", image: "/about/Econ.png", linkedin: "https://x.com/AshecOne" },
                      { name: "Nawaf", role: "DevOps Engineer", image: "/about/Nawaf.png", linkedin: "https://www.linkedin.com/in/nawaf-alfarizki-2790b8244/" },
                      { name: "Nadhif", role: "AI & ML Engineer", image: "/about/Nadhif.png", linkedin: "https://www.linkedin.com/in/nadhiftaher/" },
                      { name: "Zirly", role: "IoT & Instrumentation Engineer", image: "/about/Zirly.png", linkedin: "https://www.linkedin.com/in/zirly-sukarno/" },
                    ].map((person, i) => (
                      <motion.div
                        key={i}
                        className="relative shrink-0"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                      >
                        <div className="overflow-hidden relative"
                          style={{
                            width: "320px",
                            height: "226px",
                            borderRadius: "32px",
                            backgroundImage: "url('/about/background.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}
                        >
                          <div className="absolute bottom-0 right-0" style={{ width: "70%", height: "100%" }}>
                            <Image
                              src={person.image}
                              alt={person.name}
                              fill
                              className="object-contain object-bottom-right"
                            />
                          </div>
                          <div className="absolute bottom-4 left-4 text-left z-10">
                            <Link
                              href={person.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-bold text-black underline hover:text-blue-600 transition-colors"
                            >
                              {person.name}
                            </Link>
                            <p className="text-xs text-black leading-tight max-w-25">{person.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet & Desktop: Vertical Label + Grid */}
              <motion.div
                className="hidden md:flex items-stretch gap-8 justify-start w-full md:pl-0 lg:pl-35"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px", once: true }}
                variants={staggerContainer}
              >
                {/* Vertical Label - Responsive size */}
                <div className="flex items-center">
                  <div className="border border-black/50 rounded-full bg-transparent md:w-[70px] md:h-[200px] lg:w-[90px] lg:h-[250px]"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span className="writing-vertical text-lg font-medium text-black whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      IT Team
                    </span>
                  </div>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { name: "Econ", role: "Full-Stack Engineer", image: "/about/Econ.png", linkedin: "https://x.com/AshecOne" },
                    { name: "Nawaf", role: "DevOps Engineer", image: "/about/Nawaf.png", linkedin: "https://www.linkedin.com/in/nawaf-alfarizki-2790b8244/" },
                    { name: "Nadhif", role: "AI & ML Engineer", image: "/about/Nadhif.png", linkedin: "https://www.linkedin.com/in/nadhiftaher/" },
                    { name: "Zirly", role: "IoT & Instrumentation Engineer", image: "/about/Zirly.png", linkedin: "https://www.linkedin.com/in/zirly-sukarno/" },
                  ].map((person, i) => (
                    <motion.div
                      key={i}
                      className="relative"
                      variants={fadeInUp}
                    >
                      {/* Container - Responsive: Tablet 280x198px, Desktop 351x248px */}
                      <div className="overflow-hidden relative md:w-[280px] md:h-[198px] lg:w-[351px] lg:h-[248px] md:rounded-[38px] lg:rounded-[48px]"
                        style={{
                          backgroundImage: "url('/about/background.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      >
                        {/* Enlarged image at bottom-right corner - Responsive */}
                        <div
                          className={`absolute bottom-0 md:w-56 md:h-49.5 lg:w-70 lg:h-62 ${
                            (person.name === "Nadhif" || person.name === "Zirly")
                              ? "-right-5"
                              : "right-0"
                          }`}
                        >
                          <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            className="object-contain object-bottom-right"
                          />
                        </div>
                        {/* Text overlay at middle left */}
                        <div className="absolute md:bottom-20 lg:bottom-25 left-4 md:left-5 lg:left-6 text-left z-10">
                          <Link
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base md:text-lg font-bold text-black underline hover:text-blue-600 transition-colors"
                          >
                            {person.name}
                          </Link>
                          <p className="text-xs text-black leading-tight max-w-35">{person.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Creative Team */}
            <div className="w-full">
              {/* Mobile Only: Header + Horizontal Scroll */}
              <div className="md:hidden mb-6 w-full">
                <h3 className="text-lg font-medium text-black mb-4">Creative Team</h3>
                <div className="overflow-x-auto pb-4 scrollbar-hide -mx-8 px-8">
                  <div className="flex gap-4 min-w-max">
                    {[
                      { name: "Finn", role: "Product Designer", image: "/about/Finn.png", linkedin: "https://www.linkedin.com/in/mr-arifinsyah/" },
                      { name: "Surya", role: "UX Researcher", image: "/about/Surya.png", linkedin: "https://www.linkedin.com/in/suryac-tra/" },
                      { name: "Rici", role: "UI Designer", image: "/about/Rici.png", linkedin: "https://www.linkedin.com/in/elivina-ragil/" },
                    ].map((person, i) => (
                      <motion.div
                        key={i}
                        className="relative shrink-0"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                      >
                        <div className="overflow-hidden relative"
                          style={{
                            width: "280px",
                            height: "361px",
                            borderRadius: "32px",
                            backgroundImage: "url('/about/background.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}
                        >
                          <div className="absolute" style={{
                            bottom: person.name === "Surya" ? "0" : "-10px",
                            right: person.name === "Surya" ? "-15px" : "-10px",
                            width: person.name === "Surya" ? "65%" : "95%",
                            height: person.name === "Surya" ? "80%" : "100%"
                          }}>
                            <Image
                              src={person.image}
                              alt={person.name}
                              fill
                              className="object-contain object-bottom-right"
                            />
                          </div>
                          <div className="absolute top-4 left-3 text-left z-10">
                            <Link
                              href={person.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-bold text-black underline hover:text-blue-600 transition-colors"
                            >
                              {person.name}
                            </Link>
                            <p className="text-xs text-black leading-tight max-w-20">{person.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet & Desktop: Vertical Label + Cards Row */}
              <motion.div
                className="hidden md:flex items-stretch gap-8 justify-start w-full md:pl-0 lg:pl-35"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px", once: true }}
                variants={staggerContainer}
              >
                {/* Vertical Label - Responsive size */}
                <div className="flex items-center shrink-0">
                  <div className="border border-black/50 rounded-full bg-transparent md:w-17.5 md:h-50 lg:w-22.5 lg:h-62.5"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span className="text-lg font-medium text-black whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      Creative Team
                    </span>
                  </div>
                </div>

                {/* 3 Cards Row */}
                <div className="flex flex-col gap-4 md:flex-row md:gap-6 shrink-0">
                  {[
                    { name: "Finn", role: "Product Designer", image: "/about/Finn.png", linkedin: "https://www.linkedin.com/in/mr-arifinsyah/" },
                    { name: "Surya", role: "UX Researcher", image: "/about/Surya.png", linkedin: "https://www.linkedin.com/in/suryac-tra/" },
                    { name: "Rici", role: "UI Designer", image: "/about/Rici.png", linkedin: "https://www.linkedin.com/in/elivina-ragil/" },
                  ].map((person, i) => (
                    <motion.div
                      key={i}
                      className="relative shrink-0"
                      variants={fadeInUp}
                    >
                      {/* Container - Responsive: Tablet 186x240px, Desktop 232x300px */}
                      <div className="overflow-hidden relative shrink-0 md:w-[186px] md:h-[240px] lg:w-[232px] lg:h-[300px] md:rounded-[38px] lg:rounded-[48px]"
                        style={{
                          backgroundImage: "url('/about/background.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      >
                        {/* Enlarged image at bottom-right - Responsive */}
                        <div
                          className={`absolute bottom-0 right-0 ${person.name === "Surya" ? "md:w-32 md:h-48 lg:w-40 lg:h-60" : "md:w-40 md:h-56 lg:w-50 lg:h-70"}`}
                        >
                          <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            className="object-contain object-bottom-right"
                          />
                        </div>
                        {/* Text overlay at top left */}
                        <div className="absolute md:top-12 lg:top-15 left-3 md:left-3 lg:left-4 text-left z-10">
                          <Link
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base md:text-lg font-bold text-black underline hover:text-blue-600 transition-colors"
                          >
                            {person.name}
                          </Link>
                          <p className="text-xs text-black leading-tight max-w-30">{person.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Analyst Team */}
            <div className="w-full">
              {/* Mobile Only: Header + Horizontal Scroll */}
              <div className="md:hidden mb-6 w-full">
                <h3 className="text-lg font-medium text-black mb-4">Analyst Team</h3>
                <div className="overflow-x-auto pb-4 scrollbar-hide -mx-8 px-8">
                  <div className="flex gap-4 min-w-max">
                    {[
                      { name: "Guntur", role: "Policy Analyst", image: "/about/Guntur.png", linkedin: "https://www.linkedin.com/in/guntur-iqbal/" },
                      { name: "Jonathan", role: "Business Analyst", image: "/about/Jonathan.png", linkedin: "https://www.instagram.com/jonathanadrl" },
                    ].map((person, i) => (
                      <motion.div
                        key={i}
                        className="relative shrink-0"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                      >
                        <div
                          className="overflow-hidden relative"
                          style={{
                            width: "400px",
                            height: "292px",
                            borderRadius: "32px",
                            backgroundImage: "url('/about/background.png')",
                            backgroundSize: "150%",
                            backgroundPosition: "center"
                          }}
                        >
                          <div
                            className="absolute bottom-0"
                            style={{
                              [i === 0 ? 'right' : 'left']: i === 0 ? 0 : '-20px',
                              width: person.name === "Jonathan" ? "80%" : "70%",
                              height: "100%"
                            }}
                          >
                            <Image
                              src={person.image}
                              alt={person.name}
                              fill
                              className="object-contain object-bottom"
                            />
                          </div>
                          <div
                            className="absolute top-4 z-10"
                            style={{
                              [i === 0 ? 'left' : 'right']: '16px',
                              textAlign: i === 0 ? 'left' : 'right'
                            }}
                          >
                            {person.linkedin ? (
                              <Link
                                href={person.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold text-black underline hover:text-blue-600 transition-colors"
                              >
                                {person.name}
                              </Link>
                            ) : (
                              <p className="text-sm font-bold text-black underline">{person.name}</p>
                            )}
                            <p className="text-xs text-black leading-tight max-w-25">{person.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet & Desktop: Vertical Label + Cards Row */}
              <motion.div
                className="hidden md:flex items-stretch gap-8 justify-start w-full md:pl-0 lg:pl-35"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px", once: true }}
                variants={staggerContainer}
              >
                {/* Vertical Label - Responsive size */}
                <div className="flex items-center shrink-0">
                  <div className="border border-black/50 rounded-full bg-transparent md:w-17.5 md:h-50 lg:w-22.5 lg:h-62.5"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <span className="text-lg font-medium text-black whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      Analyst Team
                    </span>
                  </div>
                </div>

                {/* Horizontal container with 2 people */}
                <div className="flex flex-col gap-4 md:flex-row md:gap-6 shrink-0">
                  {[
                    { name: "Guntur", role: "Policy Analyst", image: "/about/Guntur.png", linkedin: "https://www.linkedin.com/in/guntur-iqbal/" },
                    { name: "Jonathan", role: "Business Analyst", image: "/about/Jonathan.png", linkedin: "https://www.instagram.com/jonathanadrl" },
                  ].map((person, i) => (
                    <motion.div
                      key={i}
                      className="relative shrink-0"
                      variants={fadeInUp}
                    >
                      {/* Container - Responsive: Tablet 263x193px, Desktop 329x241px with asymmetric rounded corners */}
                      <div
                        className={`overflow-hidden relative md:w-[263px] md:h-[193px] lg:w-[329px] lg:h-[241px]`}
                        style={{
                          borderTopLeftRadius: i === 0 ? "96px" : "0px",
                          borderTopRightRadius: i === 0 ? "0px" : "96px",
                          borderBottomRightRadius: i === 0 ? "0px" : "96px",
                          borderBottomLeftRadius: i === 0 ? "96px" : "0px",
                          backgroundImage: "url('/about/background.png')",
                          backgroundSize: "150%",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat"
                        }}
                      >
                        {/* Image positioned - Responsive */}
                        <div
                          className={`absolute ${person.name === "Jonathan" ? "md:w-[200px] md:h-[272px] lg:w-[250px] lg:h-[340px]" : "md:w-[168px] md:h-[240px] lg:w-[210px] lg:h-[300px]"}`}
                          style={{
                            [i === 0 ? 'right' : 'left']: i === 0 ? 0 : (person.name === "Jonathan" ? "-40px" : "-50px"),
                            bottom: person.name === "Jonathan" ? "-10px" : 0
                          }}
                        >
                          <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            className="object-contain object-bottom"
                          />
                        </div>
                        {/* Text overlay - Responsive positioning */}
                        <div
                          className="absolute md:top-12 lg:top-16 z-10"
                          style={{
                            [i === 0 ? 'left' : 'right']: i === 0 ? '48px' : '48px',
                            textAlign: i === 0 ? 'left' : 'right'
                          }}
                        >
                          {person.linkedin ? (
                            <Link
                              href={person.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-bold text-black underline hover:text-blue-600 transition-colors"
                            >
                              {person.name}
                            </Link>
                          ) : (
                            <p className="text-lg font-bold text-black underline">{person.name}</p>
                          )}
                          <p className="text-xs text-black leading-tight">{person.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#080505] text-white overflow-hidden">
        <Container>
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-merriweather)" }}
              variants={fadeInUp}
            >
              Tell us your wonderful digitalization idea.
            </motion.h2>
            <motion.p
              className="text-white-200 mb-10 text-sm md:text-base"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Not sure what you need? <span className="font-bold italic" style={{ marginRight: '0.25em' }}>Free</span>Initial consultation.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-block border border-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-[#003680] transition-colors rounded-full"
              >
                I'm interested
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <div className="bg-white">
        <Footer />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        * {
          transition: filter 0.4s ease-in-out, box-shadow 0.4s ease-in-out,
            opacity 0.4s ease-in-out, color 0.4s ease-in-out, background 0.4s ease-in-out,
            text-shadow 0.4s ease-in-out;
        }
        *::before,
        *::after {
          transition: filter 0.4s ease-in-out, box-shadow 0.4s ease-in-out,
            opacity 0.4s ease-in-out, color 0.4s ease-in-out, background 0.4s ease-in-out,
            text-shadow 0.4s ease-in-out;
        }

        .bell-container {
          width: 80em;
          height: 80em;
          opacity: 1;
          cursor: pointer;
          transform-origin: 50% -50vh;
          animation: 5s ease-in-out infinite bell;
        }
        @keyframes bell {
          0% {
            rotate: calc(1deg * var(--degofrot));
          }
          50% {
            rotate: calc(-1deg * var(--degofrot));
          }
          100% {
            rotate: calc(1deg * var(--degofrot));
          }
        }

        .bell-container,
        .bell-container * {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        .rope {
          height: 50vh;
          width: 2em;
          translate: 0 -52%;
          background: linear-gradient(90deg, #2d54744d 0%, #000b 30%, transparent 100%),
            repeating-linear-gradient(-70deg, #252525, #888 2%, #3a3a3a 3%);
        }

        .bell-top {
          width: 14%;
          height: 14%;
          border-radius: 50%;
          translate: 0 -28em;
          background: var(--base-clr);
          box-shadow: inset -1em -0.5em 2em 0.5em #fff, inset 1em -1em 2em 3em #000,
            0 -0.1em 0.4em 0.3em #c6eaffa8;
        }

        .bell-base {
          width: 50%;
          height: 50%;
          border-radius: 50%;
          translate: 0 -24%;
          background: var(--base-clr);
          box-shadow: 0 -0.1em 0.4em 0.2em #c6eaffa8;
        }
        .bell-base:before {
          content: "";
          background-image: radial-gradient(
            circle at -80% -12%,
            transparent 50em,
            var(--base-clr) 50em
          );
          position: absolute;
          translate: -18em 20em;
          width: 100%;
          height: 80%;
        }
        .bell-base:after {
          content: "";
          background-image: radial-gradient(
            circle at -80% -12%,
            transparent 50.1em,
            #cacaca 50.3em,
            var(--base-clr) 50.5em
          );
          position: absolute;
          translate: 18em 20em;
          width: 100%;
          height: 80%;
          transform: rotateY(180deg);
        }
        .bell-base:nth-child(2) {
          filter: brightness(3) blur(1em);
          scale: 0.74 0.84;
          translate: 0em -11em;
        }
        .shadow-l1 {
          width: 30em;
          height: 42em;
          border-radius: 50%;
          rotate: 12deg;
          translate: -3em -6em;
          filter: blur(2em);
          background: #797a80;
        }
        .shadow-l2 {
          width: 130%;
          height: 90%;
          filter: blur(5em);
          translate: -6em 9em;
        }
        .shadow-l2::before {
          display: block;
          content: "";
          width: 68%;
          height: 64%;
          border-radius: 50%;
          rotate: -54deg;
          translate: -8em 2em;
          scale: 1;
          background: #000000;
        }
        .glow {
          width: 100%;
          height: 100%;
          filter: brightness(2) blur(2em);
        }
        .glow::before {
          clip-path: polygon(
            9% 83%,
            12% 79%,
            15% 74%,
            18% 68%,
            20% 62%,
            22% 56%,
            23% 50%,
            24% 43%,
            25% 38%,
            25% 34%,
            26% 29%,
            26% 26%,
            27% 22%,
            29% 19%,
            30% 15%,
            32% 13%,
            34% 10%,
            37% 7%,
            41% 5%,
            44% 4%,
            47% 3%,
            51% 3%,
            55% 3%,
            58% 5%,
            62% 6%,
            73% 29%,
            72% 25%,
            70% 20%,
            67% 16%,
            63% 12%,
            60% 9%,
            58% 8%,
            55% 7%,
            52% 6%,
            48% 6%,
            44% 8%,
            41% 9%,
            37% 12%,
            36% 14%,
            33% 16%,
            31% 20%,
            30% 23%,
            29% 26%,
            28% 31%,
            27% 36%,
            27% 39%,
            26% 44%,
            26% 48%,
            26% 52%,
            25% 56%,
            23% 61%,
            22% 65%,
            21% 69%,
            19% 72%,
            17% 75%,
            15% 78%,
            13% 81%
          );
          width: 100%;
          height: 80%;
          translate: 0 6em;
          scale: 0.94 0.94;
          background: #fff3;
          display: block;
          content: "";
        }
        .glow2 {
          width: 100%;
          height: 100%;
          filter: brightness(1) blur(0.3em);
          opacity: 0.1;
        }
        .glow2::before {
          clip-path: polygon(
            9.21% 83%,
            12.28% 79%,
            15.35% 74%,
            18.41% 68%,
            20.46% 62%,
            22.51% 56%,
            23.53% 50%,
            24.55% 43%,
            25.58% 34%,
            26.6% 29%,
            27.62% 22%,
            29.16% 18.5%,
            30.95% 15.75%,
            32.74% 13%,
            34.78% 10%,
            37.85% 7%,
            41.94% 5%,
            45.01% 4%,
            48.08% 3%,
            52.17% 3%,
            56.27% 3%,
            64.01% 6.36%,
            55.75% 4.5%,
            47.83% 4.75%,
            42.84% 5.88%,
            39.51% 7.88%,
            36.45% 10.38%,
            33.38% 14.88%,
            30.69% 19%,
            29.67% 22.5%,
            28.8% 26.72%,
            28.21% 31.36%,
            26.92% 38.44%,
            26.57% 43.67%,
            25.51% 48.34%,
            25% 54.34%,
            23.4% 60.69%,
            21.23% 65.38%,
            18.41% 71.5%,
            16.88% 74.75%,
            12.28% 80.5%
          );
          width: 100%;
          height: 84%;
          translate: -1em 8.4em;
          scale: 1;
          background: #fff3;
          display: block;
          content: "";
        }
        .left-glow {
          --lgc: #5d819666;
          width: 50%;
          height: 50%;
          border-radius: 50%;
          translate: 0 -24%;
          background: transparent;
          box-shadow: inset 1em 0em 1em 0.2em var(--lgc);
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        }
        .left-glow2 {
          --lgc2: #5d819666;
          width: 49%;
          height: 50%;
          background-image: radial-gradient(
            circle at -80% -12%,
            transparent 50em,
            var(--lgc2) 50.3em,
            transparent 52em
          );
          position: absolute;
          translate: -19em 10.35em;
          clip-path: polygon(0 0, 100% 0, 100% 78%, 0 78%);
        }
        .r-glow {
          --lgc: #fffaf680;
          width: 50%;
          height: 50%;
          border-radius: 50%;
          translate: 0 -24%;
          background: transparent;
          box-shadow: inset 1em 0em 1em 0.2em var(--lgc);
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
          transform: rotateY(180deg);
        }
        .r-glow2 {
          --lgc2: #fffaf680;
          width: 49%;
          height: 50%;
          background-image: radial-gradient(
            circle at -80% -12%,
            transparent 50em,
            var(--lgc2) 50.3em,
            transparent 52em
          );
          position: absolute;
          translate: 18.2em 10.35em;
          clip-path: polygon(0 0, 100% 0, 100% 78%, 0 78%);
          transform: rotateY(180deg) rotateZ(-2deg);
        }
        .mid-ring.small {
          translate: 0.04em -8em;
          scale: 0.8 0.5;
        }
        .mid-ring {
          width: 64%;
          height: 10%;
          border-radius: 50%;
          translate: -0.1em 10em;
          box-shadow: inset -0.3em 1.3em 0.4em -1em #fff5,
            -0.2em -1.2em 0.4em -0.4em #505050, -0.1em -1.8em 0.4em -0.4em #fff5,
            0 -2.5em 0.4em -1em #000000;
          mix-blend-mode: hard-light;
          filter: brightness(0.8);
        }
        .mid-ring::before,
        .mid-ring::after {
          content: "";
          display: block;
          background: #000;
          width: 2em;
          height: 2em;
          top: 10%;
          border-radius: 50%;
          position: absolute;
        }
        .mid-ring::after {
          right: -2%;
        }
        .mid-ring::before {
          left: -2%;
        }
        .bell-buff-t {
          background: #fff2;
          width: 72%;
          height: 12%;
          border-radius: 50%;
          translate: 0 16em;
          filter: blur(1em);
        }
        .bell-buff {
          background: linear-gradient(90deg, black 40%, var(--base-clr) 90%);
          width: 88%;
          height: 20%;
          border-radius: 50% 50% 50% 50% / 50% 50% 30% 30%;
          translate: 0 20em;
          box-shadow: inset 1em 0 2em -1em #5d819666, inset -1em 0 2em -1em #fff;
        }
        .bell-btm {
          width: 88%;
          height: 18%;
          border-radius: 50%;
          translate: 0 23em;
          background: linear-gradient(90deg, black 40%, var(--base-clr) 90%);
        }
        .bell-btm2 {
          width: 74%;
          height: 12%;
          border-radius: 50%;
          translate: 0 24em;
          background: #fffff6;
          box-shadow: 0 0 1em 0.6em #ffe9d4, -0.8em 0.2em 2em 1em #cca37f,
            -5.4em -0.6em 3em -1em #ce6e1abb, 6em -0.6em 3em -1em #ce6e1abb,
            inset 0em 30.3em 0.3em -30em #c7962d, inset 0 -2em 2em -2em #ffe9d4,
            inset 0em -1em 2em 1em #ce6e1a66;
          filter: brightness(1);
        }
        .off .bell-btm2 {
          filter: brightness(0.02);
        }
        .bell-ring-container {
          width: 74%;
          height: 24%;
          border-radius: 50% 50% 50% 50% / 25% 25% 0% 0%;
          translate: 0 29.2em;
          overflow: hidden;
        }
        .bell-ring {
          width: 12em;
          height: 12em;
          background: #fff;
          border-radius: 50%;
          translate: 0 -6em;
          box-shadow: 0 0.8em 1em -0.3em #f8e1d0, inset 0 -6em 4em -4em #e3b695,
            inset 0 1em 3em 1em #fff4, inset 0 2em 3em 1em #fff,
            inset 0 100em 0 100em #2c2c2c;
        }
        .off .bell-ring {
          background: #000;
          box-shadow: 0 0.8em 1em -0.3em #f8e1d000, inset 0 -6em 4em -4em #e3b69500,
            inset 0 1em 3em 1em #fff0, inset 0 -2em 3em 1em #fff2,
            inset 0 100em 0 100em #000;
        }

        .bell-rays {
          mix-blend-mode: soft-light;
          box-shadow: inset 0 -21em 4em -20em #000;
          width: 100%;
          height: 140%;
          translate: 0 -4em;
          border-radius: 50%;
        }
        .bell-rays::before {
          content: "";
          display: block;
          width: 100em;
          height: 100em;
          transform-origin: 50% 50%;
          position: absolute;
          left: -21em;
          top: -77em;
          border-radius: 100%;
          filter: blur(0.6em);
          background: repeating-conic-gradient(
            at 50% 50%,
            #fff2 0%,
            transparent 0.6%,
            #fff2 0.8%
          );
          animation: radiate 1s linear infinite;
        }
        .off .bell-rays {
          opacity: 0;
        }
        @keyframes radiate {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 6deg;
          }
        }

        .volumetric {
          width: 98%;
          height: 224%;
          translate: 0 124em;
          opacity: 0.2;
        }
        .volumetric .vl {
          width: 100%;
          height: 100%;
          transform-origin: 50% 20em;
          rotate: 22deg;
          box-shadow: inset 40em 0 20em -20em #fff1;
        }
        .volumetric .vr {
          width: 100%;
          height: 100%;
          transform-origin: 50% 20em;
          rotate: -22deg;
          box-shadow: inset -40em 0 20em -20em #fff1;
        }
        .off .volumetric {
          opacity: 0;
        }

        .grain {
          z-index: 10;
          position: absolute;
          pointer-events: none;
          width: 100%;
          height: 100%;
          top: 0;
          bottom: 0;
          margin: auto;
          background: radial-gradient(circle at 50% 50%, #000, #0000),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          filter: contrast(100%) brightness(200%) grayscale(1) opacity(0.168);
          mix-blend-mode: screen;
        }

        .hero-text {
          position: relative;
          font-size: 6.5em;
          font-family: var(--font-plus-jakarta-sans);
          color: #fff;
          text-align: center;
          top: 15em;
          width: 100%;
          padding: 1em 2em;
          line-height: 1.4;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        @media (min-width: 768px) {
          .hero-text {
            font-size: 6em;
            top: 12em;
          }
        }

        .bold-text {
          font-weight: 700;
          font-style: italic;
          color: #fff;
        }

        .off + .hero-text {
          opacity: 0;
          pointer-events: none;
        }
      `}} />
    </>
  );
}
