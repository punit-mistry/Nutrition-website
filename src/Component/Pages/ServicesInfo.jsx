import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ServicesData } from "./ServicesData";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
const ServicesInfo = () => {
  let { id } = useParams();
  const navigation = useNavigate();
  // Use the find method to find a single item with a matching id
  const service = ServicesData.find((res) => res.id === Number(id));

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
            </div>
            <div className="flex gap-">
              <button
                className="bg-orange-600 p-2 font-bold text-white rounded-lg w-32 "
                onClick={() => navigation("/services")}
              >
                Go Back
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=8286075880&text=Thank%20you%20for%20enquiring%20with%20us.%0A%0ADo%20let%20me%20know%20what%20are%20you%20looking%20for%20and%20I%20will%20get%20back%20to%20you%20as%20soon%20as%20possible.%0A%0ARegards,%0AAditi%20Khanduri"
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

export default ServicesInfo;
