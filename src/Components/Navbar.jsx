import React from "react";
import logo from "../assets/TSOClogo.png";
import backarrow from "../assets/backarrow.png";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center h-20 margin-10">
      {/* Logo */}
      <div className=" align-center py-20 px-20">
        <img src={logo} alt="logo" height="40px" width="144px" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-9 text-gray-700 align-center mr-8">
        <li className="hover:text-blue-500 cursor-pointer font-semibold">
          Mentors
        </li>
        <li className="hover:text-blue-500 cursor-pointer font-semibold">
          How it Works
        </li>
        <li className="hover:text-blue-500 cursor-pointer font-semibold">
          Projects
        </li>
        <li className="hover:text-blue-500 cursor-pointer font-semibold">
          Blog
        </li>
        <li className="hover:text-blue-500 cursor-pointer font-semibold">
          FAQ
        </li>
        <li className="hover:text-blue-500 cursor-pointer font-semibold">
          Code of Conduct
        </li>
        <li className=" text-blue-500 cursor-pointer font-semibold">
          Hire from Us
        </li>
      </ul>

      {/* Apply Now Button */}

      <div className="flex justify-center items-center bg-blue-600 text-white  rounded-lg hover:bg-blue-700 h-18 w-50 mr-14">
        <text className="text-sm font-semibold py-2 px-2">Apply Now</text>
        <img src={backarrow} className="h-5 w-5" />
      </div>
    </nav>
  );
};

export default Navbar;
