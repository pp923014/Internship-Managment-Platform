import React from "react";
import Sidebar from "../../components/adminComponents/Sidebar";
import UpdateFe from "../../components/adminComponents/UpdateFe";

const GetFeatures = () => {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-gray-800 text-white ">
        <Sidebar />
      </div>

      {/* AddFeature */}
      <div className="flex-1 bg-gray-100 p-4">
        <UpdateFe />
      </div>
    </div>
  );
};

export default GetFeatures;
