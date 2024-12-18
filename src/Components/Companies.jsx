import React from "react";
import airbnb from "../assets/airbnb.png";
import amazon from "../assets/amazon.png";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import slack from "../assets/slack.png";

const CompaniesSection = () => {
  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800">
        We are trusted by over 20,000+ individuals in these companies
      </h2>
      <div className="flex justify-center space-x-14 mt-6">
        <img src={airbnb} alt="Airbnb" className="h-8 w-18" />
        <img src={google} alt="Google" className="h-8 w-18" />
        <img src={amazon} alt="Amazon" className="h-8 w-18" />
        <img src={microsoft} alt="Microsoft" className="h-8 w-18" />
        <img src={slack} alt="Slack" className="h-8 w-18" />
      </div>
    </section>
  );
};

export default CompaniesSection;
