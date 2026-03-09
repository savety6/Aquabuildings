import { Flower2, House, Sprout, Trees, Warehouse, Waves } from "lucide-react";
import { homePage } from "~/consts/texts";
import { SectionHeading } from "~/components/section-heading";

const icons = [Sprout, Flower2, Trees, Waves, Warehouse, House];

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={homePage.gallery.eyebrow}
          title={homePage.gallery.title}
          description={homePage.gallery.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homePage.gallery.items.map((item, index) => {
            const Icon = icons[index] ?? Sprout;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(240,247,242,0.95))] p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-serif font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
