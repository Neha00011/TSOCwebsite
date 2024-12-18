import React from "react";
import hire from "../assets/hire.png";
import check from "../assets/Check.png";

const HireFromUsSection = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/2">
        <img
          src={hire}
          alt="Hire from us"
          className=" rounded-lg ml-20 shadow-md"
          height="400px"
          width="500px"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10">
        <h2 className="text-2xl font-semibold text-blue-600 ml-5">BENEFITS</h2>
        <h3 className="text-4xl font-semibold text-black mt-2 ml-5">
          Why hire From Us?
        </h3>
        <p className="text-gray-600 mt-4 ml-5 ">
          Together we are making education accessible and transformative.
          <br />
          Join us in shaping a brighter future.
        </p>
        <ul className=" list-inside mt-4 text-black">
          <li className="mb-4">
            <img
              src={check}
              alt="check"
              className="w-6 h-6 inline ml-2 mr-3 "
            />
            Trained to meet Industry Standard
          </li>
          <li className="mb-4">
            <img
              src={check}
              alt="check"
              className="w-6 h-6 inline ml-2 mr-3  "
            />
            Independently pre-assessed
          </li>
          <li className="mb-4">
            <img
              src={check}
              alt="check"
              className="w-6 h-6 inline ml-2 mr-3 "
            />
            Immediate availability
          </li>
          <li className="mb-4">
            <img
              src={check}
              alt="check"
              className="w-6 h-6 inline ml-2 mr-3 "
            />
            Hassle Free Experience
          </li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
          Request Talent Today
        </button>
      </div>
    </section>
  );
};

export default HireFromUsSection;
