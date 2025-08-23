// pages/Home/Home.tsx
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { type PageProps } from '../../types';

// custom hook
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};


const Home: React.FC<PageProps> = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Desktop featured images
  const featuredImagesDesktop = [
  {
    "id": "fashion-2",
    "url": "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto/v1755430106/DSC01084._final_copy._w_msh8m9.jpg",
    "alt": "Fashion Photography 2",
    "category": "Fashion"
  },
  // {
  //   "id": "fashion-3",
  //   "url": "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto/v1755430112/2_c5vait.jpg",
  //   "alt": "Fashion Photography 3",
  //   "category": "Fashion"
  // },
  {
    "id": "fashion-4",
    "url": "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto/v1755430119/DSC06342.jpg_final_rp9yv1.jpg",
    "alt": "Fashion Photography 4",
    "category": "Fashion"
  },
  {
    "id": "fashion-5",
    "url": "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto/v1755430099/DSC04479_copy._final_vaxxqs.jpg",
    "alt": "Fashion Photography 5",
    "category": "Fashion"
  },
  {
    "id": "fashion-6",
    "url": "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto/v1755430089/DSC04716_copy._final._mm_hftnbt.jpg",
    "alt": "Fashion Photography 6",
    "category": "Fashion"
  },
  {
    "id": "fashion-7",
    "url": "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto/v1755430173/DSC06812._final_2_csonwe.jpg",
    "alt": "Fashion Photography 7",
    "category": "Fashion"
  },
    {
    "id": "fashion-8",
    "url": "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto/v1755430128/_MG_0239_ff_lxv5ve.jpg",
    "alt": "Fashion Photography 8",
    "category": "Fashion"
  }
]


  // Mobile-specific images 
  const featuredImagesMobile = [
    {
      id: "fashion-mobile",
      url: "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto,w_800/v1755793448/02_copy_1_jqr2jr.jpg",
      alt: "Fashion Photography Mobile",
    },
    {
      id: "product-mobile",
      url: "https://res.cloudinary.com/dnr47u7im/image/upload/v1755196364/portfolio/Product/compressed_85.jpg",
      alt: "Product Photography Mobile",
    },
    {
      id: "ecommerce-mobile",
      url: "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto,w_800/v1755196360/portfolio/Product/compressed_82.jpg",
      alt: "Ecommerce Photography Mobile",
    },
      {
      id: "ecommerce-mobile",
      url: "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto,w_800/v1755793446/11_1_brvyui.jpg",
      alt: "Ecommerce Photography Mobile",
    },
      {
      id: "ecommerce-mobile",
      url: "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto,w_800/v1755793445/8_1_jbuvqd.jpg",
      alt: "Ecommerce Photography Mobile",
    },
      {
      id: "ecommerce-mobile",
      url: "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto,w_800/v1755793442/3_1_iy4q7v.jpg",
      alt: "Ecommerce Photography Mobile",
    },  {
      id: "ecommerce-mobile",
      url: "https://res.cloudinary.com/dnr47u7im/image/upload/q_auto,f_auto,w_800/v1755196362/portfolio/Product/compressed_83.jpg",
      alt: "Ecommerce Photography Mobile",
    },
  ];

  // check if screen <= 768px (mobile)
  const isMobile = useMediaQuery("(max-width: 768px)");

  const featuredImages = isMobile ? featuredImagesMobile : featuredImagesDesktop;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredImages.length]);

  const scrollToPortfolio = () => {
    document.getElementById('featured-work')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleNavigate = (path: string) => {
    // Ensure the path has a leading slash
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    onNavigate(normalizedPath);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {featuredImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full ${
                  isMobile ? ' h-full object-cover' : ' h-auto object-contain'
                }`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Pearl Creation
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Professional Photography
            </p>
            <p className="text-lg mb-10 text-gray-200 max-w-2xl mx-auto font-light">
              Capturing moments that tell stories. Specializing in fashion, product, 
              and e-commerce photography with a creative vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button 
                onClick={scrollToPortfolio}
                className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                View Portfolio
              </button> */}
              <button 
                onClick={() => handleNavigate('/contact')}
                className="border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToPortfolio}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-8">Featured Work</h2>
            <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my portfolio showcasing fashion, product, and e-commerce photography
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fashion Category */}
            <div 
              className="group cursor-pointer"
              onClick={() => handleNavigate('/fashion')}
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={portfolioData.Fashion[0]?.url}
                  alt="Fashion Photography"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Fashion</h3>
              <p className="text-gray-600">
                Editorial and commercial fashion photography
              </p>
            </div>

            {/* Product Category */}
            <div 
              className="group cursor-pointer"
              onClick={() => handleNavigate('/product')}
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={portfolioData.Product[0]?.url}
                  alt="Product Photography"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Product</h3>
              <p className="text-gray-600">
                Professional product photography for brands
              </p>
            </div>

            {/* Ecommerce Category */}
            <div 
              className="group cursor-pointer"
              onClick={() => handleNavigate('/ecommerce')}
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={portfolioData.Ecommerce[1]?.url}
                  alt="Ecommerce Photography"
                  className="w-full h-auto object-contain  transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">E-commerce</h3>
              <p className="text-gray-600">
                High-converting e-commerce product images
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-gray-800 mb-8">About</h2>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm a passionate photographer specializing in creating compelling visual content 
            for brands and businesses. With expertise in fashion, product, and e-commerce photography, 
            I help bring your vision to life through stunning imagery.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            My approach combines technical excellence with creative storytelling, 
            ensuring each image not only looks beautiful but also serves your business goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;