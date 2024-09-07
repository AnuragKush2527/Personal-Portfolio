import React, { useEffect, useState } from "react";

const About = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoaded2, setLoaded2] = useState(false);
  const [isLoaded3, setLoaded3] = useState(false);
  const [isLoaded4, setLoaded4] = useState(false);
  const [isLoaded5, setLoaded5] = useState(false);

  const rotatingTexts = [
    "Problem Solver",
    "Software Developer",
    "Full Stack Developer",
    "Programmer",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % rotatingTexts.length
        );
        setTextVisible(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
    setTimeout(() => {
      setLoaded2(true);
    }, 200);
    setTimeout(() => {
      setLoaded3(true);
    }, 300);
    setTimeout(() => {
      setLoaded4(true);
    }, 400);
    setTimeout(() => {
      setLoaded5(true);
    }, 400);
  }, []);

  return (
    <div
      className="flex flex-col-reverse md:flex-row md:justify-around mx-12 md:mx-0 md:px-6 md:p-2 md:pt-20 lg:pt-24 pb-20 lg:px-24 xl:px-40"
      id="aboutPage"
    >
      <div
        className={`md:w-1/2 flex flex-col flex-wrap items-center md:flex-none md:items-start`}
      >
        <h3
          className={`pt-0 text-2xl text-white transition-transform duration-700 ease-in-out ${
            isLoaded ? "transform translate-y-0" : "transform translate-y-16"
          }`}
        >
          Hello, <span className="text-sky-500">I'm</span>
        </h3>
        <h1
          className={`pt-6 pb-2 text-3xl md:text-5xl font-medium text-sky-1000 transition-transform duration-700 ease-in-out ${
            isLoaded2 ? "transform translate-y-0" : "transform translate-y-16"
          }`}
        >
          Anurag Kushwaha
        </h1>
        <h3
          className={`mt-8 text-xl md:text-2xl font-medium text-white transition-transform duration-700 ease-in-out ${
            isLoaded3 ? "transform translate-y-0" : "transform translate-y-16"
          }`}
        >
          I am a{" "}
          <span
            className={`text-2xl text-cyan-300 fade-in ${
              textVisible ? "fade-in-visible" : ""
            }`}
          >
            {rotatingTexts[currentTextIndex]}.{" "}
          </span>
        </h3>
        <p
          className={`pt-12 text-white tracking-wide text-justify transition-transform duration-700 ease-in-out ${
            isLoaded4 ? "transform translate-y-0" : "transform translate-y-16"
          }`}
        >
          An enthusiastic individual with good problem solving skills and
          passion about learning new things. Aspiring Software Engineer with a
          strong foundation in software development, algorithms and data
          structures.
        </p>
        <button
          className={`contact-btn bg-sky-500 text-white font-bold ml-0.5 mt-16 py-3 px-8 rounded-2xl hover:bg-[#020020] hover:text-sky-500 hover:outline transition-transform duration-700 ease-in-out ${
            isLoaded5 ? "transform translate-y-0" : "transform translate-y-16"
          }`}
        >
          <a href="#contactPage">Let's Talk</a>
        </button>
      </div>
      <div
        className={`flex flex-col items-center d:w-1/2 mb-20 mt-12 sm:pr-6 md:mt-0 md:mb-0 transition-transform duration-1000 ease-out ${
          isLoaded4 ? "transform translate-y-0" : "transform translate-y-16"
        }`}
      >
        <img
          className="profile-pic md:ml-auto lg:mr-4 mr-0 rounded-2xl border-0 border-sky-500 brightness-90"
          src="ProfilePic3.jpg"
          height="300px"
          width="260px"
        ></img>
        <div className="flex mt-16 md:mt-12 md:ml-20 lg:mt-2 lg:ml-60">
          <p className="check m-2 mt-4 ml-0 md:ml-4 md:mt-5 text-sky-500">
            Check my
          </p>
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

export default About;
