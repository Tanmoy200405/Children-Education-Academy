import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import photo12 from '../../assets/photo12.jpg';
import photo13 from '../../assets/photo13.jpg';
import photo15 from '../../assets/photo15.jpg';
import photo16 from '../../assets/photo16.jpg';
import photo17 from '../../assets/photo17.jpg';
import photo18 from '../../assets/photo18.jpg';
import photo19 from '../../assets/photo19.jpg';
import photo20 from '../../assets/photo20.jpg';

const photos = [
  { src: photo12, alt: 'Campus moment 1', span: 'md:row-span-2' },
  { src: photo13, alt: 'Campus moment 2', span: '' },
  { src: photo15, alt: 'Campus moment 3', span: '' },
  { src: photo16, alt: 'Campus moment 4', span: 'md:row-span-2' },
  { src: photo17, alt: 'Campus moment 5', span: '' },
  { src: photo18, alt: 'Campus moment 6', span: '' },
  { src: photo19, alt: 'Campus moment 7', span: '' },
  { src: photo20, alt: 'Campus moment 8', span: '' },
];

export default function CampusMomentsGallery() {
  const [activePhoto, setActivePhoto] = useState(null);

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

        <div className='grid auto-rows-[190px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {photos.map((photo, index) => (
            <motion.button
              key={photo.src}
              type='button'
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              onClick={() => setActivePhoto(photo)}
              className={`group relative overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_14px_40px_rgba(15,23,42,0.08)] ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]'
              />
              <div className='absolute inset-0 bg-[var(--primary-dark)]/0 transition-colors duration-300 group-hover:bg-[var(--primary-dark)]/18' />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm'
            onClick={() => setActivePhoto(null)}
          >
            <button
              type='button'
              aria-label='Close gallery image'
              className='absolute right-5 top-5 rounded-full bg-white p-3 text-[var(--primary-dark)] shadow-lg'
              onClick={() => setActivePhoto(null)}
            >
              <X size={22} />
            </button>
            <motion.img
              src={activePhoto.src}
              alt={activePhoto.alt}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className='max-h-[86vh] max-w-[92vw] rounded-[24px] object-contain shadow-2xl'
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
