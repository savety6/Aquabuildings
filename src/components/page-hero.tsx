"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "~/components/scroll-reveal";
import { Button } from "~/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-secondary/60 pt-32 pb-18 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-14 left-[-6rem] h-48 w-48 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 32, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-4rem] bottom-[-3rem] h-64 w-64 rounded-full bg-accent/12 blur-3xl"
          animate={{ x: [0, -26, 0], y: [0, -22, 0], scale: [1.04, 1, 1.04] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </ScrollReveal>

          {(primaryCta ?? secondaryCta) && (
            <ScrollReveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                {primaryCta && (
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" className="px-6">
                      <Link href={primaryCta.href}>
                        {primaryCta.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                )}
                {secondaryCta && (
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" variant="outline" className="px-6">
                      <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                    </Button>
                  </motion.div>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
