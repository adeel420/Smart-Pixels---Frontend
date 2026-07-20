"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Shield,
  Zap,
  Globe,
  Sparkles,
  ChevronRight,
  Play,
} from "lucide-react";

const floatingShapes = [
  { size: 320, x: "10%", y: "15%", color: "#2563EB", opacity: 0.07, blur: 80, delay: 0 },
  { size: 250, x: "75%", y: "10%", color: "#38BDF8", opacity: 0.06, blur: 70, delay: 1 },
  { size: 400, x: "60%", y: "65%", color: "#1E3A8A", opacity: 0.08, blur: 90, delay: 2 },
  { size: 180, x: "20%", y: "70%", color: "#2563EB", opacity: 0.05, blur: 60, delay: 0.5 },
];

const codeLines = [
  { text: "const", color: "text-purple-400", content: " future = " },
  { text: "await", color: "text-blue-400", content: " build(" },
  { text: '"innovation"', color: "text-green-400", content: ");" },
  { text: " ", color: "", content: "" },
  { text: "return", color: "text-purple-400", content: " success;" },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "30+", label: "Happy Clients", icon: Sparkles },
  { value: "3+", label: "Years Experience", icon: Shield },
];

const techStack = [
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "⬡" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🎨" },
];

function MouseGlow() {
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    const el = document.getElementById("hero-section");
    if (el) el.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      style={{ x: smoothX, y: smoothY }}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[100px]" />
    </motion.div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(37, 99, 235, 0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(56, 189, 248, 0.08) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F172A]" />
    </div>
  );
}

function FloatingShapes() {
  return (
    <>
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full animate-float${i === 1 ? "-delayed" : i >= 2 ? "-slow" : ""}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${shape.color}, transparent)`,
            opacity: shape.opacity,
            filter: `blur(${shape.blur}px)`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: shape.opacity }}
          transition={{
            duration: 2,
            delay: shape.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
}

function CodeSnippet() {
  return (
    <motion.div
      className="relative hidden lg:block"
      initial={{ opacity: 0, x: 60, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-strong rounded-[20px] p-6 shadow-soft-lg animate-pulse-glow max-w-md">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs text-gray-400 font-code">smart-pixels.js</span>
        </div>
        <div className="font-code text-sm leading-relaxed space-y-1">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
              className="flex"
            >
              <span className="text-gray-500 w-6 text-right mr-4 select-none">{i + 1}</span>
              <span className={line.color}>{line.text}</span>
              <span className="text-gray-300">{line.content}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <div className="w-2 h-4 bg-blue-400 rounded-sm animate-pulse" />
          <span className="text-xs text-gray-500">Ready to deploy</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute -top-4 -right-4 glass rounded-[12px] p-3 flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <Zap className="w-4 h-4 text-yellow-400" />
        <span className="text-xs font-medium text-white">Lightning Fast</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 glass rounded-[12px] p-3 flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.3, type: "spring", stiffness: 200 }}
      >
        <Globe className="w-4 h-4 text-accent" />
        <span className="text-xs font-medium text-white">Global Reach</span>
      </motion.div>
    </motion.div>
  );
}

function HeroBadge() {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full mb-8"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span className="text-sm font-medium text-gray-300">
        Crafting Digital Experiences That Grow Businesses
      </span>
    </motion.div>
  );
}

function HeroHeading() {
  const words1 = ["We", " Create"];
  const words2 = ["Digital", " Experiences"];
  const words3 = ["That", " Drive", " Results"];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
  };

  const word = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.h1
      className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 font-heading"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <span className="block text-white">
        {words1.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-3">
            {w}
          </motion.span>
        ))}
      </span>
      <span className="block text-gradient mt-1">
        {words2.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-3">
            {w}
          </motion.span>
        ))}
      </span>
      <span className="block text-white mt-1">
        {words3.map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-3">
            {w}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );
}

function HeroSubtitle() {
  return (
    <motion.p
      className="text-lg text-center md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-body"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      We help your customers find you online, automate repetitive work, and build
      digital products that scale — so you can focus on running your business.
    </motion.p>
  );
}

function HeroButtons() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/contact"
        className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-[12px] font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative flex items-center gap-2">
          Start Your Project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </Link>

      <Link
        href="/portfolio"
        className="group inline-flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-[12px] font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
      >
        <Play className="w-4 h-4" />
        <span>View Our Work</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
}

function TechStack() {
  return (
    <motion.div
      className="flex flex-wrap items-center gap-3 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-xs uppercase tracking-widest text-gray-500 mr-2 font-body">
        Built with
      </span>
      {techStack.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="glass rounded-[12px] px-3 py-1.5 flex items-center gap-1.5 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
          whileHover={{ scale: 1.05, y: -2 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 + i * 0.1, duration: 0.3 }}
        >
          <span className="text-sm">{tech.icon}</span>
          {tech.name}
        </motion.div>
      ))}
    </motion.div>
  );
}

function StatsBar() {
  return (
    <motion.div
      className="mt-16 flex flex-wrap gap-8 lg:gap-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 + i * 0.15, duration: 0.4 }}
        >
          <div className="w-10 h-10 rounded-[12px] bg-primary/10 border border-primary/20 flex items-center justify-center">
            <stat.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white font-heading">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
      <motion.div
        className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1"
        animate={{ borderColor: ["rgba(75,85,99,0.5)", "rgba(37,99,235,0.5)", "rgba(75,85,99,0.5)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-primary"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
    >
      <MouseGlow />
      <GridBackground />
      <FloatingShapes />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <HeroBadge />
            <HeroHeading />
            <HeroSubtitle />
            <HeroButtons />
            <TechStack />
            <StatsBar />
          </div>

          <div className="relative">
            <CodeSnippet />
          </div>
        </div>
      </div>

      <ScrollIndicator />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-dark to-transparent z-10" />
    </section>
  );
}
