import { motion } from 'framer-motion';
import { Award, BookOpenCheck, UserRoundCheck } from 'lucide-react';

const leaders = [
  {
    name: 'Mr. S. Yaser Ahmed',
    role: 'President and Founder Principal',
    text: 'He is committed to academic excellence, innovation, and value-based learning that prepares students for modern life.',
    icon: Award,
  },
  {
    name: 'Mrs. Sufia Naaz',
    role: 'Co-Founder and Vice-Principal',
    text: 'With more than 15 years of experience in education, she mentors students with inspiration, motivation, and a strong foundation for achievement.',
    icon: UserRoundCheck,
  },
];

export default function AboutStory() {
  return (
    <section className='bg-white px-6 py-16 sm:py-20 lg:px-[80px] lg:py-24'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16'>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className='text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]'>
              Our Story
            </span>
            <h2 className='mt-3 text-[32px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[42px] lg:text-[54px]'>
              Built to Nurture Excellence and Character
            </h2>
            <p className='mt-6 text-base font-medium leading-8 text-[var(--text-secondary)] sm:text-lg'>
              CEA upholds the belief that a safe and secure environment is necessary for children to flourish. The school aims to promote academic strength, confidence, integrity, and the values needed to grow as responsible citizens.
            </p>
            <div className='mt-7 rounded-[24px] border border-slate-100 bg-[#F8FAFC] p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--primary)]'>
                <BookOpenCheck size={24} />
              </div>
              <p className='text-[15px] font-semibold leading-7 text-[var(--primary-dark)]'>
                The school offers air-conditioned classrooms for the junior section and activities such as games, karate, sports, elocution, debate, quiz, drawing competitions, and cultural programs.
              </p>
            </div>
          </motion.div>

          <div className='grid gap-6'>
            {leaders.map((leader, index) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className='rounded-[28px] border border-slate-100 bg-white p-7 shadow-[0_18px_52px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(20,184,166,0.14)]'
              >
                <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] text-[var(--primary-dark)]'>
                  <leader.icon size={25} />
                </div>
                <h3 className='text-[24px] font-extrabold text-[var(--primary-dark)]'>
                  {leader.name}
                </h3>
                <p className='mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]'>
                  {leader.role}
                </p>
                <p className='mt-4 text-[15px] font-medium leading-7 text-[var(--text-secondary)]'>
                  {leader.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
