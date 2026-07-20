'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket, Shield, Sparkles, Calendar, Globe, Palette, LayoutDashboard, PenTool, Megaphone, MapPin, Search, Settings, Brain } from 'lucide-react';
import AnimatedGradientBackground from './animated-gradient-background';
import { ExpandingCards, CardItem } from './expanding-cards';
import PixelParticles from './pixel-particles';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const services: CardItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Professional online presence, credibility, and lead generation with responsive websites.',
    imgSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200',
    icon: <Globe size={24} />,
    linkHref: '/services',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Consistent, memorable identity — logo, colors, and business materials.',
    imgSrc: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200',
    icon: <Palette size={24} />,
    linkHref: '/services',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-friendly design for complex platforms — booking systems, e-commerce, dashboards.',
    imgSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200',
    icon: <LayoutDashboard size={24} />,
    linkHref: '/services',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Ongoing visual needs — menus, flyers, social posts, and signage.',
    imgSrc: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200',
    icon: <PenTool size={24} />,
    linkHref: '/services',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Consistent online presence, customer engagement, and brand recall.',
    imgSrc: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200',
    icon: <Megaphone size={24} />,
    linkHref: '/services',
  },
  {
    id: 'google-business-profile',
    title: 'Google Business Profile',
    description: 'Local search visibility and walk-in customer acquisition.',
    imgSrc: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200',
    icon: <MapPin size={24} />,
    linkHref: '/services',
  },
  {
    id: 'basic-seo',
    title: 'Basic SEO',
    description: 'Organic search ranking for long-term free traffic to your website.',
    imgSrc: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200',
    icon: <Search size={24} />,
    linkHref: '/services',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Security, uptime, and updates — a reliable recurring revenue stream.',
    imgSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200',
    icon: <Settings size={24} />,
    linkHref: '/services',
  },
  {
    id: 'business-automation-ai',
    title: 'Business Automation & AI',
    description: 'WhatsApp auto-reply, booking automation, and AI content — saving time.',
    imgSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200',
    icon: <Brain size={24} />,
    linkHref: '/services',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: Rocket },
  { value: '30+', label: 'Happy Clients', icon: Sparkles },
  { value: '3+', label: 'Years Experience', icon: Shield },
];

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordChild = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F8FAFC]'
    >
      <AnimatedGradientBackground />
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />

      <div className='mt-20 relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center justify-center gap-0'>
        <motion.div
          className='inline-flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-full mb-5'
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className='relative flex h-2 w-2 '>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
            <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500' />
          </span>
          <span className=' text-sm font-medium text-gray-600'>Crafting Digital Experiences That Grow Businesses</span>
        </motion.div>

        <motion.h1
          className='text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[0.8] mb-5 tracking-tight'
          variants={wordContainer}
          initial='hidden'
          animate='visible'
        >
          <span className='block text-gray-900'>
            {'We Create'.split(' ').map((w, i) => (
              <motion.span key={i} variants={wordChild} className='inline-block mr-[0.3em]'>
                {w}
              </motion.span>
            ))}
          </span>
          <span className='block mt-0.5'>
            {'Digital Experiences'.split(' ').map((w, i) => (
              <motion.span key={i} variants={wordChild} className='inline-block mr-[0.3em] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>
                {w}
              </motion.span>
            ))}
          </span>
          <span className='block text-gray-900 mt-0.5'>
            {'That Drive Results'.split(' ').map((w, i) => (
              <motion.span key={i} variants={wordChild} className='inline-block mr-[0.3em]'>
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          className='text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          We help your customers find you online, automate repetitive work, and build
          digital products that scale, so you can focus on running your business.
        </motion.p>

        <motion.div
          className='flex flex-col sm:flex-row gap-3 justify-center mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href='/contact'
            className='group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-7 py-3 rounded-xl font-semibold text-base shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5'
          >
            Start Your Project
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
          </Link>
          <Link
            href='/portfolio'
            className='group inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm border border-gray-200/60 text-gray-700 px-7 py-3 rounded-xl font-semibold text-base hover:bg-white/80 transition-all duration-300 hover:-translate-y-0.5'
          >
            View Our Work
          </Link>
        </motion.div>

        <motion.div
          className='-mt-4 flex flex-wrap justify-center gap-5'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 1.4 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className='flex items-center gap-3'
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
              }}
            >
              <div className='w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center'>
                <stat.icon className='w-4 h-4 text-blue-600' />
              </div>
              <div className='text-left'>
                <div className='text-lg font-bold text-gray-900'>{stat.value}</div>
                <div className='text-[0.65rem] text-gray-400'>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>
        <span className='text-xs text-gray-400 uppercase tracking-widest'>Scroll</span>
        <div className='w-5 h-8 rounded-full border border-gray-300 flex items-start justify-center p-1'>
          <motion.div
            className='w-1.5 h-1.5 rounded-full bg-blue-500'
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div> */}
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky top-0 h-[140vh] bg-[#0a0e1a] text-white overflow-hidden'
      aria-label='Our digital services'
    >
      {/* Gradient mesh background */}
      <div className='absolute inset-0'>
        <div className='absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[140px] animated-blob animated-blob-1' />
        <div className='absolute bottom-[-15%] left-[-8%] w-[600px] h-[600px] bg-sky-400/15 rounded-full blur-[120px] animated-blob animated-blob-2' />
        <div className='absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animated-blob animated-blob-3' />
      </div>

      {/* Pixel grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]' />

      {/* Noise texture */}
      <div className='absolute inset-0 opacity-[0.04] bg-noise pointer-events-none' />

      {/* Particles */}
      <PixelParticles />

      {/* Content */}
      <div className=' relative z-10 h-full flex flex-col max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 py-8 sm:py-10 overflow-y-auto scrollbar-none'>
        {/* Header */}
        <div className='text-center mt-24 mb-6 lg:mb-8 flex-shrink-0'>
          <motion.div
            className=' inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] rounded-full mb-5'
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className='relative flex h-1.5 w-1.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60' />
              <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400' />
            </span>
            <span className='text-[0.65rem] font-semibold text-gray-400 uppercase tracking-[0.2em]'>Our Expertise</span>
          </motion.div>

          <motion.h2
            className=' text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-3 leading-[1.15]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }}
          >
            Digital Solutions That Help{' '}
            <span className='bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent'>
              Businesses Grow
            </span>
          </motion.h2>

          <motion.p
            className='text-gray-400/70 text-[0.88rem] max-w-xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] as const }}
          >
            End-to-end digital services designed to increase credibility, save time, and accelerate growth.
          </motion.p>
        </div>

        {/* Expanding Cards */}
        <motion.div
          className='-mt-48 flex-1 flex items-center justify-center mb-6 lg:mb-8 flex-shrink-0 min-h-0 w-full'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <ExpandingCards items={services} defaultActiveIndex={0} className='h-full max-h-[420px] md:max-h-[400px] mx-auto' />
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          className='text-center flex-shrink-0 pb-1'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h3 className='text-lg sm:text-xl font-semibold text-white/90 mb-2 tracking-tight'>
            Not Sure Which Solution Fits?
          </h3>
          <p className='text-gray-400/60 text-[0.8rem] max-w-md mx-auto mb-5 leading-relaxed'>
            Book a free consultation — we&apos;ll recommend the best strategy for your goals.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Link
              href='/contact'
              className='group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3 rounded-xl font-medium text-[0.82rem] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-500/35 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 hover:-translate-y-0.5'
            >
              <Calendar className='w-4 h-4' />
              Book Free Consultation
              <ArrowRight className='w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300' />
            </Link>
            <Link
              href='/portfolio'
              className='group inline-flex items-center justify-center gap-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] text-gray-300/80 px-7 py-3 rounded-xl font-medium text-[0.82rem] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-0.5'
            >
              View Our Work
              <ArrowRight className='w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300' />
            </Link>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

const Component = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[207vh] bg-[#F8FAFC]'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
      {/* <footer className='bg-[#0a0f1a]'>
        <h1 className='text-[14vw] translate-y-20 leading-[100%] uppercase font-bold text-center bg-gradient-to-r from-blue-400/40 to-sky-400/20 bg-clip-text text-transparent transition-all ease-linear'>
          Smart Pixels
        </h1>
        <div className='bg-[#0F172A] text-white h-32 relative z-10 grid place-content-center text-lg rounded-tr-full rounded-tl-full border-t border-white/5'>
          <Link href='/contact' className='text-gray-400 hover:text-white transition-colors'>
            Let&apos;s build something great together →
          </Link>
        </div>
      </footer> */}
    </>
  );
});

Component.displayName = 'HeroScrollAnimation';

export default Component;
