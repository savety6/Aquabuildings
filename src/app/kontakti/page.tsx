import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "~/components/page-hero";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { phoneHref, phoneNumber, servicePages } from "~/consts/texts";

const content = servicePages.contact;

export const metadata: Metadata = {
  title: content.metadataTitle,
  description: content.metadataDescription,
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        primaryCta={{ label: "Обадете се сега", href: phoneHref }}
        secondaryCta={{ label: "Към началото", href: "/" }}
      />

      <section className="bg-background py-18 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <Card className="border-border bg-card">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-2xl font-serif font-semibold text-card-foreground">
                Какво да подготвите за разговора
              </h2>
              <ul className="mt-6 space-y-4">
                {content.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-secondary/60">
            <CardContent className="p-6 lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-2xl font-serif font-semibold text-card-foreground">
                Телефон за контакт
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Най-бързият начин да започнем е с разговор и оглед на място.
              </p>
              <p className="mt-6 text-2xl font-semibold text-foreground">{phoneNumber}</p>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href={phoneHref}>
                  Обадете се
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
