import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`nav-bar flex flex-col md:flex-row justify-around sticky top-0 z-10 ${
        isScrolled ? "backdrop-blur-sm" : ""
      }`}
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
