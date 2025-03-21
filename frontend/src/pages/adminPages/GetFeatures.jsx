import React from "react";
import FetchFeatures from "../../components/adminComponents/FetchFeatures";
import Sidebar from "../../components/adminComponents/Sidebar";

const GetFeatures = () => {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-gray-800 text-white ">
        <Sidebar />
      </div>

      {/* AddFeature */}
      <div className="flex-1 bg-gray-100 p-4">
        <FetchFeatures />
      </div>
    </div>
  );
};

export default GetFeatures;
