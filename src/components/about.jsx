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
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const typedRef1 = useRef(null);
  const typedRef2 = useRef(null);
  const typedRef3 = useRef(null);
  
  const [showTikTokLink, setShowTikTokLink] = useState(false);

  useEffect(() => {
    let typed1, typed2, typed3;

    const options1 = {
      strings: ["I am an independent frontend developer, UI/UX designer, and creator based in Indonesia."],
      typeSpeed: 20,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
      onStringTyped: () => {
        // Start typing the second text once the first one is done
        typed2 = new Typed(typedRef2.current, options2);
      },
    };

    const options2 = {
      strings: ["I specialize in crafting elevated, intuitive, and minimalistic designs for startups and small businesses to help them stand out in the digital landscape with a powerful impact."],
      typeSpeed: 20,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
      onStringTyped: () => {
        // Start typing the third text once the second one is done
        typed3 = new Typed(typedRef3.current, options3);
      },
    };

    const options3 = {
      strings: ["When I am not developing or designing, I enjoy creating videos that show about my frontend development, productivity, and design on "],
      typeSpeed: 20,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
      showCursor: false,
      onStringTyped: () => {
        setShowTikTokLink(true);
      },
    };

    // Start the first typing effect
    typed1 = new Typed(typedRef1.current, options1);

    return () => {
      // Cleanup to avoid memory leaks
      if (typed1) {
        typed1.destroy();
      }
      if (typed2) {
        typed2.destroy();
      }
      if (typed3) {
        typed3.destroy();
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="select-none pt-2 bg-black rounded-bl-2xl rounded-br-2xl"
    >
      <motion.div
        className="p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg"
        initial="hidden"
        animate={imageInView || textInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row gap-8 pb-8">
          {/* Image section */}
          <motion.div
            className="w-full md:w-1/2 overflow-hidden rounded-md"
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? 'visible' : 'hidden'}
            variants={itemVariants}
          >
            <img
              src="/assets/profile2.webp" // Use a single image
              alt="profile"
              className="z-1 mt-10"
              width="500"
              height="500"
            />
          </motion.div>

          {/* Text section */}
          <motion.div
            className="flex flex-col justify-between w-full md:w-1/2"
            ref={textRef}
            initial="hidden"
            animate={textInView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <div className="w-full space-y-4 2xl:space-y-10">
              <motion.h3
                className="mt-7 text-5xl font-semibold leading-tight text-white"
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
                {showTikTokLink && (
                  <a
                    className="underline duration-300 ease-in-out hover:text-secondary-700"
                    href="https://www.tiktok.com/@visualcode2077"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}{' '}Tiktok 📸
                  </a>
                )}
              </motion.p>
            </div>
            {/* Download CV Button */}
            <motion.a
              href="/assets/cv-akbar.pdf"
              download
              className="inline-block mt-4 px-6 py-2 text-lg font-semibold text-center text-white bg-[#1c1c1c] rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105"
            >
              Download My CV
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
