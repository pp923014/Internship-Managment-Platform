import React from "react";
import th from "../../assets/th.png";
const Slide1 = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 transition-all duration-500 ease-in-out"
    >
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-down">
          Welcome to UmaTech
        </h1>
        <p className="text-lg text-gray-600 mb-6 animate-fade-in-up text-justify">
          At UmaTech, we empower individuals with hands-on experience and
          industry-ready skills. Explore our internship programs and take the
          first step toward your dream career.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-md space-y-4 pl-5">
          <li className="text-left">
            <strong>Real-World Projects:</strong> Work on real projects to build
            your portfolio.
          </li>
          <li className="text-left">
            <strong>Mentorship:</strong> Get guidance from industry experts.
          </li>
          <li className="text-left">
            <strong>Flexible Learning:</strong> Choose internships that fit your
            schedule.
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={th} // Replace with actual path or image source
          alt="Company Introduction"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg object-cover rounded-lg animate-scale-up"
        />
      </div>
    </section>
  );
};

export default Slide1;
