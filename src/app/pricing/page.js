'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { packages, addOns } from '../data/packagesData';

const EASE = [0.22, 1, 0.36, 1];

function PackageCard({ pkg, index }) {
  const Icon = pkg.icon;
  const isFeatured = pkg.featured;
  const isQuote = pkg.priceType === 'quote';

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-[0.65rem] font-bold text-white uppercase tracking-wider shadow-lg shadow-blue-600/30">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
          isFeatured
            ? `border ${pkg.borderColor} bg-white/[0.04] ${pkg.hoverBorder} hover:shadow-[0_8px_50px_-12px_${pkg.shadowColor}]`
            : `border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/25 hover:shadow-[0_8px_40px_-12px_rgba(37,99,235,0.2)]`
        }`}
      >
        {isFeatured && (
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/10 via-transparent to-cyan-500/5 opacity-100" />
        )}

        <div className="relative z-10 p-7 sm:p-8 flex flex-col h-full">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
            isFeatured
              ? 'bg-blue-500/15 border border-blue-500/25'
              : 'bg-white/[0.04] border border-white/[0.08]'
          }`}>
            <Icon className={`w-5 h-5 ${isFeatured ? 'text-blue-300' : pkg.badgeText}`} />
          </div>

          {/* Title + Tagline */}
          <h3 className="text-[1.1rem] font-bold text-white/90 tracking-tight mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
            {pkg.name}
          </h3>
          <p className="text-[0.78rem] text-gray-500 mb-5">{pkg.tagline}</p>

          {/* Price */}
          <div className="mb-5 pb-5 border-b border-white/[0.06]">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[0.75rem] text-gray-500">PKR</span>
              <span className={`text-2xl font-bold ${isFeatured ? 'text-white' : 'text-white/90'}`}>
                {pkg.price}
              </span>
            </div>
            <span className="text-[0.72rem] text-gray-500">{pkg.priceUnit}</span>
          </div>

          {/* Best For */}
          <p className="text-[0.78rem] text-gray-400/70 leading-relaxed mb-5">
            <span className="text-gray-500 font-medium">Ideal for: </span>
            {pkg.bestFor}
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-2.5 mb-8 flex-1">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isFeatured ? 'bg-blue-500/15' : 'bg-white/[0.04]'
                }`}>
                  <Check className={`w-2.5 h-2.5 ${isFeatured ? 'text-blue-400' : 'text-blue-400/60'}`} />
                </div>
                <span className="text-[0.8rem] text-gray-400/80">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={`group flex items-center justify-between rounded-xl px-5 py-3.5 transition-all duration-300 ${
              isFeatured
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20'
                : 'bg-white/[0.04] border border-white/[0.06] text-white/80 hover:bg-white/[0.06] hover:border-white/[0.1]'
            }`}
          >
            <span className="text-[0.82rem] font-medium">
              {isQuote ? 'Contact Us' : pkg.cta}
            </span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
              isFeatured ? 'text-white' : 'text-blue-400/60'
            }`} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('packages');

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] bg-sky-400/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 text-center">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
              </span>
              <span className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                Simple, Transparent Pricing
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight mb-5 leading-[1.12] max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            Plans That Scale{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent">
              With Your Business
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-400/70 text-[0.92rem] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
          >
            Whether you are launching your first website or building a custom platform, choose the plan that fits your needs today and upgrade as you grow.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14">
        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl">
            {[
              { id: 'packages', label: 'Packages' },
              { id: 'addons', label: 'Add-ons' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg text-[0.82rem] font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-gray-400 hover:text-white/80 hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages */}
        {activeTab === 'packages' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        )}

        {/* Add-ons */}
        {activeTab === 'addons' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white/90 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Add-on Services
              </h2>
              <p className="text-[0.85rem] text-gray-500 max-w-xl mx-auto">
                Enhance any package with individual services tailored to your needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, i) => {
                const AddonIcon = addon.icon;
                return (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="group flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/25 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/15 transition-colors">
                      <AddonIcon className="w-4 h-4 text-blue-400/80" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[0.82rem] font-medium text-white/85 truncate">{addon.name}</h4>
                      <p className="text-[0.72rem] text-gray-500">PKR {addon.price}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="text-center pb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <p className="text-gray-500 text-[0.85rem] mb-5">
            Not sure which plan is right for you?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[0.88rem] font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
