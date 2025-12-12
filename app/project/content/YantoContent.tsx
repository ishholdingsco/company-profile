"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function YantoContent() {
  return (
    <>
      {/* Yanto: One mortal thousands of monsters section */}
      <section className="w-full pt-12 md:pt-16 lg:pt-32 pb-24 md:pb-32 bg-background relative">
        {/* Desktop Layout (lg) - horizontal layout */}
        <div className="hidden lg:block">
          <Container>
            {/* Top Description */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="ml-auto w-[60%] mb-12"
            >
              <p
                className="text-lg text-black text-right"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                A 2D horror rogue-like bullet hell where you play as an Indonesian shaman known as a
                Dukun, exorcizing the vengeful spirits by equipping yourself with an arsenal of items.
              </p>
            </motion.div>

            <div className="relative flex flex-row items-center justify-between">
              {/* Left: Character */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-[45%] flex-shrink-0 -ml-55"
              >
                <Image
                  src="/project/product/yanto/char.png"
                  alt="Character"
                  width={700}
                  height={700}
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Center: Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 text-left -ml-8"
              >
                <h2
                  className="text-5xl xl:text-6xl font-bold text-foreground leading-tight"
                  style={{ fontFamily: "var(--font-merriweather)", lineHeight: "1.2" }}
                >
                  one mortal,
                  <br />
                  <span className="whitespace-nowrap">thousands of monsters</span>
                </h2>
              </motion.div>

              {/* Right: Orb */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-[25%] flex-shrink-0 -mt-40 xl:-mt-78"
              >
                <Image
                  src="/project/product/yanto/orb.png"
                  alt="Orb"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </div>

        {/* Mobile & Tablet Layout - vertical layout */}
        <div className="lg:hidden">
          <Container>
            {/* Top Description */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto w-full mb-4 md:mb-6"
            >
              <p
                className="text-lg md:text-xl text-black text-center"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                A 2D horror rogue-like bullet hell where you play as an Indonesian shaman known as a
                Dukun, exorcizing the vengeful spirits by equipping yourself with an arsenal of items.
              </p>
            </motion.div>
          </Container>

          {/* Character - positioned at left edge, outside container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <div className="w-[60%] md:w-[55%]">
              <Image
                src="/project/product/yanto/char.png"
                alt="Character"
                width={700}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Heading - full width for perfect centering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6 px-4"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground text-center leading-tight"
              style={{ fontFamily: "var(--font-merriweather)", lineHeight: "1.2" }}
            >
              one mortal,
              <br />
              <span className="whitespace-nowrap">thousands of monsters</span>
            </h2>
          </motion.div>

          {/* Orb - positioned at right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-end pr-4"
          >
            <div className="w-[40%] md:w-[35%]">
              <Image
                src="/project/product/yanto/orb.png"
                alt="Orb"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yanto: The Beginning, Gameplay, Features section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-20">
            {/* Left Column: The Beginning + Gameplay */}
            <div className="space-y-12">
              {/* The Beginning */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  The Beginning
                </h3>
                <div
                  className="text-sm md:text-base leading-relaxed text-foreground/80 space-y-4"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  <p>
                    He steps into the unknown, where the fragrance of moist earth mingles with thick mist and forgotten shadows.
                    There is no sound of living, not even any birds singing in this place. There is no way home. This is where the young,
                    dainty dancer's soul is trapped.
                  </p>
                  <p>
                    Only one soul is daring enough to follow her. The one who has mighty power, with a set of deadly curses and
                    magic craft. The man who is cunning and has a sharp mind, but the most important thing is his fearless
                    determination. His name is Yanto.
                  </p>
                </div>
              </motion.div>

              {/* Gameplay */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h3
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  Gameplay
                </h3>
                <div
                  className="text-sm md:text-base leading-relaxed text-foreground/80 space-y-4"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  <p>
                    His Name is Yanto is a rogue-like horror game against thousands of damned souls. Equip various sets of lethal
                    weapons. Each with different effect starts to unleash special items in your survival kit. You only have
                    limited slots for each item and weapon, so choose wisely. As you progress in the game, you can decide which
                    stats, weapons, or items to improve in the level-up menu. It encourages the player to plan which combinations
                    are strong synergies.
                  </p>
                  <p>
                    You play as "Yanto", a shaman who braces the other world to release a possessed, trapped soul of a prominent
                    figure in a small, remote village, "The Maiden Dancer. As you enter the tainted woods, the undead and vengeful
                    spirits are prowling from every direction. This place is not suitable for a faint-hearted soul.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3
                className="text-3xl md:text-4xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                Features
              </h3>
              <ul
                className="space-y-3 text-sm md:text-base text-foreground/80 list-disc pl-5 marker:text-foreground"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                <li>
                  <strong className="font-bold">1 vs thousands of enemies.</strong>
                  <br />
                  <span className="text-foreground/80">
                    As time passes, each wave of incoming enemies becomes increasingly challenging. The longer it
                    goes, the more enemies there are, up to a total of thousands of enemies!
                  </span>
                </li>
                <li>
                  <strong className="font-bold">Fully fleshed-out action.</strong>
                  <br />
                  <span className="text-foreground/80">
                    This game is straightforward. You press the PLAY button, and start to defeat enemies!
                  </span>
                </li>
                <li>
                  <strong className="font-bold">Various weapons and skills to acquire.</strong>
                  <br />
                  <span className="text-foreground/80">
                    Each weapons have unique quirks and hidden powers. Players can choose various skills and weapons to unlock
                    the full potential
                  </span>
                </li>
                <li>
                  <strong className="font-bold">Roguelike runs, more replayability.</strong>
                  <br />
                  <span className="text-foreground/80">
                    Each run started with different flavors and challenges. A variety of combinations of weapons and items can
                    create a unique experience!
                  </span>
                </li>
                <li>
                  <strong className="font-bold">Nostalgic retro pixelated art.</strong>
                  <br />
                  <span className="text-foreground/80">
                    Indulge the nostalgia of pixelated style like your favorite games from the '90s.
                  </span>
                </li>
                <li>
                  <strong className="font-bold">Classic Indonesian horror.</strong>
                  <br />
                  <span className="text-foreground/80">
                    Crave classic horror? His Name is Yanto offers stories inspired by classic urban horror and local myth to keep
                    you awake in the middle of the late night.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
