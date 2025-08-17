import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Slider images with alt text for accessibility
  const slides = [
    {
      image: 'https://i.imgur.com/dfuKIC8.png',
      alt: 'MAKIVA International Holdings logistics operations'
    },
    {
      image: 'https://i.imgur.com/bI8KsZQ.jpeg',
      alt: 'Professional supply chain management services'
    },
    {
      image: 'https://i.imgur.com/svPDwKY.jpeg',
      alt: 'Nationwide delivery and logistics solutions'
    }
  ];

  // Auto-play functionality with 5-second intervals
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(newSlide);
  };

  const goToNext = () => {
    const newSlide = (currentSlide + 1) % slides.length;
    goToSlide(newSlide);
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Hero slider"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Light blue overlay for text readability */}
            <div className="absolute inset-0 bg-blue-400 bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/80"></div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-400 scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
            Your Reliable Supply & 
            <span className="text-yellow-400"> Delivery Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light text-shadow">
            Nationwide coverage with over 11 years of industry excellence
          </p>
          <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto text-shadow">
            MAKIVA International Holdings delivers comprehensive logistics solutions 
            across South Africa with B-BBEE Level 1 recognition and unmatched reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get a Quote</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-800/50 backdrop-blur-sm p-4 rounded-full border border-white/20">
                <Shield size={32} className="text-yellow-400" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-shadow">B-BBEE Level 1</h3>
                <p className="text-blue-200 text-sm">Certified Recognition</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-800/50 backdrop-blur-sm p-4 rounded-full border border-white/20">
                <Clock size={32} className="text-yellow-400" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-shadow">11+ Years</h3>
                <p className="text-blue-200 text-sm">Industry Experience</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-800/50 backdrop-blur-sm p-4 rounded-full border border-white/20">
                <Users size={32} className="text-yellow-400" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-shadow">Nationwide</h3>
                <p className="text-blue-200 text-sm">Coverage & Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar for Auto-play */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-yellow-400 transition-all duration-100 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Hero;