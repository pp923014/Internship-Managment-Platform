import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAdminStore from "../../store/useAdminStore";

const FetchFeatures = () => {
  const[feId,setFeId]=useState(null);
  const navigate = useNavigate();
  const {
    features,
    fethFeatures,
    deleteFeature,
    setFeatureId,
  } = useAdminStore();

  useEffect(() => {
    fethFeatures();
  }, [fethFeatures]);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this feature?")) {
      deleteFeature(id);
     
    }
    window.location.reload();
  };
  const handleupdate = (id) => {
    setFeatureId(id);
    navigate("/admin/update-features");
  };
  return (
    <div className="bg-gray py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <button
                  className="w-full bg-red-500 text-white py-2 mt-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
                  onClick={() => handleDelete(feature._id)}
                >
                  Delete
                </button>
                <button
                  className="w-full bg-blue-500 text-white py-2 mt-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
                  onClick={() => {
                    setFeId(feature._id);
                    handleupdate(feature._id)
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchFeatures;
