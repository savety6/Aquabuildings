import { promises as fs } from "node:fs";
import path from "node:path";
import { ImageOff } from "lucide-react";
import { homePage } from "~/consts/texts";
import { SectionHeading } from "~/components/section-heading";
import { ScrollReveal } from "~/components/scroll-reveal";
import { GalleryGrid, type GalleryItem } from "./gallery-grid";

const supportedExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

async function readGalleryDirectory(directoryName: string): Promise<GalleryItem[]> {
  const galleryDirectory = path.join(process.cwd(), "public", directoryName);
  const entries = await fs.readdir(galleryDirectory, { withFileTypes: true });

  const imageFiles = entries
    .filter(
      (entry) =>
        entry.isFile() &&
        supportedExtensions.has(path.extname(entry.name).toLowerCase()),
    )
    .sort((left, right) =>
      left.name.localeCompare(right.name, undefined, { numeric: true }),
    );

  return imageFiles.map((file, index) => {
    const content =
      homePage.gallery.items.at(index % homePage.gallery.items.length) ??
      homePage.gallery.items[0];

    return {
      src: `/${directoryName}/${file.name}`,
      alt: content.alt,
      title: content.title,
      description: content.description,
    };
  });
}

async function getGalleryItems(): Promise<GalleryItem[]> {
  for (const directoryName of ["images", "image"]) {
    try {
      const items = await readGalleryDirectory(directoryName);

      if (items.length > 0) {
        return items;
      }
    } catch {
      continue;
    }
  }

  return [];
}

export async function Gallery() {
  const galleryItems = await getGalleryItems();

  return (
    <section id="gallery" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow={homePage.gallery.eyebrow}
            title={homePage.gallery.title}
            description={homePage.gallery.description}
          />
        </ScrollReveal>

        {galleryItems.length > 0 ? (
          <GalleryGrid items={galleryItems} />
        ) : (
          <ScrollReveal delay={0.15}>
            <div className="border-border/70 bg-background/80 mt-16 rounded-[2rem] border p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                    <ImageOff className="h-4 w-4" />
                    {homePage.gallery.emptyStateLabel}
                  </div>
                  <h3 className="text-foreground mt-5 font-serif text-2xl font-semibold">
                    {homePage.gallery.emptyStateTitle}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                    {homePage.gallery.emptyStateDescription}
                  </p>
                </div>

                <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-xl">
                  {homePage.gallery.items.slice(0, 4).map((item) => (
                    <div
                      key={item.title}
                      className="border-border/60 bg-secondary/70 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <p className="text-foreground font-serif text-lg font-semibold">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
