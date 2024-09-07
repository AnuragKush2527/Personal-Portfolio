import React, { useRef, useState } from "react";
import Heading from "./Heading";
import emailjs from "@emailjs/browser";
import CustomAlert from "./CustomAlert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          // alert("Message sent successfully!");

          setAlertMessage("Message sent successfully!");
          setAlertType("success");
          setShowAlert(true);
        },
        (error) => {
          console.log("Failed to send email.", error.text);
          // alert("Failed to send message, please try again.");

          setAlertMessage("Failed to send Email. Please try again.");
          setAlertType("error");
          setShowAlert(true);
        }
      );
    e.target.reset();
  };

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Auto close after 3 seconds
  };

  const sendEmailToast = (e) => {
    handleShowAlert();
    sendEmail(e);
  };

  return (
    <>
      <Heading heading="Contact" ids="contactPage" />
      <div className="flex justify-center text-white mt-[-50px] md:mt-0">
        <div className="contact-div flex justify-center w-60 md:w-1/3">
          <form ref={form} onSubmit={sendEmailToast} className="">
            <input
              className="inputs my-4 p-2 rounded-lg custom-placeholder w-full box-border"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            ></input>
            <input
              className="inputs my-4 p-2 rounded-lg custom-placeholder w-full box-border"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            ></input>
            <input
              className="inputs my-4 p-2 rounded-lg custom-placeholder w-full box-border"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            ></input>
            <textarea
              className="inputs my-4 mb-0 p-2 rounded-lg custom-placeholder w-full box-border"
              rows="6"
              type="text"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <button
              className="contact-btn bg-sky-500 text-white font-bold mt-8 py-3 px-8 rounded-2xl hover:bg-[#020020] hover:text-sky-500 hover:outline"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {showAlert && (
        <CustomAlert
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)}
        />
      )}
    </>
  );
};

export default Contact;
