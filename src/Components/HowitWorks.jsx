import React from "react";
import howwork from "../assets/howwork.png";

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-10 px-6 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">How it Works</h2>
        <h3 className="text-xl text-gray-600 mt-2">
          Our streamlined process is designed to make your hiring process
          <br /> smooth and enjoyable
        </h3>
        <ul className="list-decimal list-inside mt-4 text-gray-700">
          <li>Aquick sign-up process</li>
          <li>Receive a customized design plan with 3D renderings</li>
          <li>
            Our placement team reaches out to understand your requirements
          </li>
          <li>Our trainees apply to these opportunities</li>
          <li>Extend offers to candidates who match your criteria!</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10">
        <img
          src={howwork}
          alt="How It Works"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
