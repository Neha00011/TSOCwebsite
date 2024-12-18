import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            TimeChain Summer of Code
          </h2>
          <p className="mb-4">
            Apply now to join us for an unforgettable summer!
          </p>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">
            Apply Now
          </button>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">TSoC</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Code of Conduct
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mentors
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Subscribe to the Timechain Summer of Code (TSOC)
          </h2>
          <div className="flex space-x-2 mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 rounded text-black"
            />
            <button className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
          <h3 className="text-lg font-semibold">Connect with Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300">
              X
            </a>
            <a href="#" className="hover:text-gray-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-300">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="#" className="hover:text-gray-300">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm">
        <p>© 2023 TIMECHAIN LABS. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
