// pages/Fashion/Fashion.tsx
import React from 'react';
import ImageGallery from '../../components/UI/ImageGallery';
import Lightbox from './../../components/UI/LightBox';
import { portfolioData } from '../../data/portfolioData';
import { useImageGallery } from '../../hooks/useImageGallery';
import { type PageProps } from '../../types';

// eslint-disable-next-line no-empty-pattern
const Fashion: React.FC<PageProps> = ({ }) => {
  const fashionImages = portfolioData.Fashion;
  const {
    selectedImage,
    currentIndex,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    goToNext,
    goToPrevious,
  } = useImageGallery(fashionImages);

  return (
    <>
      <ImageGallery
        images={fashionImages}
        category="Fashion"
        onImageClick={openLightbox}
      />
      
      <Lightbox
        isOpen={isLightboxOpen}
        currentImage={selectedImage}
        currentIndex={currentIndex}
        images={fashionImages}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </>
  );
};

export default Fashion;