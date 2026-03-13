import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "~/components/ui/button";
import { homePage } from "~/consts/texts";
import { ScrollReveal } from "~/components/scroll-reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-foreground pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(75,165,117,0.45),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(76,125,255,0.22),_transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-1.5 text-xs font-medium text-card">
                <Leaf className="h-3.5 w-3.5" />
                {homePage.hero.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-card sm:text-5xl lg:text-7xl text-balance leading-tight">
              {homePage.hero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-card/80 max-w-xl">
              {homePage.hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6">
                <Link href={homePage.hero.primaryCta.href}>
                  {homePage.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-card/30 text-card bg-card/10 hover:bg-card/20 hover:text-card backdrop-blur-sm text-base px-8 py-6">
                <Link href={homePage.hero.secondaryCta.href}>
                  {homePage.hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {homePage.hero.stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={0.4 + index * 0.1}>
                <div className="rounded-2xl border border-card/10 bg-card/10 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-serif font-bold text-card">{stat.value}</p>
                  <p className="mt-1 text-sm text-card/70">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
