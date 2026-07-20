"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const PROJECTS = [
  {
    id: "01",
    title: "Real Estate Platform",
    description:
      "A modern property listing platform designed to help users discover, search, and explore properties online with advanced filtering and map integration.",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    label: "Client Project",
    gradient: "from-blue-600/25 via-indigo-500/20 to-blue-400/15",
    accent: "#3B82F6",
  },
  {
    id: "02",
    title: "QR Menu Platform",
    description:
      "A digital menu solution that helps restaurants create and manage modern QR-based menus with real-time updates and ordering capabilities.",
    tags: ["React", "Node.js", "MongoDB"],
    label: "Client Project",
    gradient: "from-emerald-600/25 via-teal-500/20 to-cyan-400/15",
    accent: "#10B981",
  },
  {
    id: "03",
    title: "Freelancing Platform",
    description:
      "An AI-powered freelancing platform designed to connect businesses and freelancers through a modern digital experience with smart matching.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    label: "Concept Project",
    gradient: "from-violet-600/25 via-purple-500/20 to-fuchsia-400/15",
    accent: "#8B5CF6",
  },
  {
    id: "04",
    title: "Custom Business Solutions",
    description:
      "Scalable web applications and dashboards designed around specific business requirements for inventory, bookings, and internal operations.",
    tags: ["Next.js", "TypeScript", "APIs", "Automation"],
    label: "Client Project",
    gradient: "from-orange-600/25 via-amber-500/20 to-yellow-400/15",
    accent: "#F59E0B",
  },
];

const AUTO_PLAY_DURATION = 5000;

function BrowserMockup({ gradient, accent }: { gradient: string; accent: string }) {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-white/5">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.03]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-5 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center px-3">
            <span className="text-[0.6rem] text-gray-500 truncate">smartpixelssolutions.com</span>
          </div>
        </div>
      </div>
      <div className={`relative flex-1 h-[calc(100%-42px)] bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <div className="absolute inset-4 flex flex-col gap-3">
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
          <div className="flex-1 flex flex-col justify-center gap-2.5 mt-2">
            <div className="w-3/4 h-3 rounded bg-white/30" />
            <div className="w-1/2 h-3 rounded bg-white/25" />
            <div className="w-20 h-6 rounded-lg bg-white/25 mt-2" />
          </div>
          <div className="flex gap-2 mb-1">
            <div className="flex-1 h-10 rounded-lg bg-white/20 border border-white/20" />
            <div className="flex-1 h-10 rounded-lg bg-white/20 border border-white/20" />
            <div className="flex-1 h-10 rounded-lg bg-white/20 border border-white/20" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full opacity-50" style={{ backgroundColor: accent }} />
      </div>
    </div>
  );
}

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative bg-[#0a0e1a] text-white overflow-hidden h-screen max-h-[900px]">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-sky-400/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise pointer-events-none" />

      <div className="relative z-10 h-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-14 py-8 sm:py-10 lg:py-12 flex flex-col">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-4 lg:mb-5"
          initial={{ opacity: 0, scale: 0.8, y: 14 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
            </span>
            <span className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-[0.2em]">
              Selected Work
            </span>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch flex-1 min-h-0">
          {/* Left Column: Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 min-h-0">
            <div className="space-y-1 mb-4 lg:mb-5">
              <motion.h2
                className="tracking-tight text-balance text-2xl sm:text-3xl lg:text-[2.2rem] font-medium text-white/90 leading-[1.15]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                Ideas Built Into{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </motion.h2>
              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-[0.3em] block ml-0.5">
                (PROJECTS)
              </span>
            </div>

            <div className="flex flex-col space-y-0 overflow-y-auto min-h-0 flex-1" style={{ scrollbarWidth: 'none' }}>
              {PROJECTS.map((project, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-3 lg:gap-4 py-3.5 lg:py-4 text-left transition-all duration-500 border-t border-white/[0.06] first:border-0 shrink-0",
                      isActive
                        ? "text-white"
                        : "text-gray-500/60 hover:text-white/80"
                    )}
                  >
                    {/* Progress bar */}
                    <div className="absolute left-[-12px] md:left-[-20px] top-0 bottom-0 w-[2px] bg-white/[0.06]">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-blue-500 origin-top"
                          initial={{ height: "0%" }}
                          animate={isPaused ? { height: "0%" } : { height: "100%" }}
                          transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                        />
                      )}
                    </div>

                    <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50 shrink-0">
                      /{project.id}
                    </span>

                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <span
                        className={cn(
                          "text-lg md:text-xl lg:text-2xl font-normal tracking-tight transition-colors duration-500",
                          isActive ? "text-white" : ""
                        )}
                      >
                        {project.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400/70 text-[0.78rem] md:text-[0.82rem] font-normal leading-relaxed max-w-sm pb-1">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[0.62rem] text-gray-400 font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Preview */}
          <div className="lg:col-span-7 flex flex-col min-h-0 order-1 lg:order-2">
            <div
              className="relative group/gallery flex-1 min-h-0"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative h-full min-h-[250px] lg:min-h-0 rounded-2xl md:rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <BrowserMockup
                      gradient={PROJECTS[activeIndex].gradient}
                      accent={PROJECTS[activeIndex].accent}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 flex gap-2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all active:scale-90"
                    aria-label="Previous"
                  >
                    <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all active:scale-90"
                    aria-label="Next"
                  >
                    <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
