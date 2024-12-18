import React, { useState } from "react";

const HiringRequest = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    role: "",
    employmentType: [],
    skillLevel: [],
    positionType: "",
    budget: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-row justify-between mx-20 my-24 ">
      <div className="flex flex-col w-[38%] items-start">
        <div className="flex items-center justify-center px-4 py-1 border-Light_Periwinkle border-2 bg-white rounded-full">
          Contact Us
        </div>
        <h1 className="text-5xl font-sans font-medium mt-3">Hiring Request</h1>
        <p className="text-lg font-sans font-light mt-4">
          Unlock the potential of your business with top-tier professionals. We
          provide custom hiring solutions for every industry, ensuring you find
          the perfect fit.
        </p>
      </div>

      <div className="w-[52%] bg-blue-400 p-4 rounded-lg shadow-md max-h-[600px] overflow-y-scroll scrollbar-hide">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg"
        >
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-rubik font-normal text-base text-Charcoal">
                Contact Name*
              </label>
              <input
                type="text"
                name="contactName"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-rubik font-normal text-base text-Charcoal">
                Company Name*
              </label>
              <input
                type="text"
                name="companyName"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-rubik font-normal text-base text-Charcoal">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-rubik font-normal text-base text-Charcoal">
                Phone No*
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-rubik font-normal text-base text-Charcoal">
                Country*
              </label>
              <input
                type="text"
                name="country"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-rubik font-normal text-base text-Charcoal">
                City*
              </label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-rubik font-normal text-base text-Charcoal">
              Employment Type*
            </label>
            {["Full-time Role", "Part-time Role", "Internship Role"].map(
              (type) => (
                <label key={type} className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="employmentType"
                    value={type}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {type}
                </label>
              )
            )}
          </div>

          <div>
            <label className="block font-rubik font-normal text-base text-Charcoal">
              Skill Level*
            </label>
            {["Intermediate Level", "Junior Level", "Senior Level"].map(
              (level) => (
                <label key={level} className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="skillLevel"
                    value={level}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {level}
                </label>
              )
            )}
          </div>

          <div>
            <label className="block font-rubik font-normal text-base text-Charcoal">
              What’s your budget?*
            </label>
            <input
              type="number"
              name="budget"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block font-rubik font-normal text-base text-Charcoal">
              Additional Information*
            </label>
            <textarea
              name="additionalInfo"
              rows={4}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HiringRequest;
