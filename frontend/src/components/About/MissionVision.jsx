import { motion } from 'framer-motion';
import { CheckCircle2, Eye, Target } from 'lucide-react';

const mission = [
  'Realize full potential in curricular and co-curricular activities.',
  'Uphold integrity and ethics.',
  'Cultivate a spirit of inquiry and ingenuity.',
  'Boost self-confidence and self-discipline.',
  'Inculcate 21st century life skills to face the world with fortitude.',
  'Transform students into responsible and environmentally aware citizens.',
];

const vision = [
  'Impart knowledge and values while nurturing talent, enthusiasm and creativity.',
  'Provide a common programme of education for children.',
  'Pursue excellence and set the pace in school education.',
  'Promote experimentation and innovation in education.',
  'Develop national integration and a sense of Indianness among children.',
  'Provide and maintain a conducive atmosphere for learning.',
];

function ValueCard({ title, icon: Icon, items, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className='rounded-[30px] border border-white/12 bg-white/10 p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-md'
    >
      <div className='mb-6 flex items-center gap-4'>
        <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--primary-dark)]'>
          <Icon size={26} />
        </div>
        <h3 className='text-[28px] font-black'>{title}</h3>
      </div>
      <div className='space-y-4'>
        {items.map((item) => (
          <div key={item} className='flex gap-3'>
            <CheckCircle2 size={19} className='mt-1 shrink-0 text-[var(--accent-light)]' />
            <p className='text-[15px] font-medium leading-7 text-white/84'>{item}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default function MissionVision() {
  return (
    <section id='mission-vision' className='relative overflow-hidden bg-[var(--primary-dark)] px-6 py-16 sm:py-20 lg:px-[80px] lg:py-24'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(31,199,212,0.2),transparent_34%),radial-gradient(circle_at_88%_72%,rgba(184,243,247,0.14),transparent_30%)]' />
      <div className='relative z-10 mx-auto max-w-[1400px]'>
        <div className='mx-auto mb-12 max-w-[760px] text-center'>
          <span className='text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]'>
            Mission and Vision
          </span>
          <h2 className='mt-3 text-[32px] font-black leading-[1.1] text-white sm:text-[42px] lg:text-[54px]'>
            Creating a Peaceful, Stimulating, and Future-Ready Learning Environment
          </h2>
        </div>

        <div className='grid gap-6 lg:grid-cols-2'>
          <ValueCard title='Mission' icon={Target} items={mission} delay={0} />
          <ValueCard title='Vision' icon={Eye} items={vision} delay={0.08} />
        </div>
      </div>
    </section>
  );
}
