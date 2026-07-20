'use client';

import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { packages } from '@/app/data/packagesData';

const EASE = [0.22, 1, 0.36, 1] as const;

const homeTiers = [
  {
    packageId: 'get-found',
    highlights: [
      'Google Business Profile & social pages',
      '8 social media posts every month',
      'WhatsApp Business setup',
    ],
  },
  {
    packageId: 'growth',
    highlights: [
      '8–12 page responsive website',
      'Branding kit & social designs',
      'SEO & analytics setup',
    ],
  },
  {
    packageId: 'business-pro',
    highlights: [
      'Custom platform with admin dashboard',
      'Booking & email automation',
      'Full branding & 20 designs',
    ],
  },
];

function ProgressionArrow({ index }: { index: number }) {
  return (
    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center pointer-events-none" style={{ right: -28, zIndex: 10 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.15, ease: EASE }}
        className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center"
      >
        <ArrowRight className="w-4 h-4 text-blue-400/60" />
      </motion.div>
    </div>
  );
}

function ProgressionArrowVertical() {
  return (
    <div className="flex lg:hidden justify-center py-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
        className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center rotate-90"
      >
        <ArrowRight className="w-4 h-4 text-blue-400/60" />
      </motion.div>
    </div>
  );
}

export default function GrowthPathSection() {
  const tiers = homeTiers.map((t) => ({
    ...t,
    pkg: packages.find((p) => p.id === t.packageId)!,
  }));

  return (
    <section className="relative bg-[#0a0e1a] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] bg-sky-400/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

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
              Our Digital Growth Paths
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
          From First Online Presence to{' '}
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent">
            Full Business Automation
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
          Every business starts somewhere. Pick the path that matches where you are today and scale as you grow.
        </motion.p>

        {/* ── Desktop: 3 columns with arrows ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 relative">
          {tiers.map((tier, i) => {
            const Icon = tier.pkg.icon;
            const isFeatured = tier.pkg.featured;

            return (
              <motion.div
                key={tier.pkg.id}
                className="relative"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-[0.6rem] font-bold text-white uppercase tracking-wider shadow-lg shadow-blue-600/30">
                      Most Popular
                    </div>
                  </div>
                )}

                <Link href="/pricing" className="group block h-full">
                  <div
                    className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                      isFeatured
                        ? 'border border-blue-500/30 bg-white/[0.04] hover:border-blue-400/50 hover:shadow-[0_8px_50px_-12px_rgba(37,99,235,0.3)]'
                        : 'border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/25 hover:shadow-[0_8px_40px_-12px_rgba(37,99,235,0.2)]'
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/10 via-transparent to-sky-500/5 opacity-100" />
                    )}

                    <div className="relative z-10 p-7 sm:p-8 flex flex-col h-full">
                      {/* Step number */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isFeatured
                            ? 'bg-blue-500/15 border border-blue-500/25 group-hover:bg-blue-500/20'
                            : 'bg-white/[0.04] border border-white/[0.08] group-hover:bg-white/[0.06]'
                        }`}>
                          <Icon className={`w-5 h-5 transition-all duration-500 group-hover:scale-110 ${
                            isFeatured ? 'text-blue-300' : 'text-blue-400'
                          }`} />
                        </div>
                        <div className={`px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider ${
                          isFeatured ? 'bg-blue-500/15 text-blue-300' : 'bg-white/[0.04] text-gray-500'
                        }`}>
                          Step {i + 1}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[1.15rem] font-bold text-white/90 tracking-tight mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {tier.pkg.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-[0.82rem] text-gray-500 leading-relaxed mb-5">
                        {tier.pkg.tagline}
                      </p>

                      {/* Highlights */}
                      <ul className="flex flex-col gap-3 mb-7 flex-1">
                        {tier.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isFeatured ? 'bg-blue-500/15' : 'bg-white/[0.04]'
                            }`}>
                              <Check className={`w-2.5 h-2.5 ${isFeatured ? 'text-blue-400' : 'text-blue-400/60'}`} />
                            </div>
                            <span className="text-[0.82rem] text-gray-400/80">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className={`flex items-center justify-between rounded-xl px-5 py-3 transition-all duration-300 ${
                        isFeatured
                          ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/20'
                          : 'bg-white/[0.04] border border-white/[0.06] text-white/80 group-hover:bg-white/[0.06] group-hover:border-white/[0.1]'
                      }`}>
                        <span className="text-[0.82rem] font-medium">View Details</span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                          isFeatured ? 'text-white' : 'text-blue-400/60'
                        }`} />
                      </div>
                    </div>
                  </div>
                </Link>

                {i < tiers.length - 1 && <ProgressionArrow index={i} />}
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile: stacked with vertical arrows ── */}
        <div className="md:hidden flex flex-col">
          {tiers.map((tier, i) => {
            const Icon = tier.pkg.icon;
            const isFeatured = tier.pkg.featured;

            return (
              <div key={tier.pkg.id}>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                >
                  {isFeatured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-[0.6rem] font-bold text-white uppercase tracking-wider shadow-lg shadow-blue-600/30">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <Link href="/pricing" className="group block">
                    <div
                      className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                        isFeatured
                          ? 'border border-blue-500/30 bg-white/[0.04]'
                          : 'border border-white/[0.06] bg-white/[0.02]'
                      }`}
                    >
                      {isFeatured && (
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/10 via-transparent to-sky-500/5 opacity-100" />
                      )}

                      <div className="relative z-10 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                            isFeatured ? 'bg-blue-500/15 border border-blue-500/25' : 'bg-white/[0.04] border border-white/[0.08]'
                          }`}>
                            <Icon className={`w-5 h-5 ${isFeatured ? 'text-blue-300' : 'text-blue-400'}`} />
                          </div>
                          <div className={`px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider ${
                            isFeatured ? 'bg-blue-500/15 text-blue-300' : 'bg-white/[0.04] text-gray-500'
                          }`}>
                            Step {i + 1}
                          </div>
                        </div>

                        <h3 className="text-[1rem] font-bold text-white/90 tracking-tight mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                          {tier.pkg.name}
                        </h3>
                        <p className="text-[0.8rem] text-gray-500 leading-relaxed mb-4">
                          {tier.pkg.tagline}
                        </p>

                        <ul className="flex flex-col gap-2.5 mb-5">
                          {tier.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2">
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isFeatured ? 'bg-blue-500/15' : 'bg-white/[0.04]'
                              }`}>
                                <Check className={`w-2.5 h-2.5 ${isFeatured ? 'text-blue-400' : 'text-blue-400/60'}`} />
                              </div>
                              <span className="text-[0.8rem] text-gray-400/80">{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className={`flex items-center justify-between rounded-xl px-5 py-3 ${
                          isFeatured
                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/20'
                            : 'bg-white/[0.04] border border-white/[0.06] text-white/80'
                        }`}>
                          <span className="text-[0.8rem] font-medium">View Details</span>
                          <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                            isFeatured ? 'text-white' : 'text-blue-400/60'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {i < tiers.length - 1 && <ProgressionArrowVertical />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex justify-center mt-14 sm:mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
        >
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/80 hover:bg-white/[0.06] hover:border-blue-500/25 hover:text-white transition-all duration-300"
          >
            <span className="text-[0.88rem] font-medium">Explore All Packages & Pricing</span>
            <ArrowRight className="w-4 h-4 text-blue-400/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
