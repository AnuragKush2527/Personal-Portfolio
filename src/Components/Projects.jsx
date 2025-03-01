import React, { useEffect, useRef, useState } from "react";
import Heading from "./Heading";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "VibeSync",
      img: "VibeSync.jpg",
      description1:
        "Achieved 83% accuracy with sentiment classification, ensuring reliable detection of positive, negative, and neutral sentiments.",
      description2:
        "Integrated secure API for sentiment classification in social media platform and chat applications, enhancing automated decision-making.",
      tech: [
        "Python",
        "Flask",
        "React",
        "Mongodb",
        "Socket.io",
        "NLTK",
        "Tensorflow",
      ],
      link: "https://github.com/AnuragKush2527/VibeSync-3.0.git",
    },
    {
      id: 2,
      name: "Credit Card Fraud Detection",
      img: "CreditCard.jpg",
      description1:
        "Developed and fine-tuned a logistic regression-based machine learning model achieving an 92% accuracy rate in predicting credit card fraud.",
      description2:
        "Successfully handled highly imbalanced datasets (e.g., 99:1 ratio of legitimate to fraudulent transactions) using advanced resampling techniques.",
      tech: ["Python", "Scikit-Learn"],
      link: "https://github.com/AnuragKush2527/Credit-Card-Fraud-Detection-System.git",
    },
    {
      id: 3,
      name: "MovieVerse",
      img: "MovieVerse.jpg",
      description1:
        "Optimized algorithm performance by preprocessing user and movie datasets, reducing latency in generating personalized movie recommendations.",
      description2:
        "Achieved real-time recommendation delivery using asynchronous API calls and caching mechanisms to minimize server response time.",
      tech: ["REST API", "Python", "ExpressJs", "ReactJs"],
      link: "https://github.com/AnuragKush2527/Movieverse.git",
    },
    {
      id: 4,
      name: "Personal Portfolio",
      img: "portfolio.jpg",
      description1:
        "Developed and designed a personal portfolio website to showcase professional projects, skills, and accomplishments.",
      description2:
        "The site features a responsive design, ensuring optimal viewing across devices.",
      tech: ["ReactJs", "TailwindCSS", "Javascript"],
      link: "https://github.com/AnuragKush2527/Personal-Portfolio.git",
    },
  ];

  const [visibleIds, setVisibleIds] = useState([]);

  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIds((prev) => [...prev, entry.target.id]);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    projectRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      projectRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <>
      <Heading heading="Projects" ids="projectsPage" />
      <div className="projects-div flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`project-inside text-white m-16 text-xs px-0 sm:px-2 pb-2 transform transition duration-700 mt-4 md:mt-16 ${
              visibleIds.includes(`project-${project.id}`)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="project-content flex flex-col justify-center items-center">
              <img
                className="my-6 sm:my-6"
                src={project.img}
                height="200px"
                width="200px"
              ></img>
              <h1 className="px-2 pb-2 text-xl flex justify-center text-sky-500">
                {project.name}
              </h1>
              <ul className="list-disc px-8">
                <li>
                  <p className="px-0 sm:px-4 py-1 sm:py-2 text-justify">
                    {project.description1}
                  </p>
                </li>
                <li>
                  <p className="px-0 sm:px-4 py-1 sm:py-2 text-justify">
                    {project.description2}
                  </p>
                </li>
              </ul>
              <div className="flex flex-wrap px-8 sm:px-12">
                {project.tech.map((tech, idx) => (
                  <p
                    key={idx}
                    className="p-1 m-1 tech-p bg-[#17244d] rounded-lg text-sky-500"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <div className="project-link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button
                  className={`contact-btn bg-sky-400 text-white font-bold ml-0.5 mt-0 py-3 px-8 rounded-lg hover:bg-[#020020] hover:text-sky-400 hover:outline`}
                >
                  Explore GitHub
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
