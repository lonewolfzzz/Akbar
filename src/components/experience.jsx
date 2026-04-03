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
          description="As a graphic designer and illustrator, I focus on creating powerful, storytelling visual identities that captivate audiences from the very first glance. I prioritize unique yet functional aesthetics, ensuring every visual element—from custom logos to intricate illustrations—communicates a brand’s message consistently across all platforms. By blending hand-drawn techniques with the latest design software, I produce dynamic visual assets, distinctive characters, and layouts that command attention. I understand that effective design must balance creativity with clear communication, ensuring my work is not only visually stunning but also builds emotional resonance and strategic value for every project."
          inView={inView}
        />
        <ExperienceUi
          title="Internship."
          description="I am relied upon to handle the end-to-end creative process for government projects, overseeing both the brand identity and the detailed illustration work. My expertise ensures a seamless integration of professional graphic design with bespoke visual storytelling that resonates with the public. Stakeholders trust my commitment to delivering polished, culturally relevant, and high-impact visual assets tailored to the specific communication needs of the public sector."
          inView={inView}
          delay={2} // Add delay to the second experience
        />
        <ExperienceUi
          title="Freelance."
          description="I am relied upon to lead the end-to-end creative direction for portfolio projects, overseeing both the visual identity and custom illustration work. My expertise ensures a seamless integration of artistic flair with professional layouts that highlight a creator’s unique style. Clients trust my commitment to delivering polished, modern, and high-impact visual designs tailored to represent their professional brand with clarity and impact."
          inView={inView}
          delay={4} // Add delay to the third experience
        />
      </div>
    </section>
  );
}
