import { GalleryImage as GalleryImageType } from "@/types/project";
import { GalleryImage } from "./GalleryImage";

interface ImageGalleryProps {
  images: GalleryImageType[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-6">
        {images.map((image, i) => (
          <div
            key={i}
            className={image.featured ? "col-span-full" : ""}
          >
            <GalleryImage image={image} />
          </div>
        ))}
      </div>
    </section>
  );
}
