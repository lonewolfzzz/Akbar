import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation Variants for Lines (growing and shrinking in a loop)
const lineVariants = {
  hidden: { opacity: 0, scaleX: 0, originX: 0 }, // Start with no width (scaleX 0)
  visible: (custom) => ({
    opacity: 1,
    scaleX: 1, // Grow to full width
    transition: {
      delay: custom * 0.3, // Staggered delay for each line
      duration: 1, // Adjust duration for smoother effect
      repeat: Infinity, // Loop the animation infinitely
      repeatType: 'reverse', // Reverse the animation to shrink after it grows
      ease: [0.5, 0, 0.5, 1], // Smooth easing function
    },
  }),
};

// Animation Variants for Text in Left Column (fade-in and slide-up)
const textLeftVariants = {
  hidden: { opacity: 0, y: 50 }, // Text starts lower and hidden
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2, // Delay each text item to appear one by one
      duration: 0.5,
    },
  }),
};

// Animation Variants for Text in Right Column (fade-in and slide-up)
const textRightVariants = {
  hidden: { opacity: 0, y: 50 }, // Text starts lower and hidden
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2, // Delay each text item to appear one by one
      duration: 0.5,
    },
  }),
};

// Custom Line Component to display multiple lines vertically
function LineGroup({ height, widths }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div ref={ref} className="line-group hidden md:flex absolute left-[-70px] flex-col space-y-2">
      {widths.map((width, index) => (
        <motion.div
          key={index}
          className="bg-white"
          style={{
            height: `${height}px`,
            width: `${width}px`,
            transformOrigin: 'left',
          }}
          custom={index}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={lineVariants}
        />
      ))}
    </div>
  );
}

// Heading Component with Text Animation
function Heading({ title }) {
  return (
    <motion.h1
      className="px-10 md:px-0 lg:px-0 w-fit text-4xl md:text-6xl lg:text-8xl font-medium uppercase text-white"
      initial="hidden"
      animate="visible"
      variants={textLeftVariants}
      custom={0}
    >
      {title}
    </motion.h1>
  );
}

// ServiceUi Component
function ServiceUi({ title, description, items, lineSizes }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24"
    >
      {/* Left Column - Text */}
      <motion.div className="space-y-1">
        <motion.h3
          className="px-10 md:px-0 lg:px-0 text-2xl md:text-4xl lg:text-4xl 2xl:text-7xl font-semibold leading-tight text-white"
          variants={textLeftVariants}
          custom={0}
        >
          {title}
        </motion.h3>
        <motion.p
          className="px-10 md:px-0 lg:px-0 text-md md:text-2xl lg:text-3xl max-w-md xl:max-w-2xl 2xl:text-3xl text-gray-300"
          variants={textLeftVariants}
          custom={1}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Right Column - List of Items */}
      <motion.div className="space-y-8">
        <ul className="list-none text-left text-3xl md:text-4xl lg:text-6xl text-gray-300 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="relative flex items-center">
              {/* LineGroup with staggered animations */}
              <LineGroup
                height={lineSizes[index].height}
                widths={lineSizes[index].widths}
              />
              <motion.span
                className="ml-10"
                variants={textRightVariants}
                custom={index}
              >
                {item}
              </motion.span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

// Main Services Component
export default function Services() {
  const expertiseItems = ['Web Dev', 'Web Design', 'Wireframing', 'UI/UX Design', 'Frontend Dev'];
  const toolBoxItems = ['HTML', 'CSS', 'JavaScript', 'React JS', 'Next JS', 'TailwindCSS', 'Framer Motion'];

  const expertiseLineSizes = [
    { height: 8, widths: [64, 64, 64] },
    { height: 8, widths: [64, 64, 64] },
    { height: 8, widths: [64, 64, 64] },
    { height: 8, widths: [64, 64, 64] },
    { height: 8, widths: [64, 64, 64] },
  ];

  const toolBoxLineSizes = [
    { height: 8, widths: [64, 56, 48] },
    { height: 8, widths: [56, 48, 40] },
    { height: 8, widths: [48, 40, 32] },
    { height: 8, widths: [40, 32, 24] },
    { height: 8, widths: [32, 24, 16] },
    { height: 8, widths: [24, 16, 8] },
    { height: 8, widths: [16, 8, 4] },
  ];

  return (
    <section
      className="select-none px-4 sm:px-6 md:px-8 bg-[#1c1c1c] my-[10%] p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg"
      aria-label="services"
    >
      {/* Heading */}
      <Heading title="services" />

      <div className="space-y-14">
        {/* Expertise section */}
        <ServiceUi
          title="My expertises."
          description="I focus on all things design and web related."
          items={expertiseItems}
          lineSizes={expertiseLineSizes}
        />

        {/* Toolbox section */}
        <ServiceUi
          title="My digital tool box."
          description="These are my go-to tech stack to make any projects happen."
          items={toolBoxItems}
          lineSizes={toolBoxLineSizes}
        />
      </div>
    </section>
  );
}
