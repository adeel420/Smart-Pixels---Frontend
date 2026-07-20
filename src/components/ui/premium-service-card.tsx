'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface PremiumServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export default function PremiumServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  index,
}: PremiumServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const spotlightY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    (values: number[]) => {
      const sx = values[0];
      const sy = values[1];
      return `radial-gradient(650px circle at ${(sx + 0.5) * 100}% ${(sy + 0.5) * 100}%, rgba(59,130,246,0.09), transparent 55%)`;
    }
  );

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 220,
    damping: 22,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className='group relative flex flex-col'
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '800px' }}
    >
      <motion.div
        className='relative h-full rounded-[18px] border border-white/[0.06] bg-white/[0.025] backdrop-blur-xl overflow-hidden flex flex-col transition-colors duration-300 group-hover:border-blue-500/20'
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Spotlight effect */}
        <motion.div
          className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[18px]'
          style={{ background: spotlightBg }}
        />

        {/* Hover gradient overlay */}
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 rounded-[18px] bg-gradient-to-br from-blue-500/[0.05] via-transparent to-sky-400/[0.03] pointer-events-none' />

        {/* Top accent line */}
        <div className='absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-400/30 transition-all duration-500' />

        {/* Content */}
        <div className='relative z-10 flex flex-col h-full px-6 pt-7 pb-6'>
          {/* Icon */}
          <div className='mb-4'>
            <div className='w-12 h-12 rounded-[14px] bg-gradient-to-br from-blue-500/12 to-blue-600/[0.04] border border-blue-500/10 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-600/8 group-hover:border-blue-400/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-400'>
              <motion.div
                animate={isHovered ? { rotate: 4, scale: 1.15 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <Icon className='w-5.5 h-5.5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300' />
              </motion.div>
            </div>
          </div>

          {/* Title */}
          <h3 className='text-white/[0.92] font-semibold text-[0.95rem] mb-1.5 tracking-tight leading-snug'>
            {title}
          </h3>

          {/* Description */}
          <p className='text-gray-400/60 text-[0.78rem] leading-[1.6] mb-4 line-clamp-2'>
            {description}
          </p>

          {/* Tech tags */}
          <div className='flex flex-wrap gap-1.5 mb-5'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='px-2 py-[3px] text-[0.62rem] font-medium text-blue-300/60 bg-blue-500/[0.06] border border-blue-500/[0.08] rounded-md tracking-wide group-hover:bg-blue-500/[0.12] group-hover:text-blue-300/80 group-hover:border-blue-500/15 transition-all duration-300'
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Spacer */}
          <div className='flex-1' />

          {/* Divider */}
          <div className='w-full h-[1px] bg-white/[0.04] mb-4 group-hover:bg-white/[0.07] transition-colors duration-400' />

          {/* Learn More */}
          <div className='flex items-center gap-2 text-[0.8rem] font-medium text-blue-400/70 group-hover:text-blue-300 transition-colors duration-300'>
            <span>Learn More</span>
            <motion.div
              animate={isHovered ? { x: 6 } : { x: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ArrowRight className='w-3.5 h-3.5' />
            </motion.div>
          </div>
        </div>

        {/* Bottom corner glow */}
        <div className='absolute -bottom-14 -right-14 w-40 h-40 bg-blue-500/[0.06] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none' />

        {/* Subtle border glow on hover */}
        <div className='absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_30px_rgba(59,130,246,0.04)]' />
      </motion.div>
    </motion.div>
  );
}
