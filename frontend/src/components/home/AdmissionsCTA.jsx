import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdmissionsCTA() {
  return (
    <section className='bg-white px-6 py-16 sm:py-20 lg:px-[80px]'>
      <div className='mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_18%_24%,rgba(184,243,247,0.35),transparent_34%),linear-gradient(135deg,var(--primary-dark),var(--primary)_58%,var(--accent))] px-6 py-12 text-center shadow-[0_24px_70px_rgba(0,61,67,0.22)] sm:px-10 lg:px-16 lg:py-16'>
        <p className='mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-light)]'>
          Admissions Open 2026-27
        </p>
        <h2 className='mx-auto max-w-[760px] text-[34px] font-black leading-[1.08] text-white sm:text-[46px] lg:text-[60px]'>
          Give your child the best start in life.
        </h2>
        <p className='mx-auto mt-5 max-w-[620px] text-base font-medium leading-8 text-white/84 sm:text-lg'>
          Begin the admission process and discover how CEA helps every learner grow with confidence.
        </p>
        <Link to="/admissions" className='group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[var(--primary-dark)] shadow-[0_18px_42px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1'>
          Apply Now
          <ArrowRight size={18} className='transition-transform duration-300 group-hover:translate-x-1' />
        </Link>
      </div>
    </section>
  );
}
