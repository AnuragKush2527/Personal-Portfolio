import React from "react";
import Heading from "./Heading";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "VibeSync",
      img: "Vibesync.jpg",
      description1:
        "Developed a full-stack social media web application featuring real-time chat functionality using ReactJs, NodeJs, SocketIO.",
      description2:
        "Implemented sentiment analysis in chat conversations to assess user sentiment, leveraging Natural Language Processing (NLP) libraries, TensorFlow, etc.",
      tech: "Python Flask React Mongodb Socket.io NLTK Tensorflow",
      link: "https://github.com/AnuragKush2527/The-Noble-Artist-Business-Website.git",
    },
    {
      id: 2,
      name: "Personal Portfolio",
      img: "portfolio.jpg",
      description1:
        "Developed and designed a personal portfolio website to showcase professional projects, skills, and accomplishments.",
      description2:
        "The site features a responsive design, ensuring optimal viewing across devices.",
      tech: "ReactJs TailwindCSS Framer Motion Javascript",
      link: "https://github.com/AnuragKush2527/Personal-Portfolio.git",
    },
    {
      id: 3,
      name: "The Noble Artist",
      img: "Thenobleartist.jpg",
      description1:
        "Designed and developed a visually appealing website for a small business.",
      description2:
        "Created a user-friendly interface with a focus on clear navigation, enhancing customer engagement and user experience.",
      tech: "HTML CSS JavaScript Bootstrap",
      link: "https://github.com/AnuragKush2527/The-Noble-Artist-Business-Website.git",
    },
    {
      id: 4,
      name: "To Do List",
      img: "todolist.jpg",
      description1:
        "Developed a responsive and user-friendly to-do list application using NodeJs, ExpressJs, Mongodb. Integrated database (MongoDB) for persistent data management, ensuring tasks are saved across sessions.",
      description2:
        "Implemented dynamic routing using Express to manage several lists at the same time.",
      tech: "Mongodb NodeJs ExpressJs ReactJs Bootstrap",
      link: "https://github.com/AnuragKush2527/toDoList.git",
    },
  ];

  return (
    <>
      <Heading heading="Projects" ids="projectsPage" />
      <div className="projects-div flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <a href={project.link}>
            <div
              key={project.id}
              className="project-inside text-white m-16 text-xs p-1"
            >
              <img
                className="my-6 ml-12"
                src={project.img}
                height="200px"
                width="200px"
              ></img>
              <h1 className="px-4 pb-2 text-xl flex justify-center text-sky-500">
                {project.name}
              </h1>
              <ul className="list-disc px-8">
                <li>
                  <p className="px-4 py-2">{project.description1}</p>
                </li>
                <li>
                  <p className="px-4 py-2">{project.description2}</p>
                </li>
                <li>
                  <p className="px-4 py-2">{project.tech}</p>
                </li>
              </ul>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
