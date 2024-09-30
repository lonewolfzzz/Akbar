"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Role from "@/components/role";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-black");
  const [navbarColor, setNavbarColor] = useState({ background: "bg-[#1c1c1c]", text: "text-white" });
  const [logoSrc, setLogoSrc] = useState("/assets/logo.png");

  useEffect(() => {
    // Scroll to the top on initial load
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll("section");

    // Function to detect active section
    const detectSection = () => {
      let foundActiveSection = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Check if section is in the middle of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          foundActiveSection = true;
          const sectionId = section.id;

          switch (sectionId) {
            case "hero":
              setBgColor("bg-black");
              setNavbarColor({ background: "bg-[#1c1c1c]", text: "text-white" });
              setLogoSrc("/assets/logo.png");
              break;
            case "about":
              setBgColor("bg-white");
              setNavbarColor({ background: "bg-[#1c1c1c]", text: "text-white" });
              setLogoSrc("/assets/logo.png");
              break;
            case "role":
              setBgColor("bg-black");
              setNavbarColor({ background: "bg-white", text: "text-[#1c1c1c]" });
              setLogoSrc("/assets/logo2.png");
              break;
            case "services":
              setBgColor("bg-white");
              setNavbarColor({ background: "bg-[#1c1c1c]", text: "text-white" });
              setLogoSrc("/assets/logo.png");
              break;
            case "experience":
              setBgColor("bg-black");
              setNavbarColor({ background: "bg-white", text: "text-[#1c1c1c]" });
              setLogoSrc("/assets/logo2.png");
              break;
            case "projects":
              setBgColor("bg-white");
              setNavbarColor({ background: "bg-[#1c1c1c]", text: "text-white" });
              setLogoSrc("/assets/logo.png");
              break;
            default:
              setBgColor("bg-black");
              setNavbarColor({ background: "bg-[#1c1c1c]", text: "text-white" });
              setLogoSrc("/assets/logo.png");
          }
        }
      });

      // If no section is detected, fallback to the default black background
      if (!foundActiveSection) {
        setBgColor("bg-black");
        setNavbarColor({ background: "bg-[#1c1c1c]", text: "text-white" });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", detectSection);

    // Initial detection on page load
    detectSection();

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", detectSection);
    };
  }, []);

  // Function to handle smooth scrolling
  const smoothScrollTo = (target) => {
    const element = document.getElementById(target);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY; // Get top position relative to the document
      const startPos = window.scrollY; // Current scroll position
      const distance = topPos - startPos; // Distance to scroll
      const duration = 1000; // Duration in milliseconds
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Limit progress to 1
        const ease = easeInOutQuad(progress); // Use easing function for smooth effect
        window.scrollTo(0, startPos + distance * ease); // Scroll to new position

        if (timeElapsed < duration) {
          requestAnimationFrame(animation); // Continue animation until duration is met
        }
      };

      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function
      };

      requestAnimationFrame(animation); // Start animation
    }
  };

  return (
    <main className={`relative ${bgColor} transition-colors duration-500 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10`}>
      <div className="max-w-[1079px] w-full">
        <div className="flex justify-center">
          <Navbar navbarColor={navbarColor} logoSrc={logoSrc} smoothScrollTo={smoothScrollTo} />
        </div>
        <Hero id="hero" />
        <About id="about" />
        <Role id="role" />
        <Services id="services" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer />
      </div>
    </main>
  );
}
