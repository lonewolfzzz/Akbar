import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  // Trigger untuk animasi gambar
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Trigger untuk animasi teks
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const typedRef1 = useRef(null);
  const typedRef2 = useRef(null);
  const typedRef3 = useRef(null);
  
  // State to manage the visibility of the TikTok link
  const [showTikTokLink, setShowTikTokLink] = useState(false);

  useEffect(() => {
    const options1 = {
      strings: ["I am an independent frontend developer, UI/UX designer, and creator based in Indonesia."],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const options2 = {
      strings: ["I specialize in crafting elevated, intuitive, and minimalistic designs for startups and small businesses to help them stand out in the digital landscape with a powerful impact."],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    const options3 = {
      strings: ["When I am not developing or designing, I enjoy creating videos that show about my frontend development, productivity, and design on "],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
      showCursor: false,
      onStringTyped: () => {
        // Show the TikTok link after the typing is complete
        setShowTikTokLink(true);
      },
    };

    const typed1 = new Typed(typedRef1.current, options1);
    const typed2 = new Typed(typedRef2.current, options2);
    const typed3 = new Typed(typedRef3.current, options3);

    return () => {
      typed1.destroy();
      typed2.destroy();
      typed3.destroy();
    };
  }, []);

  return (
    <section
      id="about"
      className="select-none pt-2 bg-[#1c1c1c] rounded-2xl"
    >
      <motion.div
        className="p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg"
        initial="hidden"
        animate={imageInView || textInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="flex flex-col items-start gap-8 md:flex-row lg:gap-10 pb-8">
          {/* Image section */}
          <motion.div
            className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2"
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? 'visible' : 'hidden'}
            variants={itemVariants}
          >
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="z-1 mt-10"
            />
          </motion.div>

          {/* Text section */}
          <motion.div
            className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2"
            ref={textRef}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <div className="w-full space-y-4 2xl:space-y-10">
              <motion.h3
                className="text-5xl font-semibold leading-tight text-white"
                variants={itemVariants}
              >
                A brief intro, about me?
              </motion.h3>
              <motion.p className="text-2xl text-gray-200" variants={itemVariants}>
                <span ref={typedRef1} />
              </motion.p>
              <motion.p className="text-2xl text-gray-200" variants={itemVariants}>
                <span ref={typedRef2} />
              </motion.p>
              <motion.p className="text-body-1 text-2xl text-gray-200" variants={itemVariants}>
                <span ref={typedRef3} />
                {showTikTokLink && ( // Show the TikTok link only after typing is complete
                  <a
                    className="underline duration-300 ease-in-out hover:text-secondary-700"
                    href="https://www.tiktok.com/@visualcode2077" // Replace with your TikTok URL
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security improvement
                  >
                    {' '}{' '}Tiktok 📸
                  </a>
                )}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
