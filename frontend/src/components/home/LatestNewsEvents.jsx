import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import photo15 from '../../assets/photo15.jpg';
import photo18 from '../../assets/photo18.jpg';
import photo20 from '../../assets/photo20.jpg';

const news = [
  {
    title: 'Annual Sports Day',
    date: 'January 18, 2026',
    desc: 'Students showcased teamwork, discipline, and energetic sportsmanship across exciting events.',
    image: photo15,
  },
  {
    title: 'Science Exhibition',
    date: 'February 07, 2026',
    desc: 'Young innovators presented thoughtful projects, experiments, and creative problem-solving ideas.',
    image: photo18,
  },
  {
    title: 'Cultural Program',
    date: 'March 12, 2026',
    desc: 'A vibrant celebration of music, dance, drama, and student confidence on stage.',
    image: photo20,
  },
];

export default function LatestNewsEvents() {
  return (
    <section className='bg-[#F8FAFC] py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-[1400px] px-6 lg:px-[80px]'>
        <div className='mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between'>
          <div>
            <span className='text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]'>
              Latest News & Events
            </span>
            <h2 className='mt-3 max-w-[640px] text-[32px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[42px] lg:text-[54px]'>
              What Is Happening at CEA
            </h2>
          </div>
          <button className='group flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-white px-6 py-3 text-sm font-bold text-[var(--primary)] shadow-[0_12px_28px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1'>
            View All
            <ArrowRight size={16} className='transition-transform duration-300 group-hover:translate-x-1' />
          </button>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className='group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_14px_42px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(20,184,166,0.14)]'
            >
              <div className='aspect-[4/3] overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]'
                />
              </div>
              <div className='p-6'>
                <div className='mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)]'>
                  <CalendarDays size={16} className='text-[var(--accent)]' />
                  {item.date}
                </div>
                <h3 className='mb-3 text-[22px] font-extrabold text-[var(--primary-dark)]'>
                  {item.title}
                </h3>
                <p className='mb-6 text-[15px] font-medium leading-7 text-[var(--text-secondary)]'>
                  {item.desc}
                </p>
                <button className='group/link flex items-center gap-2 text-sm font-bold text-[var(--accent)]'>
                  Read More
                  <ArrowRight size={16} className='transition-transform duration-300 group-hover/link:translate-x-1' />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
