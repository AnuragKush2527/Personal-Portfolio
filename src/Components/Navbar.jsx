import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    let scrollTimeout;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsVisible(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
    };

    let hideTimeout;
    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(hideTimeout);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className={`nav-bar flex flex-col md:flex-row lg:mx-0 md:mx-6 justify-around z-10 transition-transform duration-500 ease-out ${
        isLoaded && !isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full"
      } ${isLoaded && isScrolled ? (isVisible ? "translate-y-0 opacity-100 backdrop-blur-sm" : "opacity-0 -translate-y-full") : ""}
       sticky top-0`}
    >
      <h1 className="brand pt-5 md:ml-0 md:pl-0 md:pt-10 md:pr-16 text-3xl hover:text-white flex justify-center md:flex-none">
        Portfolio
      </h1>
      <ul className="flex justify-around">
        <li className="navele px-0 py-5 md:px-5 md:py-12 lg:px-12 md:pl-32 lg:pr-12 text-xl text-white active:text-sky-500 hover:text-sky-500">
          <a href="#aboutPage">About</a>
        </li>
        <li className="navele px-0 py-5 md:px-5 md:py-12 lg:px-10 text-xl text-white active:text-sky-500 hover:text-sky-500">
          <a href="#educationPage">Education</a>
        </li>
        <li className="navele px-0 py-5 md:px-5 md:py-12 lg:px-10 text-xl text-white active:text-sky-500 hover:text-sky-500">
          <a href="#projectsPage">Projects</a>
        </li>
        <li className="navele px-0 py-5 md:px-5 md:py-12 lg:px-10 text-xl text-white active:text-sky-500 hover:text-sky-500">
          <a href="/Resume.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
