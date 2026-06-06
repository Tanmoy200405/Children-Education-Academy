import { motion } from 'framer-motion';
import { CheckCircle2, Eye, Target } from 'lucide-react';

const mission = [
  'Realize their full potential in curricular and co-curricular activities.',
  'Uphold integrity and ethics.',
  'Cultivate a spirit of inquiry and ingenuity.',
  'Boost self-confidence and self-discipline.',
  'Inculcate the 21st century life skills enabling them to face the world with fortitude.',
  'Transform the student into a responsible citizen and environmentally aware.',
];

const vision = [
  'CEA believes in imparting knowledge/values and nurturing the talent, enthusiasm and creativity of its students for seeking excellence through high-quality educational endeavours.',
  'To cater to the educational needs of children by providing a common programme of education.',
  'To pursue excellence and set the pace in the field of school education.',
  'To initiate and promote experimentation and innovations in education in collaboration with other bodies like CBSE and NCERT.',
  'To develop the spirit of national integration and create a sense of Indianness among children.',
  'To provide, establish, endow, maintain, control and manage our school for the children and do all acts and things necessary for providing a conducive atmosphere in schools.',
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
        {items.map((item, index) => (
          <div key={index} className='flex gap-3'>
            <CheckCircle2 size={19} className='mt-1 shrink-0 text-[var(--accent-light)]' />
            <p className='text-[14px] sm:text-[15px] font-medium leading-7 text-white/84'>{item}</p>
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
            Creating a Peaceful, Stimulating, and Future-Ready Environment
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
