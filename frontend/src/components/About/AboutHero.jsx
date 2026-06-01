import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import photo4 from '../../assets/photo4.jpg';

export default function AboutHero() {
  return (
    <section id='school-profile' className='relative overflow-hidden bg-[var(--primary-dark)] px-6 pb-16 pt-[130px] sm:pt-[150px] lg:px-[80px] lg:pb-24'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(31,199,212,0.24),transparent_34%),linear-gradient(135deg,var(--primary-dark),var(--primary)_58%,var(--primary-dark))]' />
      <div className='absolute right-[-140px] top-[16%] h-[360px] w-[360px] rounded-full bg-[var(--accent)]/15 blur-[120px]' />
      <div className='absolute bottom-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-white/10 blur-[130px]' />

      <div className='relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className='mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-[var(--accent-light)] backdrop-blur-md'>
            <Sparkles size={16} />
            About Children Education Academy
          </span>

          <h1 className='max-w-[760px] text-[42px] font-black leading-[1.05] text-white sm:text-[56px] lg:text-[72px]'>
            A Value-Based ICSE School in Maheshtala, Kolkata
          </h1>

          <p className='mt-6 max-w-[760px] text-base font-medium leading-8 text-white/84 sm:text-lg'>
            Children Education Academy is a co-educational ICSE secondary school in Maheshtala, Kolkata, established in 2012. The school offers an NEP-aligned curriculum from Nursery, LKG and UKG to Class X, with ISC classes XI and XII in Science, Commerce and Humanities.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <div className='flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-5 py-4 text-white backdrop-blur-md'>
              <GraduationCap size={22} className='text-[var(--accent)]' />
              <span className='text-sm font-bold'>ICSE and ISC Curriculum</span>
            </div>
            <div className='flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-5 py-4 text-white backdrop-blur-md'>
              <MapPin size={22} className='text-[var(--accent)]' />
              <span className='text-sm font-bold'>Memanpur, Maheshtala</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
          className='relative'
        >
          <div className='absolute -inset-5 rounded-[36px] bg-[var(--accent)]/18 blur-2xl' />
          <div className='relative overflow-hidden rounded-[32px] border border-white/16 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur-md'>
            <img
              src={photo4}
              alt='Children Education Academy students'
              className='h-[360px] w-full rounded-[24px] object-cover sm:h-[460px] lg:h-[540px]'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
