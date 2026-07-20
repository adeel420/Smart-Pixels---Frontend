'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import {
  Target,
  Zap,
  Code2,
  Search,
  Smartphone,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Rocket,
  Sparkles,
  Cpu,
  ThumbsUp,
} from 'lucide-react';
import { CategoryList, Category } from './category-list';

interface StatCounterProps {
  end: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  inView: boolean;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Business-Focused Solutions',
    subtitle: 'Every project is built around your business goals, not just attractive designs.',
    icon: <Target className="w-7 h-7" />,
    featured: true,
  },
  {
    id: 2,
    title: 'Fast & Reliable Delivery',
    subtitle: 'Efficient development, clear communication, and on-time project delivery.',
    icon: <Zap className="w-7 h-7" />,
  },
  {
    id: 3,
    title: 'Modern Technologies',
    subtitle: 'Built with Next.js, React, TypeScript, AI, and modern development practices.',
    icon: <Code2 className="w-7 h-7" />,
  },
  {
    id: 4,
    title: 'SEO & Performance',
    subtitle: 'Fast-loading, search-engine-friendly websites optimized for better visibility.',
    icon: <Search className="w-7 h-7" />,
  },
  {
    id: 5,
    title: 'Responsive Experience',
    subtitle: 'Beautiful, responsive websites that work perfectly on every device.',
    icon: <Smartphone className="w-7 h-7" />,
  },
  {
    id: 6,
    title: 'Long-Term Support',
    subtitle: 'Ongoing maintenance, updates, and technical support after launch.',
    icon: <HeadphonesIcon className="w-7 h-7" />,
  },
];

const stats = [
  { end: 50, suffix: '+', label: 'Projects Completed', icon: Rocket },
  { end: 3, suffix: '+', label: 'Years Learning & Building', icon: Sparkles },
  { end: 15, suffix: '+', label: 'Technologies Used', icon: Cpu },
  { end: 98, suffix: '%', label: 'Client Satisfaction', icon: ThumbsUp },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Research',
    desc: 'We dive deep into your business, audience, and competitors to understand what makes you unique.',
    detail: '2-3 days',
    icon: Search,
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    desc: 'We map out a clear roadmap — site structure, features, and design direction tailored to your goals.',
    detail: '3-5 days',
    icon: Target,
  },
  {
    num: '03',
    title: 'Design & Prototype',
    desc: 'Modern, premium UI/UX design with interactive prototypes before a single line of code is written.',
    detail: '5-7 days',
    icon: Sparkles,
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Built with Next.js, React, and TypeScript — fast, clean, and scalable code.',
    detail: '7-14 days',
    icon: Code2,
  },
  {
    num: '05',
    title: 'Launch & Optimize',
    desc: 'Performance tuning, SEO setup, and a smooth launch — your site goes live ready to convert.',
    detail: '1-2 days',
    icon: Rocket,
  },
];

