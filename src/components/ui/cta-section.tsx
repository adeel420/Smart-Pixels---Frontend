'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const JOURNEY = [
  { label: 'Business Challenge', delay: 0 },
  { label: 'Digital Solution', delay: 0.15 },
  { label: 'Business Growth', delay: 0.3 },
];

function FloatingElement({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
      transition={{ duration: 8 + delay * 4, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

export default function CtaSection() {
  return (
    <section className="relative bg-[#0a0e1a] text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/[0.08] rounded-full blur-[160px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-sky-400/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-blue-500/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise pointer-events-none" />

      {/* Floating abstract UI elements */}
      <FloatingElement className="top-[15%] left-[8%] w-16 h-16 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hidden lg:block" delay={0} />
      <FloatingElement className="top-[25%] right-[12%] w-12 h-12 rounded-lg border border-blue-500/10 bg-blue-500/[0.04] backdrop-blur-sm hidden lg:block" delay={1.5} />
      <FloatingElement className="bottom-[20%] left-[15%] w-10 h-10 rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm hidden lg:block" delay={3} />
      <FloatingElement className="bottom-[30%] right-[8%] w-14 h-14 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hidden lg:block" delay={2} />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 py-20 sm:py-28">
        {/* Main CTA panel */}
        <motion.div
          className="relative rounded-3xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {/* Panel gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-sky-500/[0.03]" />

          {/* Panel grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 p-8 sm:p-12 lg:p-16">
            {/* Left: Text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                className="mb-6 flex justify-center lg:justify-start"
                initial={{ opacity: 0, scale: 0.8, y: 14 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              >
                <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                  </span>
                  <span className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                    Let&apos;s Work Together
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-5 leading-[1.15]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              >
                Have a Business Idea or{' '}
                <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent">
                  Challenge in Mind?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-gray-400/70 text-[0.88rem] max-w-lg leading-relaxed mb-8 mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              >
                Whether you need a professional online presence, a custom website, a booking system, or a smarter way to run your business, let&apos;s discuss what you are trying to achieve.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
              >
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[0.88rem] font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/80 text-[0.88rem] font-medium hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>

            {/* Right: Visual journey */}
            <motion.div
              className="flex-shrink-0 flex lg:flex-col items-center gap-4 lg:gap-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            >
              {JOURNEY.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center">
                  {/* Step pill */}
                  <motion.div
                    className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + step.delay, ease: EASE }}
                  >
                    <span className="text-[0.78rem] font-medium text-white/80 whitespace-nowrap">
                      {step.label}
                    </span>
                  </motion.div>

                  {/* Connector line */}
                  {i < JOURNEY.length - 1 && (
                    <div className="flex flex-col items-center py-2">
                      <motion.div
                        className="w-px h-8 bg-gradient-to-b from-blue-400/40 to-blue-400/10"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + step.delay, ease: EASE }}
                      />
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-blue-400/50 my-1"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + step.delay, ease: EASE }}
                      />
                      <motion.div
                        className="w-px h-8 bg-gradient-to-b from-blue-400/10 to-blue-400/40"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.65 + step.delay, ease: EASE }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
