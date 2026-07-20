'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as const;

interface AccordionItemProps {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What services does SmartPixelsSolutions provide?',
    a: 'We provide website development, custom web applications, UI/UX design, branding, social media design, SEO, Google Business Profile optimization, business automation, and AI integrations.',
  },
  {
    q: 'Do you work with small and local businesses?',
    a: 'Yes. We work with startups, local businesses, and growing companies. Our solutions can be customized according to the business goals, requirements, and budget.',
  },
  {
    q: 'How much does a website cost?',
    a: 'The cost depends on the type of website, features, design requirements, and integrations. After understanding your requirements, we provide a clear project quotation.',
  },
  {
    q: 'How long does a website project take?',
    a: 'A simple business website can usually be completed within a few weeks. More complex platforms and custom applications require additional time depending on their scope.',
  },
  {
    q: 'Can you maintain my website after launch?',
    a: 'Yes. We can provide ongoing website maintenance, updates, technical support, backups, and improvements.',
  },
  {
    q: 'Do you provide custom solutions or only fixed packages?',
    a: 'Both. We offer suitable packages for common business needs and can also build fully custom solutions for unique requirements.',
  },
  {
    q: 'Can you help improve an existing website?',
    a: 'Yes. We can improve the design, performance, responsiveness, SEO, functionality, and overall user experience of an existing website.',
  },
  {
    q: 'Do you provide social media management?',
    a: 'Yes. Depending on the selected service, we can help with content planning, social media designs, captions, posting, and digital presence management.',
  },
  {
    q: 'Can you integrate AI into my business?',
    a: 'Yes. We can integrate AI APIs and automation into suitable business workflows such as chat assistants, lead handling, content generation, and other custom solutions.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply contact us and tell us about your business or project. We will understand your requirements and recommend the most suitable solution.',
  },
];

function AccordionItem({ faq, index, isOpen, onToggle }: AccordionItemProps) {
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: EASE }}
      className={`rounded-xl border transition-all duration-300 ${
        isOpen
          ? 'border-blue-300 bg-blue-50/50 shadow-[0_0px_30px_-8px_rgba(37,99,235,0.1)]'
          : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-[0_2px_20px_-4px_rgba(37,99,235,0.06)]'
      }`}
    >
      <button
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="flex items-center justify-between w-full gap-4 p-5 sm:p-6 text-left"
      >
        <span className={`text-[0.88rem] sm:text-[0.92rem] font-medium transition-colors duration-300 ${
          isOpen ? 'text-gray-900' : 'text-gray-700'
        }`}>
          {faq.q}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-blue-500/10'
            : 'bg-gray-100'
        }`}>
          <Plus
            className={`w-4 h-4 transition-all duration-300 ${
              isOpen ? 'text-blue-600 rotate-45' : 'text-gray-400 rotate-0'
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={questionId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-[0.82rem] sm:text-[0.85rem] text-gray-500 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="relative bg-[#F8FAFC] text-gray-900">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left: Header — sticky */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-40" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
                </span>
                <span className="text-[0.65rem] font-semibold text-blue-600 uppercase tracking-[0.2em]">
                  FAQ
                </span>
              </div>
            </motion.div>

            {/* Heading — stacked */}
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight mb-5 leading-[1.1]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            >
              <span className="text-gray-900">Questions</span>
              <br />
              <span className="text-gray-900">Before We</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Get Started?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-500 text-[0.88rem] max-w-md leading-relaxed mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
            >
              Here are answers to some of the most common questions businesses ask before starting a digital project.
            </motion.p>

            {/* Contact card */}
            <motion.div
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="text-[0.92rem] font-semibold text-gray-900 mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                Still have questions?
              </h4>
              <p className="text-[0.8rem] text-gray-500 leading-relaxed mb-4">
                Can&apos;t find what you&apos;re looking for? Our team is happy to help you with any specific questions about your project.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[0.82rem] font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Get in touch
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <div className="flex flex-col gap-3" role="list">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
