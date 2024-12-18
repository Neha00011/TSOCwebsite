import React from "react";
import howwork from "../assets/howwork.png";

const HowItWorksSection = () => {
  const steps = [
    { number: "01", description: "A quick sign-up process" },
    {
      number: "02",
      description: "Receive a customized design plan with 3D renderings",
    },
    {
      number: "03",
      description:
        "Our placement team reaches out to understand your requirements",
    },
    { number: "04", description: "Our trainees apply to these opportunities" },
    {
      number: "05",
      description: "Extend offers to candidates who match your criteria!",
    },
  ];
  return (
    <section className="bg-white py-10 px-6 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/2 ">
        <h2 className="text-3xl font-semibold text-black ml-10">
          How it Works
        </h2>
        <h3 className="text-lg text-gray-600 mt-2 ml-14">
          Our streamlined process is designed to make your hiring process
          <br /> smooth and enjoyable
        </h3>
        {/* <ul className="list-decimal border mt-4 text-gray-700 ">
          <li className="m-8 text-lg font-semibold">Aquick sign-up process</li>
          <li className="m-8 text-lg font-semibold">
            Receive a customized design plan with 3D renderings
          </li>
          <li className="m-8 text-lg font-semibold">
            Our placement team reaches out to understand your requirements
          </li>
          <li className="m-8 text-lg font-semibold">
            Our trainees apply to these opportunities
          </li>
          <li className="m-8 text-lg font-semibold">
            Extend offers to candidates who match your criteria!
          </li>
        </ul> */}
        <div className="flex flex-col space-y-4 mt-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-row items-center">
              <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center">
                <h1 className="text-3xl font-sans font-light text-Off_Black">
                  {step.number}
                </h1>
              </div>
              <h1 className="text-xl font-rubik font-normal text-Charcoal ml-6 my-4">
                {step.description}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10">
        <img
          src={howwork}
          alt="How It Works"
          className="rounded-lg shadow-md ml-8"
          height="500px"
          width="500px"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