function StatCounter({ end, suffix, label, icon, inView }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  const Icon = icon;

  return (
    <div className='group relative rounded-2xl overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-sky-500/0 group-hover:from-blue-500/[0.07] group-hover:to-sky-500/[0.05] transition-all duration-500' />
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl' />
      </div>

      <div className='relative border border-white/[0.06] group-hover:border-blue-500/25 rounded-2xl p-6 sm:p-7 text-center transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_40px_-12px_rgba(37,99,235,0.2)]'>
        <div className='relative w-12 h-12 mx-auto mb-4'>
          <div className='absolute inset-0 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-500' />
          <div className='absolute inset-0 rounded-xl border border-blue-500/20 group-hover:border-blue-400/30 transition-colors duration-500' />
          <div className='absolute inset-0 flex items-center justify-center scale-100 group-hover:scale-110 transition-transform duration-500'>
            <Icon className='w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-500' />
          </div>
        </div>

        <div className='text-3xl sm:text-4xl lg:text-[2.5rem] font-bold mb-1 leading-none'>
          <span className='bg-gradient-to-b from-white to-white/70 group-hover:from-blue-300 group-hover:to-blue-400 bg-clip-text text-transparent transition-all duration-500'>
            {count}
          </span>
          <span className='bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent'>
            {suffix}
          </span>
        </div>

        <div className='text-gray-500/70 group-hover:text-gray-400/70 text-[0.75rem] sm:text-[0.82rem] font-medium tracking-wide uppercase mt-2 transition-colors duration-500'>
          {label}
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className='relative bg-[#0a0e1a] text-white overflow-hidden'
    >
      <div className='absolute inset-0'>
        <div className='absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/[0.07] rounded-full blur-[140px]' />
        <div className='absolute bottom-[-15%] left-[-8%] w-[600px] h-[600px] bg-sky-400/[0.05] rounded-full blur-[120px]' />
        <div className='absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[100px]' />
      </div>

      <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]' />

      <div className='absolute inset-0 opacity-[0.015] bg-noise pointer-events-none' />

      <div className='relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 py-20 sm:py-28'>
        {/* Badge */}
        <motion.div
          className='text-center mb-6'
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className='inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] rounded-full'>
            <span className='relative flex h-1.5 w-1.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60' />
              <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400' />
            </span>
            <span className='text-[0.65rem] font-semibold text-gray-400 uppercase tracking-[0.2em]'>
              Why Choose Us
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className='text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-4 leading-[1.15] text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          Why Choose{' '}
          <span className='bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent'>
            SmartPixelsSolutions
          </span>
        </motion.h2>
        <motion.p
          className='text-gray-400/70 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-4 leading-[1.15] text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >

        </motion.p>

        {/* Description */}
        <motion.p
          className='text-gray-400/70 text-[0.88rem] max-w-xl mx-auto leading-relaxed text-center mb-16'
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          We help businesses get found, build trust, and grow faster through
          smart digital solutions.
        </motion.p>

        {/* Working Process + Category List */}
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-20'>
          {/* Left - Working Process (top to bottom) */}
          <motion.div
            className='relative order-2 lg:order-1'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                className='relative flex gap-4 sm:gap-5'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                {/* Step number + line */}
                <div className='relative flex flex-col items-center flex-shrink-0'>
                  {/* Glowing node */}
                  <div className='relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center'>
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 group-hover:from-blue-500/30 group-hover:to-blue-600/20 transition-all duration-500' />
                    <div className='absolute inset-0 rounded-2xl border border-blue-500/20' />
                    <span className='relative text-sm font-bold bg-gradient-to-b from-blue-300 to-blue-400 bg-clip-text text-transparent'>
                      {step.num}
                    </span>
                  </div>
                  {/* Connecting line */}
                  {i < processSteps.length - 1 && (
                    <div className='w-px flex-1 min-h-[40px] relative'>
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-b from-blue-500/30 to-blue-500/5'
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.12 + 0.3,
                          ease: [0.22, 1, 0.36, 1] as const,
                        }}
                        style={{ transformOrigin: 'top' }}
                      />
                    </div>
                  )}
                </div>

                {/* Step content */}
                <div className='pb-8 sm:pb-10 pt-1'>
                  <div className='flex items-center gap-2.5 mb-1.5'>
                    <step.icon className='w-4 h-4 text-blue-400/80' />
                    <h3 className='text-sm sm:text-[0.95rem] font-semibold text-white/90'>
                      {step.title}
                    </h3>
                  </div>
                  <p className='text-[0.78rem] text-gray-500 leading-relaxed max-w-[280px]'>
                    {step.desc}
                  </p>
                  {/* Mini detail pill */}
                  <div className='mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/[0.06] rounded-lg'>
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-400/60' />
                    <span className='text-[0.6rem] text-gray-500'>{step.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Category List */}
          <motion.div
            className='order-1 lg:order-2'
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <CategoryList
              title=''
              subtitle=''
              categories={categories}
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className='relative mb-16'
          initial={{ opacity: 0 }}
          animate={statsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className='w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-10' />
          <div
            ref={statsRef}
            className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5'
          >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <StatCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                inView={statsInView}
              />
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-12' />

        {/* CTA */}
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <Link
            href='/contact'
            className='group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3.5 rounded-xl font-medium text-[0.88rem] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-500/35 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:-translate-y-0.5'
          >
            <CheckCircle className='w-4 h-4' />
            Let&apos;s Build Something Great Together
            <ArrowRight className='w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300' />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
