import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { WorkshopData } from "./ServicesData";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
const ServicesCoprate = () => {
  let { id } = useParams();
  const navigation = useNavigate();
  // Use the find method to find a single item with a matching id
  const service = WorkshopData.find((res) => res.id === Number(id));
  // Define a CSS class for the "No services found" message
  const noServiceClass =
    "bg-orange-200 p-4 text-orange-900 text-center font-semibold rounded-lg ";

  return (
    <div className="md:mx-20 py-8 min-h-[54.6vh]">
      {service ? (
        <div className="flex flex-col gap-10 md:flex-row items-center">
          <div className="md:w-[70%] w-80 ">
            {/* <div className="bg-orange-500 h-96 rounded-3xl "></div> */}
            <img
              src={service.img}
              alt={service.Title}
              className="w-full h-auto md:w-[200vw] rounded-lg"
            />
          </div>
          <div className="md:w-[100%] md:pl-8 px-10 flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{service.Title}</h2>
              {service.content !== "" && (
                <p className="text-gray-700">{service.content}</p>
              )}
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
              <br />
              <p className="font-bold">({service.spremark})</p>
            </div>
            <div className="flex gap-5">
              <button
                className="bg-orange-600 p-2 font-bold text-white rounded-lg w-32 "
                onClick={() => navigation("/services")}
              >
                Go Back
              </button>
              <a
                href="https://wa.me/08231231412?text=Hi%20!!%F0%9F%91%8B%20Aditi%20I%20just%20watch%20your%20Page%20and%20wanted%20to%20know%20More%20about%20it%20.."
                target="_blank"
              >
                <button className="bg-green-600 p-2 font-bold text-white rounded-lg w-40 flex items-center gap-2 ">
                  <FaWhatsapp size={30} />
                  Message Me{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p className={noServiceClass}>Service not found</p>
      )}
    </div>
  );
};

export default ServicesCoprate;
