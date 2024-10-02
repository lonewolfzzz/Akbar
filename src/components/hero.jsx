import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [titles, setTitles] = useState({
    title1: 'UI/UX Concept',
    title2: 'Frontend',
    title3: 'Developer'
  });

  useEffect(() => {
    const glitchTimeout = setTimeout(() => {
      startGlitchEffect();
    }, 200);

    return () => clearTimeout(glitchTimeout);
  }, []);

  const startGlitchEffect = () => {
    let iterations = {
      title1: 60,
      title2: 60,
      title3: 60
    };

    const glitchInterval = setInterval(() => {
      setTitles({
        title1: generateErrorText(iterations.title1, 'UI/UX Concept'),
        title2: generateErrorText(iterations.title2, 'Frontend', true),
        title3: generateErrorText(iterations.title3, 'Developer')
      });

      if (iterations.title1 > 11) iterations.title1--;
      if (iterations.title2 > 8) iterations.title2--;
      if (iterations.title3 > 9) iterations.title3--;

      if (
        iterations.title1 === 11 &&
        iterations.title2 === 8 &&
        iterations.title3 === 9
      ) {
        clearInterval(glitchInterval);
      }
    }, 100);
  };

  const generateErrorText = (iterationsLeft, originalText, isTitle2 = false) => {
    const errorChars = '#@$%^&*!?';
    let result = '';

    if (isTitle2) {
        const fixedPattern = 'FRONTEND-'; 
        const randomPartLength = Math.min(5, Math.max(0, iterationsLeft - fixedPattern.length));
        for (let i = 0; i < randomPartLength; i++) {
            result += errorChars.charAt(Math.floor(Math.random() * errorChars.length));
        }
        result += fixedPattern;
    } else {
        for (let i = 0; i < Math.min(iterationsLeft, 14); i++) {
            result += errorChars.charAt(Math.floor(Math.random() * errorChars.length));
        }
    }

    const visibleText = originalText.slice(0, originalText.length - (iterationsLeft - originalText.length));
    return visibleText + result.slice(visibleText.length);
  };

  return (
    <section
      id="hero"
      className="select-none pb-20 pt-20 mt-20"
      style={{ height: '470px', backgroundColor: 'black' }}
    >
      <div className="flex flex-col justify-center h-full">
        {Object.values(titles).map((title, index) => (
          <div key={index} className="max-w-full flex flex-col items-center justify-center mb-2 md:mb-4">
            <motion.h1
              initial={{ opacity: 1 }}
              className="uppercase tracking-wides font-bold text-4xl md:text-7xl lg:text-8xl text-center text-white"
              style={{ minHeight: '100px', lineHeight: '1.2em' }} // Set consistent line-height
            >
              {title}
            </motion.h1>
          </div>
        ))}
      </div>
    </section>
  );
}
