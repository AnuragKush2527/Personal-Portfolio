import React from "react";

const Heading = (props) => {
  return (
    <div className="headings text-5xl text-[#6D00FF] mt-32 mb-24 flex justify-center">
      {props.heading}
    </div>
  );
};

export default Heading;
