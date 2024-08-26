import React from "react";

const About = () => {
  return (
    <div className="flex justify-around p-32">
      <div className="w-1/2">
        <h3 className="pt-0 text-2xl text-white">
          Hello, <span className="text-[#6D00FF]">I'm</span>
        </h3>
        <h1 className="pt-6 pb-2 text-5xl font-medium text-[#6D00FF]">
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
        <button className="contact-btn bg-[#6D00FF] text-white font-bold ml-0.5 mt-16 py-3 px-8 rounded-2xl hover:bg-[#020020] hover:text-[#6D00FF] hover:outline">
          Let's Talk
        </button>
      </div>
      <div className="w-1/2">
        <img
          className="profile-pic ml-auto mr-4 rounded-2xl border-2 border-[#6D00FF]"
          src="ProfilePic.jpg"
          height="300px"
          width="300px"
        ></img>
        <div className="flex mt-8 ml-48">
          <p className="check m-4 ml-9">Check Out My</p>
          <img
            className="cntele bg-[#6D00FF] m-4 p-1 rounded-xl"
            src="linkedin.png"
            height="30px"
            width="30px"
          ></img>
          <img
            className="cntele bg-[#6D00FF] m-4 p-1 rounded-xl"
            src="github.png"
            height="30px"
            width="30px"
          ></img>
          <img
            className="cntele bg-[#6D00FF] m-4 p-1 rounded-xl"
            src="instagram.png"
            height="30px"
            width="30px"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
