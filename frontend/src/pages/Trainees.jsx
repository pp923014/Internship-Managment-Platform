import React, { useState } from "react";

const Trainees = () => {
  const [certificateNo, setCertificateNo] = useState("");
  return (
    <div className="h-screen flex flex-col justify-start items-center bg-white text-black mt-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Verify Trainee Certificate</h1>
        <p className="mt-4 text-lg">
          Enter the certificate number to find trainee details.
        </p>
      </div>

      {/* Input Field */}
      <div className="flex flex-col sm:flex-row items-center space-x-4 space-y-4 sm:space-y-0 mb-8">
        <input
          type="text"
          placeholder="Enter Certificate No."
          className="w-full sm:w-96 px-6 py-3 rounded-xl border-2 border-indigo-200 text-black"
        />
        <button className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Trainees;
