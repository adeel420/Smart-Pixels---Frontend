'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, CalendarCheck, Contact, Monitor, Zap, LayoutDashboard } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const SOLUTIONS = [
  {
    icon: MessageSquare,
    title: 'Get More Inquiries',
    desc: 'Websites, landing pages, contact forms, WhatsApp integrations, and lead capture systems that make it easier for potential customers to reach you.',
  },
  {
    icon: CalendarCheck,
    title: 'Accept Online Bookings',
    desc: 'Appointment and booking systems that help businesses manage schedules and make it easy for customers to book anytime.',
  },
  {
    icon: Contact,
    title: 'Manage Your Leads',
    desc: 'Lead management dashboards and CRM integrations to help you organize, track, and follow up with every customer inquiry.',
  },
  {
    icon: Monitor,
    title: 'Showcase Your Business',
    desc: 'Professional websites, catalogs, menus, portfolios, and digital experiences that present your products and services at their best.',
  },
  {
    icon: Zap,
    title: 'Automate Repetitive Work',
    desc: 'Connect tools, APIs, workflows, and AI solutions to reduce manual tasks and free up your time for what matters.',
  },
  {
    icon: LayoutDashboard,
    title: 'Manage Your Business Digitally',
    desc: 'Custom dashboards and business systems for inventory, customers, bookings, operations, and internal workflows.',
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative bg-[#0a0e1a] text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-sky-400/[0.04] rounded-full blur-[120px]" />
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
              Built Around Your Business
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
          Turn Business Challenges Into{' '}
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent">
            Digital Solutions
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
          Whether you need more customer inquiries, easier bookings, better organization, or smarter workflows, we build solutions around the way your business actually works.
        </motion.p>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {SOLUTIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-[0_8px_50px_-12px_rgba(37,99,235,0.2)] overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-transparent to-sky-500/0 group-hover:from-blue-500/[0.06] group-hover:to-sky-500/[0.04] transition-all duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500">
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-all duration-500 group-hover:scale-110" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[1.05rem] font-bold text-white/90 tracking-tight mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[0.82rem] text-gray-500 leading-relaxed mb-6 flex-1">
                      {item.desc}
                    </p>

                    {/* Explore link */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-blue-400/80 group-hover:text-blue-400 transition-colors"
                    >
                      Explore Solution
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white/90 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Have a Business Challenge in Mind?
          </h3>
          <p className="text-gray-500 text-[0.85rem] max-w-lg mx-auto mb-6">
            Tell us what you are trying to improve, and we will help you explore the right digital solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[0.88rem] font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300"
          >
            Discuss Your Challenge
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
