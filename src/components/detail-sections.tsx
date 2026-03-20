"use client";

import { motion } from "motion/react";
import { ScrollReveal } from "~/components/scroll-reveal";

type DetailSection = {
  title: string;
  description: string;
  bullets?: readonly string[];
};

type DetailSectionsProps = {
  sections: readonly DetailSection[];
};

export function DetailSections({ sections }: DetailSectionsProps) {
  return (
    <section className="bg-background py-18 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:px-8">
        {sections.map((section, index) => (
          <ScrollReveal key={section.title} delay={index * 0.1}>
            <motion.article
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 lg:p-8"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-serif font-semibold text-card-foreground">
                {section.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {section.description}
              </p>

              {section.bullets && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-card-foreground"
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08 + bulletIndex * 0.04,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
