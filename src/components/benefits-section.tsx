import Image from "next/image";
import { Clock3, Droplets, Leaf, Smartphone } from "lucide-react";
import { homePage } from "~/consts/texts";
import { SectionHeading } from "~/components/section-heading";
import { Card, CardContent } from "~/components/ui/card";
import { ScrollReveal } from "~/components/scroll-reveal";

const icons = [Clock3, Droplets, Smartphone, Leaf];

export function BenefitsSection() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow={homePage.benefits.eyebrow}
            title={homePage.benefits.title}
            description={homePage.benefits.description}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homePage.benefits.items.map((item, index) => {
            const Icon = icons[index] ?? Leaf;

            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <Card className="group relative h-full overflow-hidden border-white/10 bg-slate-950 text-white shadow-[0_20px_55px_rgba(8,15,12,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(8,15,12,0.26)]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,14,11,0.16)_0%,rgba(7,14,11,0.62)_42%,rgba(7,14,11,0.92)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(145,219,157,0.2),transparent_32%)]" />

                  <CardContent className="relative z-10 flex h-full min-h-[300px] flex-col p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-serif font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
