import React, { useEffect, useState, useRef } from 'react';
import { Icon } from "@iconify/react";
import { motion, useInView } from 'framer-motion';

function Heading({ title }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Animasi slide dari bawah
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animasi berjalan hanya jika elemen terlihat
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className='w-full text-3xl md:text-6xl lg:text-8xl font-medium uppercase text-white select-none'>
        {title}
      </h1>
    </motion.div>
  );
}

export default function Contact() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id='contact'
      className='my-[10%] w-full max-w-screen-xl mx-auto pl-4 md:pl-8' // Padding kiri
      aria-label='contact me'
    >
      <Heading title="Contact"/>
      
      <div className='grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8'> {/* Ubah ke grid-cols-1 di mobile */}
        {/* Left: Contact Form */}
        <div className="w-full mt-10">
          <AnimateOnScroll delay={0.2}>
            <h3 className='select-none text-2xl font-semibold leading-tight text-white'>
              Have an awesome idea? Let's bring it to life.
            </h3>
            <p className='select-none mt-4 text-2xl text-white'>
              I am currently not available for freelance work. I am accepting new projects starting from September 2024.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <form 
              action="contact"
              name='contact'
              autoComplete='off'
              className='mt-10 w-full' // Lebar penuh
              method='POST'
            >
              <input type="hidden" name='form-name' value='contact'/>
              <div className='grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2'>
                <div className='relative z-0'>
                  <input
                    required 
                    type="text"
                    id='name'
                    name='name'
                    className='peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-4 py-2.5 focus:outline-none focus:ring-0 rounded-xl'
                    placeholder=' '
                  />
                  <label 
                    className='absolute top-3 -z-10 origin-[0] -translate-y-10 scale-75 transform text-2xl text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-10 peer-focus:scale-75 px-4'
                    htmlFor="name"
                  >
                    Your name
                  </label>
                </div>
                <div className='relative z-0'>
                  <input
                    required 
                    type="email"
                    id='email'
                    name='email'
                    className='peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-4 py-2.5 focus:outline-none focus:ring-0 rounded-xl'
                    placeholder=' '
                  />
                  <label 
                    className='absolute top-3 -z-10 origin-[0] -translate-y-10 scale-75 transform text-2xl text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-10 peer-focus:scale-75 px-4'
                    htmlFor="email"
                  >
                    Your email
                  </label>
                </div>
                <div className="relative z-0 sm:col-span-2">
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform text-2xl text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 px-4"
                  >
                    Your message
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="px-2 py-2 rounded-xl group mt-10 border duration-200 hover:border-gray-200 hover:bg-transparent"
              >
                <span className="relative">
                  <span className="absolute bottom-[0.4rem] h-1 w-0 bg-gray-200 opacity-90 duration-300 ease-out group-hover:w-full"></span>
                  <span className="group-hover:text-gray-400 text-xl text-white">
                    Send Message
                  </span>
                </span>
                </button>
            </form>  
          </AnimateOnScroll>
        </div>
        
        {/* Right: Contact Details */}
        <AnimateOnScroll delay={1}>
          <div className="w-full grid gap-y-8 text-gray-400">
            <div className="space-y-3">
              <h4 className="text-2xl font-semibold select-none">Contact Details</h4>
              <a
                href="mailto:akbarirawnn@gmail.com"
                className="group relative w-fit cursor-pointer text-xl"
                target="_blank"
                rel="noreferrer"
              >
                <span>akbarirawnn@gmail.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-2xl font-semibold select-none">My Digital Spaces</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://www.tiktok.com/@visualcode2077"
                  className="group inline-flex items-center space-x-2 text-xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="simple-icons:tiktok" color="#666" />
                  <span>Tiktok</span>
                </a>
                <a
                  href="https://github.com/lonewolfzzz"
                  className="group inline-flex items-center space-x-2 text-xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:github" color="#666" />
                  <span>Github</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/akbar-irawan-a0ab47324/"
                  className="group inline-flex items-center space-x-2 text-xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:linkedin" color="#666" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://discordapp.com/users/1027094042875527198"
                  className="group inline-flex items-center space-x-2 text-xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="mdi:discord" color="#666" />
                  <span>Discord</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-2xl font-semibold select-none">Location</h4>
              <p className="text-xl select-none">
                Indonesia <br /> {time}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function AnimateOnScroll({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
