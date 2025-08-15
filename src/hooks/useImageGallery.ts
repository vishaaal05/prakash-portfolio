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

  const openLightbox = (imageOrId: ImageData | string, index?: number) => {
    // Handle case when an image object and index are passed
    if (typeof imageOrId !== 'string' && typeof index === 'number') {
      setSelectedImage(imageOrId);
      setCurrentIndex(index);
      setIsLightboxOpen(true);
      return;
    }

    // Handle case when only an image ID is passed
    const imageId = typeof imageOrId === 'string' ? imageOrId : imageOrId.id;
    const foundIndex = images.findIndex((img) => img.id === imageId);
    if (foundIndex !== -1) {
      setSelectedImage(images[foundIndex]);
      setCurrentIndex(foundIndex);
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