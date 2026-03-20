import type { Metadata } from "next";
import { ContactDetails } from "~/components/contact-details";
import { PageHero } from "~/components/page-hero";
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

      <ContactDetails
        highlights={content.highlights}
        phoneHref={phoneHref}
        phoneNumber={phoneNumber}
      />
    </main>
  );
}
