import React, { useState, useEffect } from "react";
import img3 from "../../assets/img3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ServicesData } from "./ServicesData";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();
  const scrollToSection = () => {
    const section = document.getElementById("second-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const NavigatetoPage = (title) => {
    navigate(`/services/${title}`);
  };

  return (
    <>
      <div className="w-full h-full p-5 md:p-20 flex flex-col-reverse md:flex-row gap-10">
        <div className="md:w-1/2 text-center">
          <span className="font-serif text-xl md:text-7xl">
            Start eating, Feeling and living better today. Build good habits
            with us and our meal plans.
          </span>
          <br />
          <br />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
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

        <div className="w-full  ">
          {/* <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={5000}
              infiniteLoop={true}
              className="max-w-screen p-10 "
            >
              <div className="flex   gap-10">
                <div className="h-96 bg-green-500 w-96 rounded-3xl "></div>
                <div className="text-left ">
                  <span className="text-5xl">Weight management</span>
                  <br />
                  <br />

                  <span>
                    Our weight management program is tailor made. Diet
                    recommendation for your health goals and body’s requirement.
                    We consider your working schedule <br /> and daily routine
                    while curating your plan. We do not recommend any crash diet
                    for unrealistic results; long term lifestyle changes are a
                    <br />
                    better choice for sustainable results.
                  </span>
                  <br />

                  <ul className="p-8 list-disc  text-xl">
                    <li className="">Detailed 1-2-1 session</li>
                    <li className="">
                      Customised detailed diet recommendation.
                    </li>
                    <li className="">
                      Guidance to understand the recommended changes.
                    </li>
                    <li className="">
                      Holistic approach toward your health goal.
                    </li>
                    <li className="">
                      Activity that you can start with, for better results.
                    </li>
                    <li className="">Doubt solving post the sessions.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center   gap-10">
                <div className="h-96 bg-green-500 w-96 rounded-3xl"></div>
                <span>akshbdkhasbdkh</span>
              </div>
              <div className="flex items-center   gap-10">
                <div className="h-96 bg-green-500 w-96 rounded-3xl"></div>
                <span>akshbdkhasbdkh</span>
              </div>
              <div className="flex items-center   gap-10">
                <div className="h-96 bg-green-500 w-96 rounded-3xl"></div>
                <span>akshbdkhasbdkh</span>
              </div>
              <div className="flex items-center   gap-10">
                <div className="h-96 bg-green-500 w-96 rounded-3xl"></div>
                <span>akshbdkhasbdkh</span>
              </div>
              <div className="flex items-center   gap-10">
                <div className="h-96 bg-green-500 w-96 rounded-3xl"></div>
                <span>akshbdkhasbdkh</span>
              </div>
            </Carousel> */}

          <div className="flex gap-5 items-center flex-col md:flex-row justify-center ">
            {ServicesData.map((res) => {
              return (
                <div
                  className="flex items-center hover:scale-110 transition-all cursor-pointer "
                  key={res.Title}
                  onClick={() => NavigatetoPage(res.id)}
                >
                  <div
                    className="bg-green-500 w-96 md:w-[15vw] h-60 rounded-3xl font-bold flex items-center justify-center bg-cover group hover:bg-black"
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
