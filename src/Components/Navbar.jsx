import React from "react";

const Navbar = () => {
  return (
    <div className="nav-bar flex justify-around">
      <h1 className="ml-6 pl-0 pt-10 pr-20 text-3xl hover:text-white">
        Portfolio
      </h1>
      <ul className="flex justify-around">
        <li className="p-10 pl-28 text-xl text-white active:text-[#6D00FF] hover:text-[#6D00FF]">
          About
        </li>
        <li className="p-10 text-xl text-white active:text-[#6D00FF] hover:text-[#6D00FF]">
          Education
        </li>
        <li className="p-10 text-xl text-white active:text-[#6D00FF] hover:text-[#6D00FF]">
          Projects
        </li>
        <li className="p-10 text-xl text-white active:text-[#6D00FF] hover:text-[#6D00FF]">
          Resume
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
