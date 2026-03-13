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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                className="group border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 mt-5 text-xl font-serif font-semibold text-card-foreground">
                    {offer.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>

                  <ul className="mb-6 flex flex-col gap-2">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-card-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="ghost" className="h-auto p-0 font-medium text-primary hover:bg-primary/10 hover:text-primary/90">
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
