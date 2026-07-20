'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const SPRING = { damping: 25, stiffness: 250, mass: 0.5 };
const SPRING_SLOW = { damping: 35, stiffness: 200, mass: 0.8 };

const InteractiveSelector = 'a, button, [role="button"], input, textarea, select, label, [data-cursor], .cursor-pointer';

export default function AnimatedCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, SPRING);
  const dotY = useSpring(cursorY, SPRING);

  const ringX = useSpring(cursorX, SPRING_SLOW);
  const ringY = useSpring(cursorY, SPRING_SLOW);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!visible) setVisible(true);
  }, [cursorX, cursorY, visible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest?.(InteractiveSelector)) {
      setHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest?.(InteractiveSelector)) {
      setHovering(false);
    }
  }, []);

  const handleMouseDown = useCallback(() => setClicking(true), []);
  const handleMouseUp = useCallback(() => setClicking(false), []);

  const handleMouseLeave = useCallback(() => setVisible(false), []);
  const handleMouseEnter = useCallback(() => setVisible(true), []);

  useEffect(() => {
    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Add cursor-none to body
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-blue-400/40 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          opacity: visible ? 1 : 0,
          borderWidth: hovering ? 2 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: clicking ? 4 : hovering ? 6 : 8,
          height: clicking ? 4 : hovering ? 6 : 8,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
