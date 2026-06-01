import { motion } from 'framer-motion';
import { Camera, Droplets, HeartPulse, Lightbulb, Medal, Shield, Sparkles, UsersRound } from 'lucide-react';

const features = [
  {
    title: 'Modern Pedagogy',
    text: 'CEA creates a teaching-learning environment rooted in the belief that education manifests the perfection already present in every child.',
    icon: Lightbulb,
  },
  {
    title: 'Independent Learning Model',
    text: 'Teachers act as preceptors, encouraging students to self-monitor, collaborate, and set personal learning goals.',
    icon: Sparkles,
  },
  {
    title: 'Erudite Faculty',
    text: 'Experienced and competent teachers ensure individual attention and steady guidance for every learner.',
    icon: UsersRound,
  },
  {
    title: 'Extracurricular Engagement',
    text: 'Inter-school and inter-house competitions help students become responsible, expressive, and future-ready.',
    icon: Medal,
  },
  {
    title: 'Health and Hygiene',
    text: 'Annual medical check-ups, health cards, hygiene guidance, and workshops support student well-being.',
    icon: HeartPulse,
  },
  {
    title: 'Safe Water and Food',
    text: 'Potable drinking water and a hygienic canteen serving healthy vegetarian food support daily care.',
    icon: Droplets,
  },
  {
    title: 'Surveillance',
    text: 'The campus is monitored through CCTV, with safety supported in transport through GPS, CCTV, and RFID cards.',
    icon: Camera,
  },
  {
    title: 'Controlled Access',
    text: 'Security guards monitor entry, visitors are logged, and parents use escort cards for student pickup.',
    icon: Shield,
  },
];

export default function HolisticFeatures() {
  return (
    <section className='bg-[#F8FAFC] px-6 py-16 sm:py-20 lg:px-[80px] lg:py-24'>
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className='group rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(20,184,166,0.14)]'
            >
              <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/14 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110'>
                <feature.icon size={23} />
              </div>
              <h3 className='mb-3 text-xl font-extrabold text-[var(--primary-dark)]'>
                {feature.title}
              </h3>
              <p className='text-[14.5px] font-medium leading-7 text-[var(--text-secondary)]'>
                {feature.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
