// hooks/useImageGallery.ts
import { useState, useEffect } from 'react';
import type { ImageData } from '../types';

export const useImageGallery = (images: ImageData[]) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset state when images change (category switch)
  useEffect(() => {
    setSelectedImage(null);
    setCurrentIndex(0);
    setIsLightboxOpen(false);
  }, [images]);

  const openLightbox = (imageId: string) => {
    const index = images.findIndex((img) => img.id === imageId);
    if (index !== -1) {
      setSelectedImage(images[index]);
      setCurrentIndex(index);
      setIsLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return {
    selectedImage,
    currentIndex,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    goToNext,
    goToPrevious,
  };
};