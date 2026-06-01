import { motion } from 'framer-motion';
import { BookOpenCheck, GraduationCap, HeartHandshake, Laptop, ShieldCheck, Waypoints } from 'lucide-react';

const reasons = [
  {
    title: 'Smart Classrooms',
    desc: 'Interactive learning spaces that make concepts clearer and more engaging.',
    icon: BookOpenCheck,
  },
  {
    title: 'Experienced Faculty',
    desc: 'Dedicated teachers who guide every child with care and academic focus.',
    icon: GraduationCap,
  },
  {
    title: 'Safe Campus',
    desc: 'A secure, attentive environment where students can learn with confidence.',
    icon: ShieldCheck,
  },
  {
    title: 'Holistic Development',
    desc: 'Balanced focus on academics, creativity, values, sports, and leadership.',
    icon: HeartHandshake,
  },
  {
    title: 'Career Guidance',
    desc: 'Mentoring that helps students understand strengths and future pathways.',
    icon: Waypoints,
  },
  {
    title: 'Digital Learning',
    desc: 'Modern tools and blended resources that support classroom learning.',
    icon: Laptop,
  },
];

export default function WhyParentsChooseUs() {
  return (
    <section className='relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24'>
      <div className='absolute right-[-160px] top-10 h-[360px] w-[360px] rounded-full bg-[var(--accent)]/10 blur-[120px]' />
      <div className='absolute bottom-[-180px] left-[-140px] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/10 blur-[130px]' />

      <div className='relative z-10 mx-auto max-w-[1400px] px-6 lg:px-[80px]'>
        <div className='mx-auto mb-12 max-w-[760px] text-center'>
          <span className='mb-4 inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--primary)]'>
            Why Parents Choose Us
          </span>
          <h2 className='text-[32px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[42px] lg:text-[54px]'>
            A School Built Around Trust, Care, and Progress
          </h2>
          <p className='mx-auto mt-5 max-w-[650px] text-base font-medium leading-8 text-[var(--text-secondary)] sm:text-lg'>
            Families choose CEA for a learning environment that combines strong academics with personal attention.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
              className='group rounded-[24px] border border-slate-100 bg-white p-7 shadow-[0_14px_42px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(20,184,166,0.16)]'
            >
              <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] text-[var(--primary-dark)] shadow-[0_14px_28px_rgba(31,199,212,0.24)] transition-transform duration-300 group-hover:scale-110'>
                <reason.icon size={25} />
              </div>
              <h3 className='mb-3 text-[22px] font-extrabold text-[var(--primary-dark)]'>
                {reason.title}
              </h3>
              <p className='text-[15px] font-medium leading-7 text-[var(--text-secondary)]'>
                {reason.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
