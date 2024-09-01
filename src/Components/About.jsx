import React from "react";

const About = () => {
  return (
    <div className="flex justify-around p-32 pb-20 mx-12" id="aboutPage">
      <div className="w-1/2">
        <h3 className="pt-0 text-2xl text-white">
          Hello, <span className="text-sky-500">I'm</span>
        </h3>
        <h1 className="pt-6 pb-2 text-5xl font-medium text-sky-500">
          Anurag Kushwaha
        </h1>
        <h3 className="mt-8 text-2xl font-medium text-white">
          I am into Web Development.
        </h3>
        <p className="pt-12 text-white tracking-wide">
          An enthusiastic individual with good problem solving skills and
          passion about learning new things. Aspiring Software Engineer with a
          strong foundation in software development, algorithms and data
          structures.
        </p>
        <button className="contact-btn bg-sky-500 text-white font-bold ml-0.5 mt-16 py-3 px-8 rounded-2xl hover:bg-[#020020] hover:text-sky-500 hover:outline">
          <a href="#contactPage">Let's Talk</a>
        </button>
      </div>
      <div className="w-1/2">
        <img
          className="profile-pic ml-auto mr-4 rounded-2xl border-0 border-sky-500"
          src="ProfilePic.jpg"
          height="300px"
          width="300px"
        ></img>
        <div className="flex mt-4 ml-60">
          <p className="check m-4 ml-9 mt-6 text-sky-500">Check Out My</p>
          <a
            href="https://www.linkedin.com/in/anurag-kushwaha-463796228/"
            target="_blank"
          >
            <img
              className="cntele bg-sky-600 m-4 p-1 rounded-xl"
              src="linkedin.svg"
              height="30px"
              width="30px"
            ></img>
          </a>
          <a href="https://github.com/AnuragKush2527/" target="_blank">
            <img
              className="cntele bg-sky-600 m-4 p-1 rounded-xl"
              src="github.svg"
              height="30px"
              width="30px"
            />
          </a>
          <a href="mailto:akush2503@gmail.com">
            <img
              className="cntele bg-sky-600 m-4 p-1 rounded-xl"
              src="gmail.svg"
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
