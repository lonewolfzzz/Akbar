import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation Variants for Lines (fade-in and slide-down)
const lineAnimation = {
  hidden: { opacity: 0, y: -20 }, // Start fully transparent and above position
  visible: (custom) => ({
    opacity: 1,
    y: 0, // Slide down to original position
    transition: {
      delay: custom * 0.2, // Delay based on index
      duration: 0.6, // Duration of each line's animation
      ease: 'easeOut',
    },
  }),
};

// Animation Variants for smooth opacity effect for the section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Start fully transparent and slightly below
  visible: {
    opacity: 1,
    y: 0, // Move up to normal position
    transition: {
      duration: 2, // Smooth fade-in duration
      ease: 'easeOut',
    },
  },
};


// Animation Variants for Lines (growing and shrinking in a loop)
const lineVariants = {
  hidden: { opacity: 0, scaleX: 0, originX: 0 },
  visible: (custom) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: custom * 0.3,
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: [0.5, 0, 0.5, 1],
      repeatDelay: 7,
    },
  }),
};

// Animation Variants for Text in Left Column (fade-in and slide-up)
const textLeftVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
    },
  }),
};

// Animation Variants for Text in Right Column (fade-in and slide-up)
const textRightVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
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

// Component for displaying animated lines
function LinesAboveSection() {
  const lineHeights = [2, 4, 6, 8, 10, 12, 14, 16, 32, 64, 96, 144]; // Heights of the lines
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Detect when in view

  return (
    <div ref={ref} className="lines-container w-full h-auto flex flex-col space-y-2">
      {lineHeights.map((height, index) => (
        <motion.div
          key={index}
          className="w-full bg-[#1c1c1c] rounded-tl-2xl rounded-tr-2xl"
          style={{ height: `${height}px` }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={lineAnimation}
          custom={index} // Each line has its own delay
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
      variants={sectionVariants} // Smooth opacity animation for the heading
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
      variants={sectionVariants} // Add animation for the entire section
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

    <>
      {/* Menambahkan garis-garis sebelum section */}
      <LinesAboveSection />

      <motion.section
        className="select-none px-4 sm:px-6 md:px-8 bg-[#1c1c1c] my-[0.5rem] p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg"
        aria-label="services"
        id="services"
        initial="hidden"
        animate="visible"
        variants={sectionVariants} // Add fade-in animation to section
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
      </motion.section>
    </>
  );
}
