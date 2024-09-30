import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Hero() {
  const controls = useAnimation();

  // State for glitching texts
  const [titles, setTitles] = useState({
    title1: '+ERROR+$!#^',
    title2: '&*^#^_404',
    title3: '$!#$^*&+'
  });

  const originalTitles = {
    title1: 'UI/UX Concept',
    title2: 'Frontend',
    title3: 'Developer'
  };

  // Maximum length of random characters to display
  const maxRandomChars = 14;

  useEffect(() => {
    // Start zoom animation on mount
    controls.start({ 
      opacity: 1, 
      y: 0, 
      scale: 1.2, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }).then(() => {
      // Trigger glitch effect after zoom animation is done
      startGlitchEffect();
    });
  }, [controls]);

  const startGlitchEffect = () => {
    let iterations = {
      title1: 60, // Increased number of iterations for longer glitch
      title2: 60,
      title3: 60
    };

    const glitchInterval = setInterval(() => {
      setTitles({
        title1: generateErrorText(iterations.title1, originalTitles.title1),
        title2: generateErrorText(iterations.title2, originalTitles.title2, true), // Special flag for title2
        title3: generateErrorText(iterations.title3, originalTitles.title3)
      });

      // Reduce the number of random error characters progressively
      if (iterations.title1 > originalTitles.title1.length) iterations.title1--;
      if (iterations.title2 > originalTitles.title2.length) iterations.title2--;
      if (iterations.title3 > originalTitles.title3.length) iterations.title3--;

      // Stop the glitch effect once all titles are fully revealed
      if (
        iterations.title1 === originalTitles.title1.length &&
        iterations.title2 === originalTitles.title2.length &&
        iterations.title3 === originalTitles.title3.length
      ) {
        clearInterval(glitchInterval);
      }
    }, 100); // Fast glitch (50ms interval)
  };

  const generateErrorText = (iterationsLeft, originalText, isTitle2 = false) => {
    const errorChars = '#@$%^&*!?';
    let result = '';

    // Create random error characters for the title based on remaining iterations
    for (let i = 0; i < Math.min(iterationsLeft, maxRandomChars); i++) { // Limit to maxRandomChars
      result += errorChars.charAt(Math.floor(Math.random() * errorChars.length));
    }

    // Calculate how much of the original text to show
    const visibleText = originalText.slice(0, originalText.length - (iterationsLeft - originalText.length));

    // Special handling for title2 ("Frontend")
    if (isTitle2) {
      const completedText = visibleText.length >= originalText.length - 1 ? "Frontend" : visibleText;
      return completedText; // Ensure last character is 'D'
    }

    // Ensure three lines of error text for each title
    return (visibleText + result.slice(visibleText.length)).padEnd(originalText.length + maxRandomChars, ' ');
  };

  return (
    <section id="hero" className="select-none pb-20 pt-20 mt-20 rounded-2xl" style={{ height: '480px', backgroundColor: 'black' }}>
      <div className="flex flex-col justify-center">
        <div className="max-w-full flex flex-col items-center justify-center mb-4">
          <motion.h1
            initial={{ opacity: 0, y: '-100%', scale: 1 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="uppercase tracking-wides font-bold text-4xl md:text-7xl lg:text-8xl text-center text-white"
          >
            {titles.title1}
          </motion.h1>
        </div>
        <div className="max-w-full flex flex-col items-center justify-center mb-4">
          <motion.h1
            initial={{ opacity: 0, y: '-100%', scale: 1 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="uppercase tracking-wides font-bold text-4xl md:text-7xl lg:text-8xl text-center stroke-none md:text-transparent lg:text-transparent stroke-text-dark"
          >
            {titles.title2}
          </motion.h1>
        </div>
        <div className="max-w-full flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: '-100%', scale: 1 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="uppercase tracking-wides font-bold text-4xl md:text-7xl lg:text-8xl text-center text-white"
          >
            {titles.title3}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
