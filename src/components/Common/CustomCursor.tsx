// components/FigmaCursor.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animation - Figma-like responsiveness
  const springConfig = { damping: 30, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e:any) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleMouseEnter = (e: any) => {
      const target = e.target;
      if (target instanceof Element) {
        if (target.closest('[data-cursor="pointer"]')) {
          setIsHovering(true);
          setCursorVariant('pointer');
        } else if (target.closest('[data-cursor="text"]')) {
          setIsHovering(true);
          setCursorVariant('text');
        } else if (target.closest('button, a, [role="button"]')) {
          setIsHovering(true);
          setCursorVariant('button');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  const getCursorStyles = () => {
    const baseStyles = {
      width: 16,
      height: 16,
      backgroundColor: '#3b82f6', // Blue-500 to match your theme
      borderRadius: '50%',
      scale: 1,
      opacity: 1,
    };

    switch (cursorVariant) {
      case 'button':
        return {
          ...baseStyles,
          width: 32,
          height: 32,
          backgroundColor: 'transparent',
          border: '2px solid #60a5fa', // Blue-400
          scale: 1,
        };
      case 'text':
        return {
          ...baseStyles,
          width: 2,
          height: 20,
          borderRadius: '1px',
          backgroundColor: '#60a5fa',
        };
      case 'pointer':
        return {
          ...baseStyles,
          scale: 1.5,
          backgroundColor: '#60a5fa',
        };
      default:
        return baseStyles;
    }
  };

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        /* Show default cursor on mobile */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
          .figma-cursor {
            display: none !important;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="figma-cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={getCursorStyles()}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
          className="relative"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;