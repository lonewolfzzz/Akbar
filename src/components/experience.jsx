import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Heading Component: Displays the title of the section
function Heading({ title }) {
  return (
    <motion.h1
      className="w-fit text-3xl md:text-6xl lg:text-8xl font-medium uppercase text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {title}
    </motion.h1>
  );
}

// ExperienceUi Component: Displays the title, description, and line in a full-width flex layout
function ExperienceUi({ title, description, inView, delay = 0 }) {
  return (
    <motion.div
      className="mt-10 space-y-6"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        ...containerVariants,
        visible: {
          ...containerVariants.visible,
          transition: {
            ...containerVariants.visible.transition,
            delay, // Add delay to control order of animations
          },
        },
      }}
    >
      {/* Full-Width Title and Description */}
      <motion.h3
        className="mt-30 text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl font-semibold leading-tight text-white"
        variants={itemVariants}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-md md:text-xl lg:text-2xl max-w-full 2xl:text-3xl text-gray-300"
        variants={itemVariants}
      >
        {description}
      </motion.p>
      {/* Horizontal Line Below Description */}
      <motion.span
        className="block w-full h-[4px] bg-gray-500"
        variants={itemVariants}
      />
    </motion.div>
  );
}

export default function Experience() {
  // Use the intersection observer hook to trigger the animation
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="select-none px-4 my-[10%] p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg"
      aria-label="experience"
    >
      <Heading title="Relevant Experience" />
      <div className="space-y-14">
        {/* Experience items with a delay */}
        <ExperienceUi
          title="Work."
          description="As a frontend developer specialize , I focus on creating seamless, intuitive experiences that captivate users from the moment they land on a website. I prioritize clean, responsive designs that work effortlessly across devices, ensuring that every visitor can navigate and interact with the site with ease. By leveraging the latest technologies and design trends, I build dynamic product displays, smooth checkout flows, and interactive features that keep users engaged. I understand the importance of speed, accessibility, and security in e-commerce, and my frontend development approach ensures that websites are not only visually appealing but also highly performant and secure."
          inView={inView}
        />
        <ExperienceUi
          title="Internship."
          description="I am relied upon to handle the end-to-end development of government izol malang kota website, covering both the frontend and backend aspects. My expertise ensures integrating user-friendly interfaces with robust backend functionalities. Clients trust my commitment to delivering reliable, secure, and scalable government solutions tailored to their specific requirements."
          inView={inView}
          delay={2} // Add delay to the second experience
        />
        <ExperienceUi
          title="Freelance."
          description="I am relied upon to handle development of portfolio websites, covering frontend aspects. My expertise ensures website berjalan dengan lancar, integrating user-friendly interfaces. Clients trust my commitment to delivering reliable, secure, and scalable portfolio website solutions tailored to their specific requirements."
          inView={inView}
          delay={4} // Add delay to the third experience
        />
      </div>
    </section>
  );
}
