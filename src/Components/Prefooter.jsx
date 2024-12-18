import React from "react";
import timechainlab from "../assets/timechainlab.png";

const PreFooter = () => {
  return (
    <div className="w-full h-full px-2 py-10 bg-gray-200 mg-bottom-5">
      <img
        src={timechainlab}
        alt="PreFooter Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default PreFooter;
