import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star } from 'lucide-react';
import photo2 from '../../assets/photo2.jpg';
import photo10 from '../../assets/photo10.jpg';
import photo21 from '../../assets/photo21.jpg';

const testimonials = [
  {
    name: 'Priya Sharma',
    designation: 'Parent of Grade VI Student',
    image: photo2,
    review: 'CEA gives my child the right mix of discipline, warmth, and confidence. The teachers are approachable and genuinely caring.',
  },
  {
    name: 'Ananya Das',
    designation: 'Student, Grade X',
    image: photo21,
    review: 'I enjoy school because learning feels active here. Activities, projects, and events have helped me become more confident.',
  },
  {
    name: 'Rahul Mehta',
    designation: 'Parent of Grade III Student',
    image: photo10,
    review: 'The campus feels safe, organized, and positive. We have seen strong improvement in both academics and communication.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-[1400px] px-6 lg:px-[80px]'>
        <div className='mx-auto mb-12 max-w-[760px] text-center'>
          <span className='text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]'>
            Testimonials
          </span>
          <h2 className='mt-3 text-[32px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[42px] lg:text-[54px]'>
            Loved by Parents and Students
          </h2>
        </div>

        <div className='mx-auto max-w-[900px]'>
          <AnimatePresence mode='wait'>
            <motion.article
              key={testimonials[active].name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className='rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-10'
            >
              <div className='mb-6 flex gap-1 text-yellow-400'>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={20} fill='currentColor' />
                ))}
              </div>
              <p className='text-xl font-semibold leading-9 text-[var(--primary-dark)] sm:text-2xl'>
                "{testimonials[active].review}"
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className='h-16 w-16 rounded-full object-cover'
                />
                <div>
                  <h3 className='text-lg font-extrabold text-[var(--primary-dark)]'>
                    {testimonials[active].name}
                  </h3>
                  <p className='text-sm font-semibold text-[var(--text-secondary)]'>
                    {testimonials[active].designation}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className='mt-7 flex justify-center gap-2'>
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type='button'
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === index ? 'w-9 bg-[var(--accent)]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
