import { useState, useEffect } from "react";
import Banner1 from "/public/assets/banner_1.png";

const banners = [Banner1, Banner1, Banner1]; // Replace with real images

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentBanner = banners[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative w-full max-w-1/2 object-cover min-h-screen overflow-hidden">
      {/* Navigation Arrows */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center p-4 z-20">
        <button
          onClick={goToPrev}
          className="text-white text-2xl bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          &larr;
        </button>
        <button
          onClick={goToNext}
          className="text-white text-2xl bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          &rarr;
        </button>
      </div>

      {/* Blurred Background */}
      <img
        src={currentBanner}
        alt="Cake Banner Background"
        className={`absolute inset-0 w-full h-full object-cover blur-md brightness-90 scale-110 transition-opacity duration-500 ${
          isTransitioning ? "opacity-70" : "opacity-100"
        }`}
      />

      {/* Foreground Image */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <img
          src={currentBanner}
          alt="Featured cake"
          className={`rounded-2xl shadow-2xl max-h-[80%] object-contain border-4 border-white transition-all duration-500 ${
            isTransitioning ? "opacity-70 scale-95" : "opacity-100 scale-100"
          }`}
        />
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-yellow-500 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
