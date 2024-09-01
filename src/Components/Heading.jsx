import React from "react";

const Heading = (props) => {
  return (
    <div className="headings text-5xl text-sky-500 mt-32 mb-24 flex justify-center" id={props.ids}>
      {props.heading}
    </div>
  );
};

export default Heading;
