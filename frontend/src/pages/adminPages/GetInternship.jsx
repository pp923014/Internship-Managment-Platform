import React from "react";
import FetchIntership from "../../components/adminComponents/FetchInternship";
import Sidebar from "../../components/adminComponents/Sidebar";

const GetInternship = () => {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-gray-800 text-white ">
        <Sidebar />
      </div>

      {/* AddFeature */}
      <div className="flex-1 bg-gray-100 p-4">
        <FetchIntership />
      </div>
    </div>
  );
};

export default GetInternship;
