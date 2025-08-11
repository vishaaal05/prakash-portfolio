// hooks/useImageGallery.ts
import { useState } from 'react';
import type { ImageData } from '../types';

export const useImageGallery = (images: ImageData[]) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (image: ImageData, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (images.length === 0) return;
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    if (images.length === 0) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const goToImage = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
      setSelectedImage(images[index]);
    }
  };

  const isLightboxOpen = selectedImage !== null;

  return {
    selectedImage,
    currentIndex,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    goToNext,
    goToPrevious,
    goToImage,
  };
};