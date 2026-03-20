"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "~/components/scroll-reveal";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

type ContactDetailsProps = {
  highlights: readonly string[];
  phoneHref: string;
  phoneNumber: string;
};

export function ContactDetails({
  highlights,
  phoneHref,
  phoneNumber,
}: ContactDetailsProps) {
  return (
    <section className="bg-background py-18 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Card className="border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl font-serif font-semibold text-card-foreground">
                  Какво да подготвите за разговора
                </h2>
                <ul className="mt-6 space-y-4">
                  {highlights.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.4 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15 + index * 0.06,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Card className="border-border bg-secondary/60 shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Phone className="h-5 w-5" />
                </motion.div>
                <h2 className="mt-5 text-2xl font-serif font-semibold text-card-foreground">
                  Телефон за контакт
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Най-бързият начин да започнем е с разговор и оглед на място.
                </p>
                <p className="mt-6 text-2xl font-semibold text-foreground">
                  {phoneNumber}
                </p>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg" className="mt-6 w-full">
                    <Link href={phoneHref}>
                      Обадете се
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
