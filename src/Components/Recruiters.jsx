import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import prevbutton from "../assets/PrevButton.png";
import nextbutton from "../assets/NextButton.png";

const RecruitersSection = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Recruiters Story
          </h2>
          <p className="text-gray-600 mt-2">
            Together,we`re making education accessible and
            <br />
            transformative.Join us in shaping a brighter future!
          </p>
        </div>
        <div className="flex space-x-4">
          <button className="w-10 h-10">
            <img src={prevbutton} alt="Previous Button" />
          </button>

          <button className="w-10 h-10">
            <img src={nextbutton} alt="Next Button" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-100  shadow-md ">
          <img src={person1} alt="Person 1" className="w-full h-80 mx-auto " />
          <p className="text-gray-700 mt-4 ">
            "Grabbing and holding your audience`s
            <br /> attention.This is crucial in a world filled
            <br /> with distractions.It`s about creating
            <br /> content that imediately captures"
          </p>
          <p className="text-gray-800 font-semibold mt-4 ">Rohan Sharan</p>
          <p className="text-gray-600 ">Founder,TimeChain Labs</p>
        </div>
        <div className="bg-gray-100  shadow-md ">
          <img src={person2} alt="Person 2" className="w-full h-80 mx-auto " />
          <p className="text-gray-700 mt-4">
            "Grabbing and holding your audience`s
            <br /> attention.This is crucial in a world filled
            <br /> with distractions.It`s about creating
            <br /> content that imediately captures"
          </p>
          <p className="text-gray-800 font-semibold mt-4">Jessica Thompson</p>
          <p className="text-gray-600">Founder,Innovatech Solutions</p>
        </div>
        <div className="bg-gray-100  shadow-md">
          <img src={person3} alt="Person 3" className="w-full h-80 mx-auto" />
          <p className="text-gray-700 mt-4">
            "Grabbing and holding your audience`s
            <br /> attention.This is crucial in a world filled
            <br /> with distractions.It`s about creating
            <br /> content that imediately captures"
          </p>
          <p className="text-gray-800 font-semibold mt-4">Priyansh Jain</p>
          <p className="text-gray-600">Design Lead,ABC Tech Solutions</p>
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
