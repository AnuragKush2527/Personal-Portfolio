import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 50);
  }, []);

  return (
    <div
      className={`footer-div text-white flex justify-center pt-10 backdrop-blur-sm border-t-4 border-sky-500 ${
        isLoaded ? "absolute bottom-0 left-0 w-full" : ""
      }`}
    >
      <div>
        <p className="flex flex-wrap justify-center">
          &copy; 2024 <span className="text-sky-500 ml-1">Anurag Kushwaha</span>
          . All rights reserved.
        </p>
        <ul className="flex flex-wrap flex-col sm:flex-row items-center sm:justify-evenly text-xl">
          <li className="navele2 p-4 md:p-8 hover:text-sky-500">
            <a href="#aboutPage">About</a>
          </li>
          <li className="navele2 p-4 md:p-8 hover:text-sky-500">
            <a href="#educationPage">Education</a>
          </li>
          <li className="navele2 p-4 md:p-8 hover:text-sky-500">
            <a href="#projectsPage">Projects</a>
          </li>
          <li className="navele2 p-4 md:p-8 hover:text-sky-500">
            <a href="/Resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/anurag-kushwaha-463796228/"
            target="_blank"
          >
            <img
              className="cntele bg-sky-600 m-4 p-1 rounded-xl hover:bg-white"
              src="linkedin.svg"
              height="30px"
              width="30px"
            ></img>
          </a>
          <a href="https://github.com/AnuragKush2527/" target="_blank">
            <img
              className="cntele bg-sky-600 m-4 p-1 rounded-xl hover:bg-white"
              src="github.svg"
              height="30px"
              width="30px"
            />
          </a>
          <a href="https://www.instagram.com/anurag_kush2503/" target="_blank">
            <img
              className="cntele bg-sky-600 m-4 p-1 rounded-xl hover:bg-white"
              src="instagram.svg"
              height="30px"
              width="30px"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
