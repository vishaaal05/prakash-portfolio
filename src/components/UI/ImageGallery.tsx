import { useEffect } from 'react';

const ImageGallery = ({ images, category, onImageClick }) => {
  useEffect(() => {
    console.log(`Rendering ImageGallery for category ${category} with ${images.length} images:`, images);
  }, [images, category]);

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
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="break-inside-avoid cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
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
              onError={() => console.error(`Failed to load image: ${image.url}`)}
            />
          </div>
        ))}
      </div>

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