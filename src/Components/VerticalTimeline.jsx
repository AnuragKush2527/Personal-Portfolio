import React from "react";

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

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`timeline-item timeline-item-${event.side}`}
        >
          <div className="timeline-content text-white p-4">
              <h2 className="p-2 font-bold">{event.course}</h2>
              <h3 className="p-2 text-[#6D00FF]">{event.college}</h3>
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
