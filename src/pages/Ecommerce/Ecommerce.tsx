// pages/Ecommerce/Ecommerce.tsx
import React from 'react';
import ImageGallery from '../../components/UI/ImageGallery';
import Lightbox from '../../components/UI/LightBox';
import { portfolioData } from '../../data/portfolioData';
import { useImageGallery } from '../../hooks/useImageGallery';
import type { PageProps } from '../../types';

// eslint-disable-next-line no-empty-pattern
const Ecommerce: React.FC<PageProps> = ({ }) => {
  const ecommerceImages = portfolioData.Ecommerce;
  const {
    selectedImage,
    currentIndex,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    goToNext,
    goToPrevious,
  } = useImageGallery(ecommerceImages);

  return (
    <>
      <ImageGallery
        images={ecommerceImages}
        category="Ecommerce"
        onImageClick={openLightbox}
      />
      
      <Lightbox
        isOpen={isLightboxOpen}
        currentImage={selectedImage}
        currentIndex={currentIndex}
        images={ecommerceImages}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </>
  );
};

export default Ecommerce;