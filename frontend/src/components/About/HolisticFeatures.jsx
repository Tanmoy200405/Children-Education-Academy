import { motion } from 'framer-motion';
import { Camera, Droplets, HeartPulse, Lightbulb, Medal, Shield, Sparkles, UsersRound, BookHeart, SmilePlus } from 'lucide-react';

const features = [
  {
    title: 'Modern Pedagogy',
    text: 'Established in 2012, CEA aims to create a teaching learning environment for the school believes that education is the manifestation of perfection present in man.',
    icon: Lightbulb,
  },
  {
    title: 'Independent Learning Model',
    text: 'Teachers act as preceptors, encouraging students to self-monitor, collaborate with peers on group tasks and set personal learning goals.',
    icon: Sparkles,
  },
  {
    title: 'Erudite Faculty',
    text: 'The school features a talented team of experienced and competent teachers and maintains a student to teacher ratio ensuring individual attention.',
    icon: UsersRound,
  },
  {
    title: 'Extracurricular Engagement',
    text: 'Active participation in inter-school competitions and inter-house competitions contributes to making the students responsible and future-ready.',
    icon: Medal,
  },
  {
    title: 'Value-Based Education',
    text: 'Each day begins with morning assemblies and includes regular value education classes to inculcate honesty, empathy and social responsibility.',
    icon: BookHeart,
  },
  {
    title: 'Health Tracking',
    text: 'Annual medical check-ups are conducted for every student and a Health Card is issued annually to keep parents informed of their physical well-being.',
    icon: HeartPulse,
  },
  {
    title: 'Personal Hygiene',
    text: 'Students are regularly educated on personal hygiene. The school also conducts specialized workshops on various topics like positive habits, Menstrual Hygiene, etc.',
    icon: SmilePlus,
  },
  {
    title: 'Safe Water & Food',
    text: 'The school provides potable drinking water and a hygienic canteen that serves healthy and nutritious vegetarian food.',
    icon: Droplets,
  },
  {
    title: 'Surveillance',
    text: 'The campus is under 24×7 CCTV monitoring. Safety is also ensured in the bus service through GPS tracking, CCTV cameras and RFID cards.',
    icon: Camera,
  },
  {
    title: 'Controlled Access',
    text: 'Entry is strictly monitored by security guards. Visitors are logged and parents are required to carry an Escort Card for student pickup.',
    icon: Shield,
  },
];

export default function HolisticFeatures() {
  return (
    <section id='faculty' className='bg-[#F8FAFC] px-6 py-16 sm:py-20 lg:px-[80px] lg:py-24'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='mx-auto mb-12 max-w-[760px] text-center'>
          <span className='text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]'>
            Holistic Features
          </span>
          <h2 className='mt-3 text-[32px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[42px] lg:text-[54px]'>
            Facilities and Practices That Support the Whole Child
          </h2>
          <p className='mx-auto mt-5 max-w-[650px] text-base font-medium leading-8 text-[var(--text-secondary)] sm:text-lg'>
            From academics to health, safety, discipline, and creativity, CEA focuses on complete student development.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className='group rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(20,184,166,0.14)] flex flex-col'
            >
              <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/14 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110'>
                <feature.icon size={23} />
              </div>
              <h3 className='mb-3 text-[19px] font-extrabold text-[var(--primary-dark)]'>
                {feature.title}
              </h3>
              <p className='text-[14.5px] font-medium leading-7 text-[var(--text-secondary)] flex-grow'>
                {feature.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
