// pages/Product/Product.tsx
import React from 'react';
import ImageGallery from '../../components/UI/ImageGallery';
import Lightbox from '../../components/UI/LightBox';
import { portfolioData } from '../../data/portfolioData';
import { useImageGallery } from '../../hooks/useImageGallery';
import type { PageProps } from '../../types';

// eslint-disable-next-line no-empty-pattern
const Product: React.FC<PageProps> = ({ }) => {
  const productImages = portfolioData.Product;
  const {
    selectedImage,
    currentIndex,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    goToNext,
    goToPrevious,
  } = useImageGallery(productImages);

  return (
    <>
      <ImageGallery
        images={productImages}
        category="Product"
        onImageClick={openLightbox}
      />
      
      <Lightbox
        isOpen={isLightboxOpen}
        currentImage={selectedImage}
        currentIndex={currentIndex}
        images={productImages}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </>
  );
};

export default Product;