import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Heading Component: Displays the title of the section
function Heading({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="w-fit text-3xl md:text-6xl lg:text-8xl font-medium uppercase text-black px-5 sm:px-6 md:px-8">
        {title}
      </h1>
    </motion.div>
  );
}

// Project Card Component
function ProjectsUi({ name, img, alt, type, link, year, tools }) {
  return (
    <motion.div
      className="group inline-block overflow-hidden duration-200 ease-linear"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group inline-block overflow-hidden duration-200 ease-linear"
      >
        <motion.img
          whileHover={{ scale: 1.1, borderRadius: '1.5rem' }} // Apply both scale and rounded together
          transition={{ duration: 0.06, ease: 'easeInOut' }} // Ensure smooth transition for both properties
          className="h-8rem md:h-[8rem] lg:h-[16rem] w-screen duration-700 ease-in-out rounded-xl"
          src={img}
          alt={alt}
          width="400"   // Sesuaikan dengan ukuran gambar sebenarnya
          height="300"  // Sesuaikan dengan ukuran gambar sebenarnya
          loading="lazy" // Add this attribute for lazy loading
        />
      </a>
      <div className="select-none mt-4 text-white">
        <div className="flex space-x-2 mb-3">
          <p className="hidden md:hidden lg:block rounded-full text-[#1c1c1c] bg-white text-lg border border-black justify-center items-center px-4 py-1">
            {year}
          </p>
          <p className="hidden md:hidden lg:block rounded-full text-[#1c1c1c] bg-white border text-lg border-black justify-center items-center px-4 py-1">
            {tools}
          </p>
        </div>
        <div className="2xl:space-y-3">
          <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
            {name}
          </h3>
          <p className="text-body-2 2xl:text-4xl font-light text-primary-400">
            {type}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Animation variants for lines
  const lineVariants = {
    hidden: { opacity: 0, y: -50 }, // Garis muncul dari atas
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" aria-label="projects" ref={ref}>
      {/* Garis dengan animasi dari atas dengan delay */}
      <motion.div
        className="w-full h-[10rem] bg-black my-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0 }}
      ></motion.div>
      <motion.div
        className="w-full h-[8rem] bg-black my-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }} // Delay ditambah
      ></motion.div>
      <motion.div
        className="w-full h-[7rem] bg-black my-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }} // Delay lebih lama
      ></motion.div>
      <motion.div
        className="w-full h-[6rem] bg-black my-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
      ></motion.div>
      <motion.div
        className="w-full h-[4rem] bg-black my-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.6 }}
      ></motion.div>
      <motion.div
        className="w-full h-[2rem] bg-black my-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 2 }}
      ></motion.div>
      <motion.div
        className="w-full h-[1rem] bg-black my-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 2.4 }}
      ></motion.div>
      <motion.div
        className="w-full h-[1rem] bg-black my-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 2.8 }}
      ></motion.div>

      <Heading title="Selected </> Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-2 gap-x-8 px-4 sm:px-6 md:px-8">
        <motion.div
          className="bg-black rounded-2xl my-2 py-8 px-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.2 }}
        >
          <ProjectsUi
            link="https://qr-pi-ivory.vercel.app"
            img="./assets/abs1.webp"
            alt="QR Generator mockup"
            name="QR Generator mockup"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • JavaScript • CSS"
          />
        </motion.div>

        <motion.div
          className="bg-black rounded-2xl my-2 py-8 px-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.2 }}
        >
          <ProjectsUi
            link="https://wolf-theta.vercel.app"
            img="./assets/abs2.webp"
            alt="Portofolio"
            name="Portofolio"
            type="Web Design • Frontend Development"
            year="2024"
            tools="NextJS • TailwindCSS • React • TypeScript"
          />
        </motion.div>

        <motion.div
          className="bg-black rounded-2xl my-2 py-8 px-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.2 }}
        >
          <ProjectsUi
            link=""
            img="./assets/abs1.webp"
            alt="Instagram Login Page"
            name="Instagram Login Page"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • JavaScript • CSS"
          />
        </motion.div>

        <motion.div
          className="bg-black rounded-2xl my-2 py-8 px-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.2 }}
        >
          <ProjectsUi
            link=""
            img="./assets/abs2.webp"
            alt="WAVE SaaS"
            name="WAVE SaaS"
            type="Web Design • Frontend Development"
            year="2024"
            tools="NextJS • TypeScript • Framer Motion"
          />
        </motion.div>

        <motion.div
          className="bg-black rounded-2xl my-2 py-8 px-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.2 }}
        >
          <ProjectsUi
            link=""
            img="./assets/abs1.webp"
            alt="IBGroup website mockup"
            name="ibgroup website"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript • Figma"
          />
        </motion.div>

        <motion.div
          className="bg-black rounded-2xl my-2 py-8 px-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.2 }}
        >
          <ProjectsUi
            link=""
            img="./assets/abs2.webp"
            alt="IBGroup website mockup"
            name="ibgroup website"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript • Figma"
          />
        </motion.div>
      </div>
    </section>
  );
}
