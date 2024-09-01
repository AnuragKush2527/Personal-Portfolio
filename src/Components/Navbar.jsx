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
      className={`nav-bar flex justify-around sticky top-0 z-10 ${
        isScrolled ? "backdrop-blur-sm" : ""
      }`}
    >
      <h1 className="brand ml-6 pl-0 pt-10 pr-20 text-3xl hover:text-white">
        Portfolio
      </h1>
      <ul className="flex justify-around">
        <li className="navele p-10 pl-28 text-xl text-white active:text-sky-500 hover:text-sky-500">
          <a href="#aboutPage">About</a>
        </li>
        <li className="navele p-10 text-xl text-white active:text-sky-500 hover:text-sky-500">
          <a href="#educationPage">Education</a>
        </li>
        <li className="navele p-10 text-xl text-white active:text-sky-500 hover:text-sky-500">
          <a href="#projectsPage">Projects</a>
        </li>
        <li className="navele p-10 text-xl text-white active:text-sky-500 hover:text-sky-500">
          <a href="#resumePage">Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
