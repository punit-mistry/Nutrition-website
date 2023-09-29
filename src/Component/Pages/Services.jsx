import React, { useState, useEffect } from "react";
import img3 from "../../assets/img3.png";
import ReviewCarousel from "../ReviewCarousel";
import { ServicesData, WorkshopData } from "./ServicesData";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();
  const scrollToSection = () => {
    const section = document.getElementById("second-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [Corporate, setCoporate] = useState(false);

  const NavigatetoPage = (title) => {
    navigate(`/services/${title}`);
  };
  const NavigatetoPageCoprate = (title) => {
    navigate(`/servicesCoprate/${title}`);
  };

  return (
    <>
      <div className="w-full h-full p-5 md:p-20 flex flex-col-reverse md:flex-row gap-10">
        <div className="md:w-1/2 text-center">
          <span className="font-serif text-xl md:text-7xl">
            Treat “Food as Medicine” or time will come when you will have to
            treat “Medicines as Food!”
          </span>
          <br />
          <br />
          <span>
            We have curated our services for different medical areas or pain
            points one might face. If you are focused to work towards your
            health goal, we are here to help you on your journey of being
            healthier you. We are strong believer that everybody if different
            and have unique lifestyle and biological environment, thus a tailor
            maid diet is the key aspect of our services. <br /> <br />
            <b>(We offer these services online and offline as well.)</b>
          </span>

          <br />
          <br />
          <button
            onClick={scrollToSection}
            className="bg-orange-500 p-2 rounded-lg font-bold text-white hover:text-black hover:scale-110 transition-all"
          >
            View Services
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={img3} />
        </div>
      </div>
      {/* Second Section */}

      <div
        id="second-section"
        className="w-full h-full flex flex-col justify-center items-center p-20 gap-10 "
      >
        <span className="text-7xl b"> Services </span>
        <div className="flex gap-10 text-xl">
          <button
            className={`${
              !Corporate ? "border-b-2" : ""
            } border-orange-500 p-3`}
            onClick={() => setCoporate(false)}
          >
            Corporate
          </button>
          <button
            className={`${Corporate ? "border-b-2" : ""} border-orange-500 p-3`}
            onClick={() => setCoporate(true)}
          >
            Clinical
          </button>
        </div>

        <div className="w-full  ">
          <div className="flex gap-5 items-center flex-col md:flex-row justify-center ">
            {Corporate &&
              ServicesData.map((res) => {
                return (
                  <div
                    className="flex items-center hover:scale-110 transition-all cursor-pointer "
                    key={res.Title}
                    onClick={() => NavigatetoPage(res.id)}
                  >
                    <div
                      className=" w-96 md:w-[15vw] h-60 rounded-3xl font-bold flex items-center justify-center bg-cover group hover:bg-black"
                      style={{ backgroundImage: `url(${res.img})` }}
                    >
                      <div className="bg-black text-xl  text-center  w-full p-2 text-white">
                        {" "}
                        {res.Title}{" "}
                      </div>
                    </div>
                  </div>
                );
              })}

            {!Corporate &&
              WorkshopData.map((res) => {
                return (
                  <div
                    className="flex items-center hover:scale-110 transition-all cursor-pointer "
                    key={res.Title}
                    onClick={() => NavigatetoPageCoprate(res.id)}
                  >
                    <div
                      className="shadow-2xl shadow-orange-600 w-96 md:w-[15vw] h-60 rounded-3xl font-bold flex items-center justify-center bg-cover group hover:bg-black"
                      style={{ backgroundImage: `url(${res.img})` }}
                    >
                      <div className="bg-black text-xl  text-center  w-full p-2 text-white">
                        {" "}
                        {res.Title}{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <br />
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="text-4xl ">
            Clinical services
            <div className="bg-orange-500 w-60 h-1 mt-2" />
          </div>
          <div className="flex  flex-col md:flex-row mx-5 gap-5">
            {ServicesData.map((res) => {
              return (
                <div
                  className="flex items-center hover:scale-110 transition-all cursor-pointer hover:shadow-2xl shadow-black  "
                  key={res.Title}
                  onClick={() => NavigatetoPage(res.id)}
                >
                  <div
                    className=" w-96 md:w-[15vw] h-60 rounded-3xl font-bold flex items-center justify-center bg-cover group hover:bg-black"
                    style={{ backgroundImage: `url(${res.img})` }}
                  >
                    <div className="bg-black text-xl  text-center  w-full p-2 text-white">
                      {" "}
                      {res.Title}{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Services;
