"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Gallery as GalleryTexts } from "~/consts/texts"
const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: GalleryTexts.galleryItems.backyardOasis.alt,
    label: GalleryTexts.galleryItems.backyardOasis.label,
  },
  {
    src: "/images/gallery-2.jpg",
    alt: GalleryTexts.galleryItems.vegetableGarden.alt,
    label: GalleryTexts.galleryItems.vegetableGarden.label,
  },
  {
    src: "/images/gallery-3.jpg",
    alt: GalleryTexts.galleryItems.rooftopTerrace.alt,
    label: GalleryTexts.galleryItems.rooftopTerrace.label,
  },
  {
    src: "/images/gallery-4.jpg",
    alt: GalleryTexts.galleryItems.smartMisting.alt,
    label: GalleryTexts.galleryItems.smartMisting.label,
  },
  {
    src: "/images/gallery-5.jpg",
    alt: GalleryTexts.galleryItems.indoorGreenhouse.alt,
    label: GalleryTexts.galleryItems.indoorGreenhouse.label,
  },
  {
    src: "/images/gallery-6.jpg",
    alt: GalleryTexts.galleryItems.landscapeDesign.alt,
    label: GalleryTexts.galleryItems.landscapeDesign.label,
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
            {GalleryTexts.heading}
          </p>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {GalleryTexts.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {GalleryTexts.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`View ${item.label}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium text-card">{item.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-card hover:text-card/80 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[selectedImage]?.src ?? ""}
              alt={galleryItems[selectedImage]?.alt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  )
}
