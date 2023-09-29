import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ServicesData } from "./ServicesData";

const ServicesInfo = () => {
  let { id } = useParams();

  // Use the find method to find a single item with a matching id
  const service = ServicesData.find((res) => res.id === Number(id));

  // Define a CSS class for the "No services found" message
  const noServiceClass =
    "bg-orange-200 p-4 text-orange-900 text-center font-semibold rounded-lg ";

  return (
    <div className="max-w-4xl mx-auto py-8 min-h-[54.6vh]">
      {service ? (
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={service.img}
              alt={service.Title}
              className="w-full h-auto md:w-96 rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 px-10">
            <h2 className="text-2xl font-semibold mb-4">{service.Title}</h2>
            <p className="text-gray-700">{service.content}</p>
            <ul className="list-disc mt-4">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-700"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className={noServiceClass}>Service not found</p>
      )}
    </div>
  );
};

export default ServicesInfo;
