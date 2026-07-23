"use client";

import { motion } from "framer-motion";

import Background from "./Background";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero({
  badge,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  stats,
  tests,
  packages: healthPackages,
  image,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <Background />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="order-1"
          >
            <HeroContent
              badge={badge}
              title={title}
              subtitle={subtitle}
              primaryButton={primaryButton}
              secondaryButton={secondaryButton}
              stats={stats}
            />
          </motion.div>

          {/* Hero Image */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="order-2 mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            <HeroImage
              image="/hero.png"
              tests={tests}
              packages={healthPackages}
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}