// components/UI/Lightbox.tsx
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { LightboxProps } from '../../types';

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentImage,
  currentIndex,
  images,
  onClose,
  onNext,
  onPrevious,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentImage) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 text-white hover:text-gray-300 z-10 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={onPrevious}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </button>
      )}

      {/* Image Container */}
      <div className="w-full h-full px-10 sm:px-14 md:px-20 py-14 sm:py-16 md:py-20 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={currentImage.url}
            alt={currentImage.alt || "Gallery image"}
            className="max-w-full max-h-full w-auto h-auto object-contain"
            style={{
              maxHeight: 'calc(100vh - 120px)',
              maxWidth: 'calc(100vw - 60px)',
            }}
          />
        </div>
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm bg-black bg-opacity-50 px-2 sm:px-3 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default Lightbox;