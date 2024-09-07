import React, { useState, useEffect } from "react";
import _ from "lodash";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = _.debounce(() => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsVisible(true);
        clearTimeout(window.visibilityTimeout);
        window.visibilityTimeout = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      } else {
        setIsScrolled(false);
      }
    }, 50);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.visibilityTimeout);
    };
  }, []);

  return (
    <div
      className={`nav-bar flex flex-col md:flex-row justify-around z-20 transition-transform duration-1000 ease-out top-0 w-full ${
        isLoaded ? "transform translate-y-0" : "transform -translate-y-full"
      } ${isScrolled ? "backdrop-blur-sm" : ""} ${isVisible ? "sticky" : ""}`}
    >
      <h1 className="brand pt-5 md:ml-0 md:pl-0 md:pt-10 md:pr-24 lg:pr-0 text-3xl hover:text-white flex justify-center md:flex-none">
        Portfolio
      </h1>
      <ul className="flex justify-around">
        <li className="navele px-0 py-5 md:px-5 md:py-12 lg:px-12 md:pl-32 lg:pl-32 lg:pr-12 text-xl text-white active:text-sky-500 hover:text-sky-500">
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
