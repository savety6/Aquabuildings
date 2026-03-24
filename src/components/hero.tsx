import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "~/components/ui/button";
import { homePage } from "~/consts/texts";
import { ScrollReveal } from "~/components/scroll-reveal";

export function Hero() {
  return (
    <section className="bg-foreground relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-garden-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero-garden.webm" type="video/webm" />
          <source
            src="/GeneratedVideo2026-3_07PM.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,15,10,0.88)_0%,rgba(5,15,10,0.78)_42%,rgba(5,15,10,0.58)_65%,rgba(5,15,10,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(75,165,117,0.28),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(18,67,38,0.35),_transparent_34%)]" />
      <div className="from-background via-background/40 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-center px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-2">
              <span className="border-primary/35 bg-primary/15 text-card inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <Leaf className="h-3.5 w-3.5" />
                {homePage.hero.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-card max-w-4xl font-serif text-4xl leading-tight font-bold tracking-tight text-balance drop-shadow-[0_12px_32px_rgba(0,0,0,0.32)] sm:text-5xl lg:text-7xl">
              {homePage.hero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-card/85 mt-6 max-w-2xl text-lg leading-relaxed drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
              {homePage.hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-[0_16px_40px_rgba(31,108,58,0.45)]"
              >
                <Link href={homePage.hero.primaryCta.href}>
                  {homePage.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-card/25 bg-card/12 text-card hover:bg-card/20 hover:text-card px-8 py-6 text-base backdrop-blur-md"
              >
                <Link href={homePage.hero.secondaryCta.href}>
                  {homePage.hero.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {homePage.hero.stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={0.4 + index * 0.1}>
                <div className="border-card/15 bg-card/12 rounded-3xl border p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-card/16 hover:shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
                  <p className="text-card font-serif text-3xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-card/70 mt-1 text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
