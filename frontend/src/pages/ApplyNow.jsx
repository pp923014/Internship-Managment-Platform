import React, { useEffect } from "react";
import useApplyInternship from "../store/useApplyInternship";
import toast from "react-hot-toast";

const ApplyNow = () => {
  const { formData, setFormData, applyForInternship, isLoading, checkAuth } =
    useApplyInternship();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(name, value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await applyForInternship();
  };

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Apply For Internship
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Join our team and gain hands-on experience in Tech Field. You'll work
          on real-world projects, collaborate with experienced developers, and
          enhance your skills.
        </p>
      </header>

      {/* Form Section */}
      <form
        className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your contact number"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="internshipType"
            className="block text-gray-700 font-medium mb-2"
          >
            Internship Type
          </label>
          <select
            id="internshipType"
            name="internshipType"
            value={formData.internshipType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select an option</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="App Development">App Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Full Stack Development">
              Full Stack Development
            </option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-gray-700 font-medium mb-2"
          >
            Duration
          </label>
          <select
            id="duration"
            name="internshipDuration"
            value={formData.internshipDuration}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select duration</option>
            <option value="1 Month">1 Month</option>
            <option value="2 Months">2 Months</option>
            <option value="3 Months">3 Months</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ApplyNow;
