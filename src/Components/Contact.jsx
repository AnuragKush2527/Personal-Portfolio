import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <>
      <Heading heading="Contact" ids="contactPage" />
      <div className="flex justify-center text-white">
        <div className="contact-div flex justify-center w-80 md:w-1/3">
          <form method="post" action="">
            <input
              className="inputs my-4 p-2 w-80 md:w-full rounded-lg custom-placeholder"
              type="text"
              placeholder="Your Email"
            ></input>
            <input
              className="inputs my-4 p-2 w-80 md:w-full rounded-lg custom-placeholder"
              type="text"
              placeholder="Your Name"
            ></input>
            <input
              className="inputs my-4 p-2 w-80 md:w-full rounded-lg custom-placeholder"
              type="text"
              placeholder="Subject"
            ></input>
            <textarea
              className="inputs my-4 mb-0 p-2 w-80 md:w-full rounded-lg custom-placeholder"
              rows="6"
              type="text"
              placeholder="Message"
            ></textarea>
            <button
              className="contact-btn bg-sky-500 text-white font-bold mt-8 py-3 px-8 rounded-2xl hover:bg-[#020020] hover:text-sky-500 hover:outline"
              type="button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
