import React, { useState, useRef, useEffect } from "react";

const VerticalTimeline = () => {
  const events = [
    {
      id: 1,
      course: "Bachelor Of Technology",
      college: "PSIT, Kanpur",
      stream: "Computer Science and Engineering",
      grade: "8.8 CGPA",
      year: "2021-2025",
      side: "left",
    },
    {
      id: 2,
      course: "Intermediate",
      college: "St. Jude's College, Unnao",
      stream: "Science",
      grade: "90.8%",
      year: "2019-2020",
      side: "right",
    },
    {
      id: 3,
      course: "High-School",
      college: "St. Jude's College, Unnao",
      stream: "Science",
      grade: "74.8%",
      year: "2017-2018",
      side: "left",
    },
  ];

  const [visibleIds, setVisibleIds] = useState([]);

  const educationRefs = useRef([]);

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

    educationRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      educationRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <div className={`timeline`}>
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`timeline-item timeline-item-${event.side} time-cont-${event.id}`}
        >
          <div 
          id={`project-${event.id}`}
          ref={(el) => (educationRefs.current[index] = el)}
           className={`timeline-content text-white p-4 transform transition duration-700 ${
                visibleIds.includes(`project-${event.id}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}>
            <h2 className="p-2 font-bold">{event.course}</h2>
            <h3 className="p-2 text-sky-500">{event.college}</h3>
            <ul className="list-disc ml-7">
              <li className="p-2">{event.stream}</li>
              <li className="p-2">{event.grade}</li>
              <li className="p-2">{event.year}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
