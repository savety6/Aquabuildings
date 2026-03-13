import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { homePage } from "~/consts/texts";
import { ScrollReveal } from "~/components/scroll-reveal";

export function CTA() {
  return (
    <section id="cta" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium text-primary-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                {homePage.cta.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-serif font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              {homePage.cta.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              {homePage.cta.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-card px-8 py-6 text-base font-medium text-card-foreground hover:bg-card/90">
                <Link href={homePage.cta.primaryCta.href}>
                  {homePage.cta.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 px-8 py-6 text-base text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
                <Link href={homePage.cta.secondaryCta.href}>
                  {homePage.cta.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-6 text-sm text-primary-foreground/60">
              {homePage.cta.footnote}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
