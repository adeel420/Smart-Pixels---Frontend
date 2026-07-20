'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { packages } from '@/app/data/packagesData';

const EASE = [0.22, 1, 0.36, 1] as const;

const VISIBLE_FEATURES = 5;

function PackageCard({ pkg, index, isWide }: { pkg: typeof packages[number]; index: number; isWide: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = pkg.icon;
  const isFeatured = pkg.featured;
  const isQuote = pkg.priceType === 'quote';
  const showToggle = pkg.features.length > VISIBLE_FEATURES;
  const visibleFeatures = expanded ? pkg.features : pkg.features.slice(0, VISIBLE_FEATURES);

  return (
    <motion.div
      className={`relative ${isWide ? 'md:col-span-1' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
    >
      {/* Most Popular badge */}
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-[0.65rem] font-bold text-white uppercase tracking-wider shadow-lg shadow-blue-600/30">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${
          isFeatured
            ? `border ${pkg.borderColor} bg-white/[0.04] ${pkg.hoverBorder} hover:shadow-[0_8px_60px_-12px_${pkg.shadowColor}]`
            : 'border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/25 hover:shadow-[0_8px_40px_-12px_rgba(37,99,235,0.2)]'
        }`}
      >
        {/* Featured glow overlay */}
        {isFeatured && (
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/10 via-transparent to-cyan-500/5 opacity-100" />
        )}

        <div className="relative z-10 p-7 sm:p-8 flex flex-col h-full">
          {/* Header row: icon + title */}
          <div className="flex items-start gap-4 mb-5">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
              isFeatured
                ? 'bg-blue-500/15 border border-blue-500/25 group-hover:bg-blue-500/20'
                : 'bg-white/[0.04] border border-white/[0.08] group-hover:bg-white/[0.06]'
            }`}>
              <Icon className={`w-5 h-5 transition-transform duration-500 group-hover:scale-110 ${
                isFeatured ? 'text-blue-300' : pkg.badgeText
              }`} />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-bold text-white/90 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {pkg.name}
              </h3>
              <p className="text-[0.78rem] text-gray-500 mt-0.5">{pkg.tagline}</p>
            </div>
          </div>

          {/* Price */}
          <div className="mb-5 pb-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              {isQuote ? (
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[0.65rem] font-bold text-amber-400 uppercase tracking-wider">
                  Custom Quote
                </span>
              ) : null}
            </div>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-[0.75rem] text-gray-500">PKR</span>
              <span className={`text-2xl font-bold ${isFeatured ? 'text-white' : 'text-white/90'}`}>
                {pkg.price}
              </span>
            </div>
            <span className="text-[0.72rem] text-gray-500">{pkg.priceUnit}</span>
          </div>

          {/* Best for */}
          <p className="text-[0.78rem] text-gray-400/70 leading-relaxed mb-5">
            <span className="text-gray-500 font-medium">Best for: </span>
            {pkg.bestFor}
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-2.5 mb-6 flex-1">
            <AnimatePresence initial={false}>
              {visibleFeatures.map((feature) => (
                <motion.li
                  key={feature}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="flex items-start gap-2.5"
                >
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isFeatured ? 'bg-blue-500/15' : 'bg-white/[0.04]'
                  }`}>
                    <Check className={`w-2.5 h-2.5 ${isFeatured ? 'text-blue-400' : 'text-blue-400/60'}`} />
                  </div>
                  <span className={`text-[0.8rem] ${feature === 'Everything in Get Found' ? 'text-blue-400/80 font-medium' : 'text-gray-400/80'}`}>
                    {feature}
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {/* Show more/less toggle */}
          {showToggle && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-[0.75rem] text-gray-500 hover:text-blue-400 transition-colors mb-5"
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
              {expanded ? 'Show less' : `View all ${pkg.features.length} features`}
            </button>
          )}

          {/* CTA */}
          <Link
            href="/contact"
            className={`group flex items-center justify-between rounded-xl px-5 py-3.5 transition-all duration-300 mt-auto ${
              isFeatured
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30'
                : 'bg-white/[0.04] border border-white/[0.06] text-white/80 hover:bg-white/[0.06] hover:border-white/[0.1]'
            }`}
          >
            <span className="text-[0.82rem] font-medium">{pkg.cta}</span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
              isFeatured ? 'text-white' : 'text-blue-400/60'
            }`} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const topRow = packages.filter(p => ['get-found', 'growth', 'business-pro'].includes(p.id));
  const bottomRow = packages.filter(p => ['digital-retainer', 'custom-automation'].includes(p.id));

  return (
    <section className="relative bg-[#0a0e1a] text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] bg-sky-400/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise pointer-events-none" />

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
              Plans & Pricing
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-4 leading-[1.15] text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        >
          Choose the Right Solution for{' '}
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent">
            Your Business
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-400/70 text-[0.88rem] max-w-2xl mx-auto leading-relaxed text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
        >
          Whether you are building your digital foundation, growing your online presence, or creating a custom business system, we have a solution to match your goals.
        </motion.p>

        {/* Top row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {topRow.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} isWide={false} />
          ))}
        </div>

        {/* Bottom row: 2 wider cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {bottomRow.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i + 3} isWide={true} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <p className="text-gray-500 text-[0.85rem] mb-5">
            Need something different? We can create a custom solution around your business requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[0.88rem] font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300"
          >
            Let&apos;s Discuss Your Business
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
