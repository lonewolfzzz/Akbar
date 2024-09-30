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
      when: 'beforeChildren', // Ensure child animations wait until the parent is done
      staggerChildren: 0.2,   // Delay between each child item animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Heading Component
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

// ServiceUi Component
function ServiceUi({ title, description, items, inView, delay = 0 }) {
  return (
    <motion.div
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        ...containerVariants,
        visible: {
          ...containerVariants.visible,
          transition: {
            ...containerVariants.visible.transition,
            delay, // Add delay to the entire section
          },
        },
      }}
    >
      {/* Left Column */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h3 className="text-2xl md:text-4xl lg:text-4xl 2xl:text-7xl font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="text-xl md:text-2xl lg:text-3xl max-w-md xl:max-w-2xl 2xl:text-3xl text-gray-300">
          {description}
        </p>
      </motion.div>

      {/* Right Column */}
      <motion.div className="space-y-6">
        <ul className="list-none text-2xl md:text-4xl lg:text-6xl text-gray-300 space-y-2">
          {items.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const expertiseItems = ['Web Development', 'Web Design', 'Wireframing', 'UI/UX Design', 'Frontend Dev'];
  const toolBoxItems = ['HTML', 'CSS', 'JavaScript', 'React JS', 'Next JS', 'TailwindCSS', 'Framer Motion'];

  // Use the intersection observer hook to trigger the animation
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="select-none px-4 sm:px-6 md:px-8 bg-[#1c1c1c] my-[10%] p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg"
      aria-label="services"
    >
      <Heading title="services" />
      <div className="space-y-14">
        {/* Expertise items animate first */}
        <ServiceUi
          title="My expertises."
          description="I focus on all things design and web related."
          items={expertiseItems}
          inView={inView}
        />

        {/* Tool box items animate second with a delay */}
        <ServiceUi
          title="My digital tool box."
          description="These are my go-to tech stack to make any projects happen."
          items={toolBoxItems}
          inView={inView}
          delay={1.5} // Add delay before starting this section's animation
        />
      </div>
    </section>
  );
}
