import React from "react";
import img1 from "../assets/Image1.png";
import img2 from "../assets/Image2.png";
import img3 from "../assets/Image3.png";

const ImageRow = () => {
  return (
    <div className="py-10 px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <img
        src={img1}
        alt="Placeholder 1"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <img
        src={img2}
        alt="Placeholder 2"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <img
        src={img3}
        alt="Placeholder 3"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  );
};

export default ImageRow;
