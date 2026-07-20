'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  UtensilsCrossed,
  HeartPulse,
  Building2,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as const;

const INDUSTRIES = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Cafés',
    desc: 'Help customers discover your business, explore your menu, and connect with you online.',
    accent: 'from-orange-500/20 to-amber-500/10',
    accentBorder: 'rgba(249,115,22,0.3)',
  },
  {
    icon: HeartPulse,
    title: 'Clinics & Healthcare',
    desc: 'Build trust with a professional online presence and make it easier for patients to find and contact you.',
    accent: 'from-emerald-500/20 to-teal-500/10',
    accentBorder: 'rgba(16,185,129,0.3)',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Showcase properties, capture leads, and create a stronger digital experience for buyers and sellers.',
    accent: 'from-blue-500/20 to-indigo-500/10',
    accentBorder: 'rgba(99,102,241,0.3)',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    desc: 'Create digital experiences that help businesses showcase products and connect with more customers.',
    accent: 'from-pink-500/20 to-rose-500/10',
    accentBorder: 'rgba(236,72,153,0.3)',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Build modern digital platforms that improve communication, visibility, and accessibility.',
    accent: 'from-violet-500/20 to-purple-500/10',
    accentBorder: 'rgba(139,92,246,0.3)',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    desc: 'Create a credible online presence that helps potential clients understand and trust your business.',
    accent: 'from-sky-500/20 to-cyan-500/10',
    accentBorder: 'rgba(14,165,233,0.3)',
  },
];

/* ── 3D Tilt Card ── */

function TiltCard({ industry, index }: { industry: typeof INDUSTRIES[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }, [mouseX, mouseY]);

  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
    >
      <div
        ref={cardRef}
        className="group relative h-full"
        style={{ perspective: 800 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative h-full rounded-2xl overflow-hidden"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          {/* Animated gradient border */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${industry.accentBorder}, transparent 50%, ${industry.accentBorder})`,
              padding: '1px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
            }}
          />

          {/* Card body */}
          <div className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm group-hover:border-transparent transition-colors duration-500">
            {/* Spotlight glow */}
            <div
              className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
              style={{
                background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${industry.accentBorder}, transparent 70%)`,
              }}
            />

            {/* Shine sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)',
                  transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                  transition: 'transform 0.8s ease',
                }}
              />
            </div>

            {/* Accent glow blob */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${industry.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full">
              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-white/[0.06] group-hover:border-white/[0.12] transition-all duration-500">
                <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-[1rem] font-semibold text-white/90 tracking-tight mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-[0.82rem] text-gray-500 leading-relaxed mb-5 flex-1 group-hover:text-gray-400 transition-colors duration-500">
                {industry.desc}
              </p>

              {/* Explore link */}
              <div className="flex items-center gap-2 text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300 mt-auto">
                <span className="text-[0.78rem] font-medium">Explore Solutions</span>
                <div className="relative overflow-hidden">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-3" />
                  <ArrowRight className="w-3.5 h-3.5 absolute inset-0 transition-transform duration-300 -translate-x-3 group-hover:translate-x-0" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Spotlight Grid ── */

function SpotlightGrid({ children }: { children: React.ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    gridRef.current?.style.setProperty('--spotlight-x', `${x}px`);
    gridRef.current?.style.setProperty('--spotlight-y', `${y}px`);
  }, []);

  return (
    <div
      ref={gridRef}
      className="relative group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16"
      onMouseMove={handleMouseMove}
      style={{
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
      } as React.CSSProperties}
    >
      {/* Grid spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: 'radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), rgba(37,99,235,0.06), transparent 40%)',
        }}
      />
      {children}
    </div>
  );
}

/* ── Main Section ── */

export default function IndustriesSection() {
  return (
    <section className="relative bg-[#0a0e1a] text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] bg-blue-600/[0.06] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-8%] w-[500px] h-[500px] bg-sky-400/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-[200px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-blue-400/30"
        animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[60%] right-[15%] w-1.5 h-1.5 rounded-full bg-sky-400/20"
        animate={{ y: [6, -6, 6], x: [3, -3, 3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-blue-300/25"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 py-20 sm:py-28">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8, y: 14 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
            </span>
            <span className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-[0.2em]">
              Who We Help
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-4 leading-[1.15] text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        >
          Digital Solutions for Businesses{' '}
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent">
            Ready to Grow
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-400/70 text-[0.88rem] max-w-xl mx-auto leading-relaxed text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
        >
          From local businesses to growing companies, we create digital solutions designed around the unique goals and challenges of each business.
        </motion.p>

        {/* Industry cards */}
        <SpotlightGrid>
          {INDUSTRIES.map((industry, i) => (
            <TiltCard key={industry.title} industry={industry} index={i} />
          ))}
        </SpotlightGrid>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <p className="text-gray-500 text-[0.88rem] mb-4">
            Don&apos;t see your industry?
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3.5 rounded-xl font-medium text-[0.88rem] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-500/35 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">Let&apos;s Discuss Your Business</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
