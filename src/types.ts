export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
