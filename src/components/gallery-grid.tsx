"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ScrollReveal } from "~/components/scroll-reveal";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

const layoutClasses = [
  "md:col-span-7 md:row-span-2 min-h-[460px]",
  "md:col-span-5 min-h-[220px]",
  "md:col-span-5 min-h-[220px]",
  "md:col-span-6 min-h-[280px]",
  "md:col-span-3 min-h-[280px]",
  "md:col-span-3 min-h-[280px]",
];

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const renderedItems = useMemo(() => items.slice(0, 6), [items]);

  return (
    <>
      <div className="mt-16 grid grid-cols-1 gap-4 md:auto-rows-[220px] md:grid-cols-12">
        {renderedItems.map((item, index) => (
          <ScrollReveal
            key={`${item.src}-${item.title}`}
            delay={index * 0.08}
            className={layoutClasses[index] ?? "min-h-[240px] md:col-span-4"}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(index)}
              className="group bg-foreground/5 focus-visible:ring-primary relative h-full w-full overflow-hidden rounded-[1.75rem] text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label={`Отвори снимка: ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 42vw"
                    : "(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 26vw"
                }
                priority={index < 2}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,11,0.08)_0%,rgba(7,16,11,0.18)_34%,rgba(7,16,11,0.82)_100%)] transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-card/75 text-xs font-medium tracking-[0.24em] uppercase">
                  AquaBuildings
                </p>
                <h3 className="text-card mt-2 font-serif text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>
                <p className="text-card/80 mt-2 max-w-lg text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {selectedImage !== null ? (
        <div
          className="bg-foreground/85 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Преглед на изображение"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="border-card/15 bg-card/10 text-card hover:bg-card/20 absolute top-5 right-5 rounded-full border p-2 transition-colors"
            aria-label="Затвори галерията"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="border-card/10 bg-card/5 relative w-full max-w-6xl overflow-hidden rounded-[2rem] border shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={renderedItems[selectedImage]?.src ?? ""}
                alt={renderedItems[selectedImage]?.alt ?? ""}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="border-card/10 bg-foreground/90 text-card border-t p-6">
              <h3 className="font-serif text-2xl font-semibold">
                {renderedItems[selectedImage]?.title}
              </h3>
              <p className="text-card/75 mt-3 max-w-3xl text-sm leading-relaxed sm:text-base">
                {renderedItems[selectedImage]?.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
