import React from "react";
import img1 from "../assets/Image1.png";
import img2 from "../assets/Image2.png";
import img3 from "../assets/Image3.png";

const ImageRow = () => {
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-3 gap-1 alignitems-center justify-center ml-20">
      <img
        src={img1}
        alt="Placeholder 1"
        className=" rounded-lg shadow-md "
        height="500px"
        width="420px"
      />
      <img
        src={img2}
        alt="Placeholder 2"
        className=" rounded-lg shadow-md "
        height="500px"
        width="420px"
      />
      <img
        src={img3}
        alt="Placeholder 3"
        className=" rounded-lg shadow-md "
        height="500px"
        width="420px"
      />
    </div>
  );
};

export default ImageRow;
