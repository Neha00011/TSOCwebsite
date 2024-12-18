import logo from "../assets/TSOClogo.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import backarrow from "../assets/backarrow.png";
import toparrow from "../assets/toparrow.png";
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-700 mx-20 mt-24 mb-12 rounded-xl text-white py-10 px-6">
      <div className="flex flex-row justify-between items-center">
        <img src={logo} alt="Timechain Logo" className="w-40 mb-4" />
        <h1 className="text-sm font-rubik font-semibold flex flex-row justify-between items-center">
          Back To Top
          <img src={toparrow} alt="Up Arrow" className="w-4 h-4 ml-1" />
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-lg mb-4">
            Apply now to join us for an unforgettable summer!
          </p>
          <button className="bg-yellow-400 text-Charcoal font-bold flex flex-row items-center justify-center hover:bg-yellow-500 transition h-[46px] w-[157px] rounded-lg">
            Apply Now
            <img
              src={backarrow}
              alt="Arrow Right"
              className="w-4 h-4 ml-1 invert"
            />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-2">TSoC</h3>
          <p>Code of Conduct</p>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>How it works</p>
          <p>Mentors</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-2">Resources</h3>
          <p>Blog</p>
          <p>Community</p>
          <p>Projects</p>
          <p>Supporters</p>
          <p>2023 Programme</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-sans font-medium text-xl mb-2">
            Subscribe to the Timechain Summer of Code (TSOC)
          </h3>
          <div className="flex flex-row gap-2 border border-Light_Periwinkle rounded-lg p-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-Cobalt_Blue text-black p-2 w-44 rounded-lg"
            />
            <button className="bg-yellow-400 text-Charcoal font-bold flex flex-row items-center justify-center hover:bg-yellow-500 transition h-[40px] px-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <h1>CONNECT WITH US</h1>
          <div className="flex flex-row space-x-2 mt-3">
            <img src={icon1} alt="Twitter" className="w-5 h-5" />
            <img src={icon2} alt="LinkedIn" className="w-5 h-5" />
            <img src={icon3} alt="Instagram" className="w-5 h-5" />
            <img src={icon4} alt="Discord" className="w-5 h-5" />
            <img src={icon5} alt="YouTube" className="w-5 h-5" />
          </div>
        </div>
        <div className="flex gap-4 mb-4 md:mb-0">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Legal</p>
        </div>
        <p className="text-sm">
          &copy; 2023 TIMECHAIN LABS. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
