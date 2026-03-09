import { BenefitsSection } from "~/components/benefits-section";
import { CTA } from "~/components/cta";
import { Gallery } from "~/components/gallery";
import { Hero } from "~/components/hero";
import { Offers } from "~/components/offers";
import { ProcessSteps } from "~/components/process-steps";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offers />
      <BenefitsSection />
      <ProcessSteps />
      <Gallery />
      <CTA />
    </main>
  );
}