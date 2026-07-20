'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    title: 'Real Estate Platform',
    desc: 'A modern property listing platform designed to help users discover, search, and explore properties online.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    label: 'Client Project',
    gradient: 'from-blue-600/25 via-indigo-500/20 to-blue-400/15',
    accent: '#3B82F6',
  },
  {
    title: 'QR Menu Platform',
    desc: 'A digital menu solution that helps restaurants create and manage modern QR-based menus.',
    tags: ['React', 'Node.js', 'MongoDB'],
    label: 'Client Project',
    gradient: 'from-emerald-600/25 via-teal-500/20 to-cyan-400/15',
    accent: '#10B981',
  },
  {
    title: 'Freelancing Platform',
    desc: 'An AI-powered freelancing platform designed to connect businesses and freelancers through a modern digital experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    label: 'Concept Project',
    gradient: 'from-violet-600/25 via-purple-500/20 to-fuchsia-400/15',
    accent: '#8B5CF6',
  },
  {
    title: 'Custom Business Solutions',
    desc: 'Scalable web applications and dashboards designed around specific business requirements.',
    tags: ['Next.js', 'TypeScript', 'APIs', 'Automation'],
    label: 'Client Project',
    gradient: 'from-orange-600/25 via-amber-500/20 to-yellow-400/15',
    accent: '#F59E0B',
  },
];

/* ── Browser Mockup Frame (Light) ── */

function BrowserMockup({ gradient, accent }: { gradient: string; accent: string }) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-gray-200/60 bg-white shadow-sm">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-5 rounded-md bg-white border border-gray-200/60 flex items-center px-3">
            <span className="text-[0.6rem] text-gray-400 truncate">smartpixelssolutions.com</span>
          </div>
        </div>
      </div>

      {/* Page content placeholder */}
      <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        {/* Decorative UI elements */}
        <div className="absolute inset-4 flex flex-col gap-3">
          {/* Fake nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-white/30" />
              <div className="w-16 h-2 rounded bg-white/25" />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-2 rounded bg-white/20" />
              <div className="w-8 h-2 rounded bg-white/20" />
              <div className="w-8 h-2 rounded bg-white/20" />
            </div>
          </div>

          {/* Fake hero */}
          <div className="flex-1 flex flex-col justify-center gap-2.5 mt-2">
            <div className="w-3/4 h-3 rounded bg-white/30" />
            <div className="w-1/2 h-3 rounded bg-white/25" />
            <div className="w-20 h-6 rounded-lg bg-white/25 mt-2" />
          </div>

          {/* Fake cards row */}
          <div className="flex gap-2 mb-1">
            <div className="flex-1 h-10 rounded-lg bg-white/20 border border-white/20" />
            <div className="flex-1 h-10 rounded-lg bg-white/20 border border-white/20" />
            <div className="flex-1 h-10 rounded-lg bg-white/20 border border-white/20" />
          </div>
        </div>

        {/* Accent dot */}
        <div
          className="absolute bottom-3 right-3 w-2 h-2 rounded-full opacity-50"
          style={{ backgroundColor: accent }}
        />
      </div>
    </div>
  );
}

/* ── Main Section ── */

export default function SelectedWorkSection() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 py-20 sm:py-28">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8, y: 14 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-full text-sm font-medium text-gray-500 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Selected Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight mb-4 leading-[1.15] text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        >
          Ideas Built Into{' '}
          <span className="text-gradient">Digital Experiences</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-500 text-[0.88rem] max-w-xl mx-auto leading-relaxed text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
        >
          Explore some of the digital products, websites, and solutions we have designed and developed.
        </motion.p>

        {/* ── Featured project ── */}
        <motion.div
          className="mb-5 lg:mb-6"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <Link href="/contact" className="group block">
            <div className="relative rounded-2xl border border-gray-200/60 bg-white overflow-hidden transition-all duration-500 hover:border-blue-200/80 hover:shadow-soft-lg hover:-translate-y-1">
              <div className="relative z-10 grid lg:grid-cols-2 gap-0">
                {/* Mockup */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="group-hover:scale-[1.02] transition-transform duration-500">
                    <BrowserMockup gradient={featured.gradient} accent={featured.accent} />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 lg:pl-2">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100">
                      <span className="text-[0.6rem] font-semibold text-blue-600 uppercase tracking-wider">{featured.label}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-[1.7rem] font-bold text-gray-900 tracking-tight mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {featured.title}
                  </h3>

                  <p className="text-[0.85rem] text-gray-500 leading-relaxed mb-5 max-w-md">
                    {featured.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200/60 text-[0.68rem] text-gray-500 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center gap-2 text-blue-500/70 group-hover:text-blue-600 transition-colors duration-300">
                    <span className="text-[0.82rem] font-medium">View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* ── Smaller projects grid ── */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
            >
              <Link href="/contact" className="group block h-full">
                <div className="relative h-full rounded-2xl border border-gray-200/60 bg-white overflow-hidden transition-all duration-500 hover:border-blue-200/80 hover:shadow-soft-lg hover:-translate-y-1">
                  <div className="relative z-10">
                    {/* Mockup */}
                    <div className="p-4 sm:p-5 pb-0">
                      <div className="group-hover:scale-[1.02] transition-transform duration-500">
                        <BrowserMockup gradient={project.gradient} accent={project.accent} />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 sm:p-6">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <div className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200/60">
                          <span className="text-[0.55rem] font-semibold text-gray-400 uppercase tracking-wider">{project.label}</span>
                        </div>
                      </div>

                      <h3 className="text-[0.95rem] font-bold text-gray-900 tracking-tight mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {project.title}
                      </h3>

                      <p className="text-[0.78rem] text-gray-500 leading-relaxed mb-4">
                        {project.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-gray-50 border border-gray-200/60 text-[0.6rem] text-gray-400 font-medium group-hover:text-blue-500 group-hover:border-blue-100 transition-colors duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA link */}
                      <div className="flex items-center gap-2 text-blue-500/60 group-hover:text-blue-600 transition-colors duration-300">
                        <span className="text-[0.75rem] font-medium">View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent mb-12" />

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <p className="text-gray-500 text-[0.88rem] mb-4">
            Have a project in mind?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3.5 rounded-xl font-medium text-[0.88rem] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-500/35 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
