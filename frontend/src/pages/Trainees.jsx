import React, { useState } from "react";
import useHomeStore from '../store/useHomeStore';

const Trainees = () => {
  const [certificateNo, setCertificateNo] = useState("");
  const { trainee, loading, error, fetchTraineeData } = useHomeStore();

  const handleSearch = () => {
    if (certificateNo.trim() !== '') {
      fetchTraineeData(certificateNo);
    }
  };

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
          value={certificateNo}
          onChange={(e) => setCertificateNo(e.target.value)}
          className="w-full sm:w-96 px-6 py-3 rounded-xl border-2 border-indigo-200 text-black"
        />
        <button
          onClick={handleSearch}
          className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Trainee Information (Only Show When No Error) */}
      {!error && trainee && (
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full text-black">
    <h3 className="text-2xl font-semibold text-center">Trainee Details</h3>
    <ul className="mt-6 space-y-4 text-lg">
      <li><strong>Name:</strong> {trainee.name}</li>
      <li><strong>Internship Type:</strong> {trainee.internshipType}</li>
      <li><strong>Duration:</strong> {trainee.internshipDuration}</li>
      <li><strong>Certificate No:</strong> {trainee.certificate}</li>
    </ul>
  </div>
)}
    </div>
  );
};

export default Trainees;