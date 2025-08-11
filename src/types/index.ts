// types/index.ts
export interface ImageData {
  id: string;
  url: string;
  alt: string;
  category: CategoryType;
}

export type CategoryType = 'Fashion' | 'Product' | 'Ecommerce';

export interface PortfolioData {
  [key: string]: ImageData[];
}

export interface NavigationItem {
  name: string;
  path: string;
  category?: CategoryType;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface LightboxProps {
  isOpen: boolean;
  currentImage: ImageData | null;
  currentIndex: number;
  images: ImageData[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export interface ImageGalleryProps {
  images: ImageData[];
  category: CategoryType;
  onImageClick: (image: ImageData, index: number) => void;
}

export interface HeaderProps {
  currentPage: string;
  onNavigationClick: (path: string) => void;
}

export interface PageProps {
  onNavigate: (path: string) => void;
}