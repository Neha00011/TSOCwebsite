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
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10">
        <h2 className="text-2xl font-semibold text-blue-600">BENEFITS</h2>
        <h3 className="text-xl text-gray-600 mt-2">Why hire From Us?</h3>
        <p className="text-gray-600 mt-4">
          Together we are making education accessible and transformative.
          <br />
          Join us in shaping a brighter future.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            <img src={check} alt="check" className="w-6 h-6 inline" />
            Trained to meet Industry Standard
          </li>
          <li>
            <img src={check} alt="check" className="w-6 h-6 inline" />
            Independently pre-assessed
          </li>
          <li>
            <img src={check} alt="check" className="w-6 h-6 inline" />
            Immediate availability
          </li>
          <li>
            <img src={check} alt="check" className="w-6 h-6 inline" />
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
