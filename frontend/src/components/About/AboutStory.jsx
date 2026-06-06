import { motion } from 'framer-motion';
import { Award, BookOpenCheck, UserRoundCheck } from 'lucide-react';

const leaders = [
  {
    name: 'Mr. S. Yaser Ahmed',
    role: 'President and Founder Principal',
    text: 'He is committed to promoting academic excellence, innovation and value-based learning essential for today’s modern life.',
    icon: Award,
  },
  {
    name: 'Mrs. Sufia Naaz',
    role: 'Co-Founder and Vice-Principal',
    text: 'An expert in education with over 15 years of experience. Her mentorship, inspiration, and motivation provide our students with a great platform. She infuses children with the target of securing and achieving the best out of them.',
    icon: UserRoundCheck,
  },
];

export default function AboutStory() {
  return (
    <section id='founders' className='bg-white px-6 py-16 sm:py-20 lg:px-[80px] lg:py-24'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16'>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className='text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]'>
              About Us
            </span>
            <h2 className='mt-3 text-[32px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[42px] lg:text-[54px]'>
              Nurturing Academic Excellence & Innovation
            </h2>
            <p className='mt-6 text-base font-medium leading-8 text-[var(--text-secondary)] sm:text-lg'>
              Children Education Academy is a co-educational ICSE secondary school in Maheshtala, Kolkata, established in the year 2012. The school offers a syllabus aligned with NEP starting from classes NURSERY, LKG, UKG till class X. For ISC classes XI and XII, the school offers a curriculum in Science, Commerce, and Humanities streams, designed to prepare students for academic excellence and beyond.
            </p>
            <p className='mt-4 text-base font-medium leading-8 text-[var(--text-secondary)] sm:text-lg'>
              CEA is located at Memanpur, Maheshtala in Kolkata. We uphold the notion that a safe and secure environment is necessary to flourish globally, with an aim to promote the inculcation of potency and rectitude.
            </p>
            <div className='mt-7 rounded-[24px] border border-slate-100 bg-[#F8FAFC] p-6'>
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--primary)]'>
                <BookOpenCheck size={24} />
              </div>
              <p className='text-[15px] font-semibold leading-7 text-[var(--primary-dark)]'>
                The school offers air-conditioned classrooms for our junior section (Nursery, LKG, UKG). It offers activities such as Games, Karate, Sports, Elocution, Debate, Quiz, Drawing Competition, Cultural Programs, etc.
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
