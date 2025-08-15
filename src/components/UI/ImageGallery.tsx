import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import type { ImageData } from "../../types";

type ImageGalleryProps = {
  images: ImageData[];
  category: string;
  onImageClick: (image: ImageData, index: number) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  category,
  onImageClick,
}) => {
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading state when component mounts or images change
    setIsLoading(true);

    // Use a small timeout to allow for transition effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [images]);

  // Masonry responsive breakpoints
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-gray-800 mb-4">
          {category} Photography
        </h2>
        <div className="w-24 h-px bg-gray-300 mx-auto"></div>
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName=""
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="mb-6 cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            onClick={() => {
              console.log(`Clicked image: ${image.id}, index: ${index}`);
              onImageClick(image, index);
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
              onError={() =>
                console.error(`Failed to load image: ${image.url}`)
              }
            />
          </div>
        ))}
      </Masonry>

      {images.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No images available in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
