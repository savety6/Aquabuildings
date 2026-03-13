import { Clock3, Droplets, Leaf, Smartphone } from "lucide-react";
import { homePage } from "~/consts/texts";
import { SectionHeading } from "~/components/section-heading";
import { Card, CardContent } from "~/components/ui/card";
import { ScrollReveal } from "~/components/scroll-reveal";

const icons = [Clock3, Droplets, Smartphone, Leaf];

export function BenefitsSection() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                <Card className="border-border bg-card h-full">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-serif font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
