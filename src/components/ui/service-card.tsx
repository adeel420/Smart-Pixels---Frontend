'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
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
      className='group relative'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className='relative h-full rounded-[20px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-md overflow-hidden transition-colors duration-300 group-hover:border-blue-500/30 flex flex-col items-center text-center px-6 py-8 sm:px-7 sm:py-9'
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover glow */}
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px] bg-gradient-to-br from-blue-500/10 via-transparent to-sky-500/5 pointer-events-none' />

        {/* Top accent line */}
        <div className='absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500' />

        {/* Icon */}
        <div className='relative mb-6'>
          <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/20 group-hover:scale-105 transition-all duration-300'>
            <motion.div
              animate={isHovered ? { rotate: 8, scale: 1.1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Icon className='w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300' />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <h3 className='text-white font-semibold text-lg mb-3 tracking-tight leading-snug'>
          {title}
        </h3>
        <p className='text-gray-400 text-sm leading-relaxed mb-6 max-w-[280px]'>
          {description}
        </p>

        {/* Divider */}
        <div className='w-12 h-px bg-white/[0.1] mb-6' />

        {/* Learn More */}
        <div className='flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mt-auto cursor-pointer'>
          <span>Learn More</span>
          <motion.div
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ArrowRight className='w-4 h-4' />
          </motion.div>
        </div>

        {/* Bottom corner glow */}
        <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
      </motion.div>
    </motion.div>
  );
}
