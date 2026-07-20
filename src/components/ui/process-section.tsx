'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;

const STAGES = [
  {
    num: '01',
    title: 'Business Challenge',
    desc: 'Every project starts with a real problem: lost leads, outdated systems, manual work eating into growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We define the right approach — what to build, what to automate, what to leave alone.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Wireframes become a real visual system, refined with you in the loop.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80',
  },
  {
    num: '04',
    title: 'Build',
    desc: 'Clean, scalable full-stack code — database to polished, production UI.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&q=80',
  },
  {
    num: '05',
    title: 'Launch & Grow',
    desc: 'We ship, monitor, and keep improving as your business scales.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
  },
];

export default function ProcessSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section className="relative bg-[#F8FAFC]" aria-label="Our working process">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-18"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm font-medium text-gray-500 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight mb-4 max-w-2xl mx-auto leading-[1.15]">
            From concept to{' '}
            <span className="text-gradient">reality</span>
          </h2>
          <p className="text-gray-500 text-[0.9rem] max-w-lg mx-auto leading-relaxed">
            A clear path from your initial idea to a fully built, tested, and launched solution — step by step.
          </p>
        </motion.div>

        {/* Stages */}
        <div className={`grid ${isMobile ? 'grid-cols-1 max-w-[600px] mx-auto' : 'grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5'}`}>
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.num}
              className="group relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            >
              <div className="relative bg-white rounded-2xl border border-gray-100 h-full overflow-hidden transition-all duration-500 group-hover:border-blue-400/30 group-hover:shadow-soft-lg group-hover:-translate-y-1.5">
                {/* Hover background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${stage.image})` }}
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-7">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border group-hover:border-blue-400/30 transition-all duration-500">
                      <span className="text-sm font-bold text-blue-600 group-hover:text-blue-300 transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                        {stage.num}
                      </span>
                    </div>
                    {i < STAGES.length - 1 && !isMobile && (
                      <div className="flex-1 h-px bg-gray-200 group-hover:bg-blue-400/30 transition-colors duration-500" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[0.95rem] font-bold text-gray-900 group-hover:text-white tracking-tight mb-2 transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[0.82rem] text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
