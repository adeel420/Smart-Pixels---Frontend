'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Code2, TrendingUp, Zap, Check } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Websites built to convert, not just look good',
    body: 'We build fast, custom-coded websites from scratch — no templates, no themes. Every page is designed to turn your visitors into paying customers, on any device.',
    features: [
      'Mobile-first, responsive design',
      'Optimised for speed and Core Web Vitals',
      'Built with Next.js and modern tooling',
    ],
  },
  {
    icon: TrendingUp,
    title: 'We help your customers find you online',
    body: 'We handle local SEO so your business shows up when people in Lahore search for what you offer. No jargon, just results — more calls, more visits, more enquiries.',
    features: [
      'Google Business Profile setup and optimisation',
      'Local keyword targeting for Lahore-area searches',
      'Ongoing ranking reports and strategy',
    ],
  },
  {
    icon: Zap,
    title: 'We automate repetitive work so you can focus on running your business',
    body: 'From WhatsApp auto-replies to invoice generation and lead follow-ups, we build systems that handle the busywork — so your team can focus on what actually matters.',
    features: [
      'WhatsApp and email auto-replies',
      'Automated invoicing and lead tracking',
      'Custom dashboards and workflows',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesSection() {
  return (
    <section
      className='relative bg-[#F8FAFC] py-28 sm:py-36'
      aria-label='Our services'
    >
      <div className='max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12'>
        {/* Eyebrow badge */}
        <motion.div
          className='flex justify-center mb-6'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className='inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm font-medium text-gray-500 shadow-sm'>
            <span className='w-1.5 h-1.5 rounded-full bg-blue-500' />
            What We Do
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className='text-center text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight mb-20 max-w-3xl mx-auto leading-[1.15]'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Everything your business needs to grow online
        </motion.h2>

        {/* Cards grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className='group relative bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-[20px] p-8 lg:p-9 shadow-soft hover:shadow-soft-lg hover:border-blue-200/80 transition-all duration-300 flex flex-col'
            >
              {/* Top accent line on hover */}
              <div className='absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500' />

              {/* Icon badge */}
              <div className='w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-7 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-250'>
                <service.icon className='w-6 h-6 text-primary' />
              </div>

              {/* Headline */}
              <h3 className='text-[1.35rem] font-semibold text-gray-900 leading-snug mb-3.5 tracking-tight'>
                {service.title}
              </h3>

              {/* Body */}
              <p className='text-gray-500 text-[0.935rem] leading-relaxed mb-7'>
                {service.body}
              </p>

              {/* Divider */}
              <div className='w-full h-px bg-gray-100 mb-6' />

              {/* Feature list */}
              <ul className='space-y-3 mt-auto' role='list'>
                {service.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-3'>
                    <span className='mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center'>
                      <Check className='w-3 h-3 text-blue-600' strokeWidth={2.5} />
                    </span>
                    <span className='text-sm text-gray-600 leading-snug'>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
