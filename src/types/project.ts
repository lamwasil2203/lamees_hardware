export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
}

export interface Takeaway {
  label: string;
  title: string;
  description: string;
}

export interface ContentSection {
  type: "overview" | "gallery" | "reflection" | "takeaways" | "video";
  label?: string;
  paragraphs?: string[];
  largeParagraph?: string;
  images?: GalleryImage[];
  quote?: string;
  takeaways?: Takeaway[];
  videoSrc?: string;
  videoCaption?: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  date: string;
  dateShort: string;
  tags: string[];
  excerpt: string;
  lead: string;
  heroImage: string;
  cardImage: string;
  sections: ContentSection[];
}
