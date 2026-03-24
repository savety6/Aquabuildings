import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, PencilRuler, ShieldCheck, Trees } from "lucide-react";
import { homePage } from "~/consts/texts";
import { SectionHeading } from "~/components/section-heading";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { ScrollReveal } from "~/components/scroll-reveal";

const icons = [Droplets, Trees, PencilRuler, ShieldCheck];

export function Offers() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow={homePage.services.eyebrow}
            title={homePage.services.title}
            description={homePage.services.description}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {homePage.services.items.map((offer, index) => {
            const Icon = icons[index] ?? Droplets;

            return (
            <ScrollReveal key={offer.title} delay={index * 0.1}>
              <Card
                className="group relative h-full overflow-hidden border-white/10 bg-slate-950 text-white shadow-[0_22px_60px_rgba(8,15,12,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(8,15,12,0.26)]"
              >
                <Image
                  src={offer.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,14,11,0.18)_0%,rgba(7,14,11,0.55)_40%,rgba(7,14,11,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(129,199,132,0.24),transparent_34%)]" />

                <CardContent className="relative z-10 flex h-full min-h-[360px] flex-col p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 mt-5 text-xl font-serif font-semibold text-white">
                    {offer.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/80">
                    {offer.description}
                  </p>

                  <ul className="mb-6 flex flex-col gap-2">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/90">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="ghost"
                    className="mt-auto h-auto w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 font-medium text-white backdrop-blur-sm hover:bg-white/16 hover:text-white"
                  >
                    <Link href={offer.href}>
                      Научете повече
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          )})}
        </div>
      </div>
    </section>
  );
}
