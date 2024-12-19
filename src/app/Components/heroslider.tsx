
"use client";
import { useState, useEffect } from "react";



const HeroSlider: React.FC = () => {
  const images: string[] = [
    "/S1.png",
    "/S2.png",
    "/S3.png",
    "/S4.png",

  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute mt-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-[100px] h-[5px] rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-gray-500 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;


