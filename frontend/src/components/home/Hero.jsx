import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../layout/Navbar';
import heroImage from '../../assets/heroimg.jpeg';

const assets = {
  heroImage,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const trustItems = [
  'Smart Classrooms',
  'Experienced Faculty',
  'Safe Campus',
  'Holistic Learning',
];

const Hero = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[var(--primary-dark)]'>
      <Navbar />

      <main className='relative min-h-screen w-full px-5 pt-[120px] pb-[70px] sm:px-8 sm:pt-[130px] sm:pb-[80px] lg:px-[60px] lg:pt-[150px] lg:pb-[100px]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(31,199,212,0.24),transparent_32%),radial-gradient(circle_at_84%_22%,rgba(184,243,247,0.14),transparent_30%),linear-gradient(135deg,var(--primary-dark)_0%,var(--primary)_58%,var(--primary-dark)_100%)]' />
        <div className='absolute left-[-120px] top-[18%] h-[320px] w-[320px] rounded-full bg-[var(--accent)]/15 blur-[90px]' />
        <div className='absolute right-[-100px] bottom-[10%] h-[380px] w-[380px] rounded-full bg-white/10 blur-[100px]' />
        <div className='absolute left-[48%] top-[18%] h-20 w-20 rotate-12 rounded-[28px] border border-white/10 bg-white/5' />
        <div className='absolute right-[8%] top-[34%] h-28 w-28 rounded-full border border-[var(--accent-light)]/20 bg-[var(--accent-light)]/5' />
        <div className='absolute bottom-[18%] left-[8%] h-16 w-16 -rotate-12 rounded-[20px] border border-white/10 bg-white/5' />

        <div className='relative z-10 mx-auto flex min-h-[calc(100vh-200px)] max-w-[1400px] flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16'>
          {/* Hero Left */}
          <motion.div
            variants={staggerGroup}
            initial='hidden'
            animate='visible'
            className='flex w-full flex-col items-start gap-6 text-left lg:w-[52%]'
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='w-fit rounded-full border border-[var(--accent-light)]/45 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_28px_rgba(31,199,212,0.18)] backdrop-blur-md sm:text-base'
            >
              Welcome to CEA
            </motion.h2>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='max-w-[600px] space-y-1'
            >
              <h1 className='text-[42px] font-black leading-[1.03] text-white sm:text-[56px] lg:text-[68px] xl:text-[78px]'>
                Where Learning
              </h1>
              <h1 className='text-[42px] font-black leading-[1.03] text-white sm:text-[56px] lg:text-[68px] xl:text-[78px]'>
                Meets{' '}
                <span className='bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] bg-clip-text text-transparent'>
                  Happiness.
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='max-w-[600px] text-base font-medium leading-8 text-white/84 sm:text-lg lg:text-xl'
            >
              We nurture minds with quality education, values and holistic development for a brighter tomorrow.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='flex w-full flex-col gap-4 pt-1 sm:w-auto sm:flex-row'
            >
              <button className='group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] px-8 py-4 text-base font-bold text-[var(--primary-dark)] shadow-[0_16px_34px_rgba(31,199,212,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(31,199,212,0.34)] sm:w-auto'>
                Explore Academics
                <ArrowRight size={18} className='transition-transform duration-300 group-hover:translate-x-1' />
              </button>

              <button className='w-full rounded-full border border-white/45 bg-white/10 px-8 py-4 text-base font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[var(--primary-dark)] sm:w-auto'>
                Book Campus Tour
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='flex max-w-[620px] flex-wrap gap-3 pt-2'
            >
              {trustItems.map((item) => (
                <div
                  key={item}
                  className='group flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-white/86 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:bg-white/14 hover:text-white'
                >
                  <CheckCircle2 size={16} className='text-[var(--accent)] transition-transform duration-300 group-hover:scale-110' />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Right */}
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className='flex w-full justify-center lg:w-[48%] lg:justify-end'
          >
            <div className='group relative w-full max-w-[430px] rounded-[24px] border border-white/16 bg-white/10 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-md sm:max-w-[560px] lg:max-w-[700px]'>
              <div className='absolute -inset-4 rounded-[32px] bg-[var(--accent)]/16 blur-2xl transition-opacity duration-300 group-hover:opacity-80' />
              <div className='relative overflow-hidden rounded-[24px] bg-white/8'>
                <img
                  src={assets.heroImage}
                  alt='Students learning happily at Children Education Academy'
                  className='h-auto max-h-[460px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.025] sm:max-h-[540px] lg:max-h-[calc(100vh-220px)]'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
