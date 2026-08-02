import { motion } from 'framer-motion';
import { PenTool } from 'lucide-react';

const creations = [
  {
    title: 'To A Special Teacher',
    author: 'Md. Aquib Siddiqui',
    classInfo: 'Class-VIB',
    content: `When I started school,
This day seemed so far away.

Now it's here and I can't believe
That time has passed so quickly . . .

But through your encouragement and guidance,
I feel I am ready for tomorrow's challenges.

Teachers play such an important part
in shaping and guiding . . .
Especially a teacher like you.
Thank you for caring so much.`
  },
  {
    title: 'Call for the Rain',
    author: 'Adeeb Shafqat',
    classInfo: 'Class-VIIIB',
    content: `Call the Rain —
Let it come to save our men;
Oh! Rain
'Flash your lightning.
Splast your waters.
Let us hear your mystifying clatters.
Free us from the scorching summers.
Oh! Rain —
'Pay attention to our murmurs,
We are done with being roasted,
Make us energized and boosted,
With your eternal enchanting power
Let us have a bit of your shower.'`
  },
  {
    title: 'What is Life',
    author: 'Moaqqir Hussain Siddique',
    classInfo: 'Class-VIIIB',
    content: `A poor man, shrivelled by the sun said, life is struggle.
A rich man, luxuriantly laughed and said, life is wealth.
A businessman, after calculating his riches said, life is profit.
A shopkeeper, after closing his shop said, life is a sale.
A sportsman while playing said, life is a game.
A lover waiting anxiously for his beloved said, life is love.
A man dreaming in his sleep said, life is like a bed of roses.
A scientist in his research said, life is a science.
A young man enjoying his life said, life is full of pleasure.
A student studying like a bookwarm, said life is education for all.
But, I say, that it is an unexplained mystery or puzzle which can never be resolved.`
  },
  {
    title: 'Living with Mountains',
    author: 'Roshan Shah',
    classInfo: 'Class-VIIIB',
    content: `Once you have lived with mountains,
Under the benedictory pines.
And deodars, near stars
And a brighter moon,
With good smoke and mist,
Sweet smell of grass, dew lives.
On spider-spun, sun-kissed
Buttercup and wine;
Once you have lived with these,
Blessed, God's favourite then,
You will return,
You will come back
To touch the trees and grass,
And climb once more the wind swept mountain pass.`
  },
  {
    title: 'The Midnight Sky',
    author: 'Aarav Sharma',
    classInfo: 'Class-IXC',
    content: `Stars are glowing in the night,
Painting darkness with their light.
The moon looks down with a gentle smile,
Making me want to stay a while.

A cool breeze whispers through the trees,
A silent song carried by the breeze.
In this peaceful, quiet place,
I feel the beauty of infinite space.`
  },
  {
    title: 'The Little Seed',
    author: 'Ananya Singh',
    classInfo: 'Class-VA',
    content: `Deep in the soil, hidden from view,
A little seed waited, fresh and new.
It drank the rain and soaked the sun,
Waiting for its journey to begun.

Soon a tiny sprout appeared,
Green and brave, nothing it feared.
It reached for the sky, tall and proud,
A beautiful flower, standing out from the crowd.`
  },
  {
    title: 'Echoes of the Past',
    author: 'Rohan Das',
    classInfo: 'Class-XB',
    content: `History pages, old and torn,
Tell of empires, dead and born.
Kings and queens in golden halls,
Battles fought behind great walls.

Though time moves on and ages pass,
Like grains of sand inside a glass,
Their stories live in every book,
If only we take the time to look.`
  },
  {
    title: 'My Best Friend',
    author: 'Priya Patel',
    classInfo: 'Class-VIIA',
    content: `We laugh, we cry, we play all day,
Through thick and thin, you always stay.
A secret shared, a problem solved,
In every adventure, we are involved.

Like two puzzle pieces that perfectly fit,
Our friendship is strong, I must admit.
Thank you for being by my side,
In this amazing roller coaster ride.`
  }
];

const StudentCreations = () => {
  return (
    <section className='relative w-full overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-24'>
      {/* Abstract Background Elements */}
      <div className='absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[var(--primary)]/5 blur-[120px]' />
      <div className='absolute -right-[10%] top-[40%] h-[600px] w-[600px] rounded-full bg-[var(--accent)]/5 blur-[120px]' />

      <div className='relative z-10 mx-auto max-w-[1400px] px-6 lg:px-[80px]'>
        
        {/* Header Section */}
        <div className='mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8'>
          <div className='max-w-[700px]'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='mb-4 flex items-center gap-3'
            >
              <span className='h-[2px] w-12 bg-[var(--accent)]' />
              <h3 className='text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]'>
                Student Literature
              </h3>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='text-[36px] font-black leading-[1.1] text-[var(--primary-dark)] sm:text-[46px] lg:text-[56px]'
            >
              Voices of <span className='text-[var(--primary)]'>Tomorrow</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='max-w-[400px] text-[15px] font-medium leading-relaxed text-[var(--text-secondary)]'
          >
            A curated gallery of poetry and prose written by our brilliant students, showcasing their unbounded imagination and emotional depth.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className='columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6'>
          {creations.map((creation, index) => {
            const isPrimary = index % 4 === 1;
            const isDark = index % 4 === 2;
            const isWhite = index % 4 === 0 || index % 4 === 3;
            
            let bgClass = "bg-white border-slate-200/60 text-[var(--text-secondary)]";
            let titleClass = "text-[var(--primary-dark)]";
            let accentClass = "text-[var(--accent)]";
            let quoteClass = "text-slate-100";
            
            if (isPrimary) {
              bgClass = "bg-[var(--primary)] border-[var(--primary)] text-white/90";
              titleClass = "text-white";
              accentClass = "text-white";
              quoteClass = "text-white/15";
            } else if (isDark) {
              bgClass = "bg-[var(--primary-dark)] border-[var(--primary-dark)] text-white/80";
              titleClass = "text-white";
              accentClass = "text-[var(--primary)]";
              quoteClass = "text-white/10";
            }

            return (
              <motion.article
                key={creation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className={`break-inside-avoid relative flex h-auto flex-col overflow-hidden rounded-[24px] border p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] ${bgClass}`}
              >
                <div className='absolute -right-4 -top-4 text-8xl pointer-events-none'>
                  <PenTool size={160} className={quoteClass} strokeWidth={0.5} fill="currentColor" />
                </div>
                
                <div className='relative z-10 mb-8'>
                  <h3 className={`mb-4 text-[24px] md:text-[28px] font-extrabold leading-tight ${titleClass}`}>
                    {creation.title}
                  </h3>
                  <div className='flex flex-wrap items-center gap-3 text-[13px] font-bold uppercase tracking-wider'>
                    <span className={accentClass}>{creation.author}</span>
                    <span className={`h-1.5 w-1.5 rounded-full ${isWhite ? 'bg-slate-300' : 'bg-white/30'}`} />
                    <span className={isWhite ? 'text-slate-400' : 'text-white/60'}>{creation.classInfo}</span>
                  </div>
                </div>

                <div className='relative z-10'>
                  <p className='whitespace-pre-wrap font-serif italic text-[16px] md:text-[18px] leading-[1.8]'>
                    {creation.content}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentCreations;
