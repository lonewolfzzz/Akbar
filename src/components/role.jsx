import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Memperpanjang jeda antar elemen menjadi 0.5 detik
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: 'easeInOut' } // Memperpanjang durasi animasi menjadi 1 detik
  },
};

export default function Role() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="role"
      className="select-none flex my-20 md:my-[12%] px-4 py-10 flex-col items-center justify-center overflow-hidden"
      aria-label="Role Section"
      ref={ref}
    >
      <motion.div
        className="flex flex-col w-full items-start space-y-2" // Jarak antar teks
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Teks dengan ukuran besar yang rata kiri */}
        <motion.h1
          className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-tight"
          variants={itemVariants}
        >
          I create elevating digital
        </motion.h1>
        <motion.h1
          className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-tight"
          variants={itemVariants}
        >
          experiences that inspire
        </motion.h1>
        <motion.h1
          className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-tight"
          variants={itemVariants}
        >
          and connect with people
        </motion.h1>
        <motion.h1
          className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-medium leading-tight"
          variants={itemVariants}
        >
          through development and design.
        </motion.h1>
      </motion.div>
    </section>
  );
}
