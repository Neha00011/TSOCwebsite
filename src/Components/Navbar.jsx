import React from "react";
import logo from "../assets/TSOClogo.png";
import backarrow from "../assets/backarrow.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-gray-700">
        <li className="hover:text-blue-500 cursor-pointer">Mentors</li>
        <li className="hover:text-blue-500 cursor-pointer">How it Works</li>
        <li className="hover:text-blue-500 cursor-pointer">projects</li>
        <li className="hover:text-blue-500 cursor-pointer">Blog</li>
        <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
        <li className="hover:text-blue-500 cursor-pointer">Code of Conduct</li>
        <li className=" text-blue-500 cursor-pointer">Hire from Us</li>
      </ul>

      {/* Apply Now Button */}
      <button className="bg-blue-600 text-white px-2 py-2 rounded-lg hover:bg-blue-700 flex-row ">
        Apply Now
        <img src={backarrow} />
      </button>
    </nav>
  );
};

export default Navbar;
