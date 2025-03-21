import React from "react";
import GetInterny from "../../components/adminComponents/GetInterny";
import Sidebar from "../../components/adminComponents/Sidebar";

const GetInterns = () => {
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-gray-800 text-white ">
        <Sidebar />
      </div>

      {/* AddFeature */}
      <div className="flex-1 bg-gray-100 p-4">
        <GetInterny />
      </div>
    </div>
  );
};

export default GetInterns;
