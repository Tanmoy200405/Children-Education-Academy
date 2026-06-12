import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import photo3 from '../../assets/photo3.jpg';
import photo6 from '../../assets/photo6.jpg';
import photo4 from '../../assets/photo4.jpg';
import photo16 from '../../assets/photo16.jpg';
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';

const photos = [
  { src: photo3, alt: 'Campus moment 1' },
  { src: photo6, alt: 'Campus moment 2' },
  { src: photo4, alt: 'Campus moment 3' },
  { src: photo16, alt: 'Campus moment 4' },
  { src: photo1, alt: 'Campus moment 5' },
  { src: photo2, alt: 'Campus moment 6' },
];

export default function CampusMomentsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // Auto slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <section className='bg-white py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-[1400px] px-6 lg:px-[80px]'>
        <div className='mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between'>
          <div>
            <span className='text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]'>
              Campus Moments
            </span>
            <h2 className='mt-3 max-w-[640px] text-[32px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[42px] lg:text-[54px]'>
              Everyday Joy, Learning, and Discovery
            </h2>
          </div>
          <p className='max-w-[460px] text-base font-medium leading-8 text-[var(--text-secondary)]'>
            A glimpse into the active, creative, and cheerful life students experience at CEA.
          </p>
        </div>

        <div className='relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_14px_40px_rgba(15,23,42,0.08)] group'>
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='absolute inset-0 h-full w-full object-cover'
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-[var(--primary-dark)] backdrop-blur-sm transition-all hover:bg-white hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100 duration-300'
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-[var(--primary-dark)] backdrop-blur-sm transition-all hover:bg-white hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100 duration-300'
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className='absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 z-10'>
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
