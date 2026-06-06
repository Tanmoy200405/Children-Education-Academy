import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Palette, Trophy, Users } from 'lucide-react';
import photo8 from '../../assets/photo8.jpg';
import photo9 from '../../assets/photo9.jpg';
import photo10 from '../../assets/photo10.jpg';
import photo11 from '../../assets/photo11.jpg';

const activities = [
  {
    title: 'Creative Arts',
    desc: 'Art, music, and performance programs that help students express ideas with confidence.',
    image: photo8,
    icon: Palette,
  },
  {
    title: 'Sports & Fitness',
    desc: 'Structured physical activities that build discipline, teamwork, and healthy habits.',
    image: photo9,
    icon: Trophy,
  },
  {
    title: 'Clubs & Events',
    desc: 'Student-led clubs and celebrations that create friendships beyond the classroom.',
    image: photo10,
    icon: Users,
  },
  {
    title: 'Performing Skills',
    desc: 'Stage activities, assemblies, and cultural programs that grow communication skills.',
    image: photo11,
    icon: Music,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const StudentActivities = () => {
  return (
    <section className='relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24'>
      <div className='absolute left-[-140px] top-10 h-[320px] w-[320px] rounded-full bg-[var(--accent)]/10 blur-[100px]' />
      <div className='absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/10 blur-[120px]' />

      <div className='relative z-10 mx-auto max-w-[1400px] px-6 lg:px-[80px]'>
        <div className='mb-12 flex flex-col items-center text-center lg:mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='mb-4 flex items-center gap-3'
          >
            <span className='h-[2px] w-8 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]' />
            <h3 className='text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]'>
              Beyond Classrooms
            </h3>
            <span className='h-[2px] w-8 bg-gradient-to-l from-[var(--accent)] to-[var(--primary)]' />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className='max-w-[720px] text-[32px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[42px] lg:text-[56px]'
          >
            Life at CEA is Active, Creative, and Connected
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className='my-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]'
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className='max-w-[680px] text-base font-medium leading-8 text-[var(--text-secondary)] sm:text-lg'
          >
            Students discover confidence, teamwork, creativity, and leadership through activities that make school life memorable.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {activities.map((activity, index) => (
            <motion.article
              key={activity.title}
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              className='group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(20,184,166,0.16)]'
            >
              <div className='relative aspect-[4/3] overflow-hidden'>
                <img
                  src={activity.image}
                  alt={activity.title}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-108'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/55 via-transparent to-transparent opacity-80' />
                <div className='absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/90 shadow-lg backdrop-blur-sm'>
                  <activity.icon size={22} className='text-[var(--primary)]' />
                </div>
              </div>

              <div className='flex flex-1 flex-col p-6'>
                <h3 className='mb-3 text-[22px] font-extrabold text-[var(--primary-dark)] transition-colors duration-300 group-hover:text-[var(--primary)]'>
                  {activity.title}
                </h3>
                <p className='mb-6 flex-1 text-[15px] font-medium leading-7 text-[var(--text-secondary)]'>
                  {activity.desc}
                </p>
                <Link to="/gallery" className='group/link flex w-fit items-center gap-2 text-sm font-bold text-[var(--accent)]'>
                  Explore More
                  <ArrowRight size={16} className='transition-transform duration-300 group-hover/link:translate-x-1' />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentActivities;
