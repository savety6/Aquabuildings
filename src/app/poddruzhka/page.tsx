import type { Metadata } from "next";
import { CTA } from "~/components/cta";
import { DetailSections } from "~/components/detail-sections";
import { PageHero } from "~/components/page-hero";
import { servicePages } from "~/consts/texts";

const content = servicePages.maintenance;

export const metadata: Metadata = {
  title: content.metadataTitle,
  description: content.metadataDescription,
};

export default function MaintenancePage() {
  return (
    <main>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        primaryCta={{ label: "Свържете се с нас", href: "/kontakti" }}
        secondaryCta={{ label: "Към озеленяването", href: "/ozeleniavane" }}
      />
      <DetailSections sections={content.sections} />
      <CTA />
    </main>
  );
}
