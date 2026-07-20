"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

export interface CategoryListProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, { once: true, margin: '-60px' });

  return (
    <div className={cn("w-full text-white p-0", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/80 to-blue-600 mb-6 text-white shadow-lg shadow-blue-500/20">
              {headerIcon}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tight">{title}</h2>
          {subtitle && (
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400/70">{subtitle}</h3>
          )}
        </div>

        {/* Categories List */}
        <div ref={listRef} className="space-y-3 -mt-14">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ease-in-out cursor-pointer rounded-xl",
                  hoveredItem === category.id
                    ? 'min-h-[100px] sm:min-h-[92px] border-blue-500/50 shadow-[0_0_20px_-4px_rgba(59,130,246,0.25),0_0_40px_-8px_rgba(59,130,246,0.12)] bg-blue-500/5'
                    : 'min-h-[72px] sm:min-h-[64px] border-white/[0.06] hover:border-blue-500/30'
                )}
              >
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-blue-400" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-blue-400" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-blue-400" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-blue-400" />
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between h-full px-6 py-2 md:px-8 md:py-3">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-bold transition-colors duration-300",
                        category.featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl lg:text-2xl',
                        hoveredItem === category.id ? 'text-blue-400' : 'text-white/90'
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "mt-1 transition-colors duration-300 text-sm md:text-base",
                          hoveredItem === category.id ? 'text-white/80' : 'text-gray-400/60'
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {category.icon && (
                    <div
                      className={cn(
                        "text-blue-400 transition-all duration-300",
                        hoveredItem === category.id
                          ? 'opacity-100 translate-x-0 rotate-12 scale-110'
                          : 'opacity-0 translate-x-2 rotate-0 scale-100'
                      )}
                    >
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
