import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [titles, setTitles] = useState({
    title1: 'Graphic Designer',
    title2: 'Illustrator',
    title3: 'Editor'
  });

  useEffect(() => {
    // Start glitch effect after a brief delay for LCP improvement
    const glitchTimeout = setTimeout(() => {
      startGlitchEffect();
    }, 200); // Short delay to show content quickly

    return () => clearTimeout(glitchTimeout);
  }, []);

  const startGlitchEffect = () => {
  let iterations = {
    title1: 60,
    title2: 60,
    title3: 60
  };

  const finalLengths = {
    title1: 'Graphic Designer'.length,
    title2: 'Illustrator'.length,
    title3: 'Editor'.length
  };

  const glitchInterval = setInterval(() => {
    setTitles({
      title1: generateErrorText(iterations.title1, 'Graphic Designer'),
      title2: generateErrorText(iterations.title2, 'Illustrator', true),
      title3: generateErrorText(iterations.title3, 'Editor')
    });

    // 🔥 decrement sampai panjang asli
    if (iterations.title1 > finalLengths.title1) iterations.title1--;
    if (iterations.title2 > finalLengths.title2) iterations.title2--;
    if (iterations.title3 > finalLengths.title3) iterations.title3--;

    // ✅ stop kalau semua sudah selesai
    if (
      iterations.title1 === finalLengths.title1 &&
      iterations.title2 === finalLengths.title2 &&
      iterations.title3 === finalLengths.title3
    ) {
      clearInterval(glitchInterval);

      // 🔥 paksa final text (anti bug sisa simbol)
      setTitles({
        title1: 'Graphic Designer',
        title2: 'Illustrator',
        title3: 'Editor'
      });
    }
  }, 100);
};

  const generateErrorText = (iterationsLeft, originalText, isTitle2 = false) => {
  const errorChars = '#@$%^&*!?';
  const length = originalText.length;

  let visibleCount = length - (iterationsLeft - length);
  visibleCount = Math.max(0, Math.min(length, visibleCount));

  let result = originalText.slice(0, visibleCount);

  // sisa karakter = random
  for (let i = visibleCount; i < length; i++) {
    result += errorChars.charAt(Math.floor(Math.random() * errorChars.length));
  }

  // khusus title2
  if (isTitle2 && visibleCount === length) {
    result += '-';
  }

  return result;
};

  
  
  
  
  
  
  return (
    <section
      id="hero"
      className="select-none pb-20 pt-20 mt-20"
      style={{ height: '470px', backgroundColor: 'black' }}
    >
      <div className="flex flex-col justify-center md:justify-center lg:justify-center h-full">
        <div className="max-w-full flex flex-col items-center justify-center mb-2 md:mb-4">
          <motion.h1
            initial={{ opacity: 1 }}
            className="uppercase tracking-wides font-bold text-4xl md:text-7xl lg:text-8xl text-center text-white"
            style={{ minHeight: '100px' }} // Tentukan tinggi tetap
          >
            {titles.title1}
          </motion.h1>
        </div>
        <div className="max-w-full flex flex-col items-center justify-center mb-2 md:mb-4">
          <motion.h1
            initial={{ opacity: 1 }}
            className="uppercase tracking-wides font-bold text-4xl md:text-7xl lg:text-8xl text-center stroke-none md:text-transparent lg:text-transparent stroke-text-dark"
            style={{ minHeight: '100px' }} // Tentukan tinggi tetap
          >
            {titles.title2}
          </motion.h1>
        </div>
        <div className="max-w-full flex flex-col items-center justify-center mb-2 md:mb-4">
          <motion.h1
            initial={{ opacity: 1 }}
            className="uppercase tracking-wides font-bold text-4xl md:text-7xl lg:text-8xl text-center text-white"
            style={{ minHeight: '100px' }} // Tentukan tinggi tetap
          >
            {titles.title3}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
