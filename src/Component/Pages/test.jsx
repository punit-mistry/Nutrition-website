import React, { useState, useEffect } from "react";
import img3 from "../../assets/img3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  const scrollToSection = () => {
    const section = document.getElementById("second-section");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="w-full h-full p-20 flex gap-10">
        <div className="w-1/2">
          <span className="font-serif text-7xl">
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
        <div className="w-1/2">
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

          <div className="flex gap-10 items-center justify-center">
            {ServicesData.map((res) => {
              return (
                <div className="flex items-center">
                  <div className="bg-green-500 w-[14vw] h-60 rounded-3xl font-bold flex items-center justify-center">
                    {res.Title}
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

const ServicesData = [
  {
    Title: "Weight Management",
    img: "https://images.unsplash.com/photo-1598532213919-078e54dd1f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    content: `If you are a weight watcher and have been trying to lose those extra kilos but could not get any results! Our weight management program is tailor-made. Diet recommendation for your health goals and body’s requirement. We consider your working schedule and daily routine while curating your plan. We do not recommend any crash diet for unrealistic results; long-term lifestyle changes are a better choice for sustainable results.`,
    features: [
      "Detailed 1-2-1 session",
      "Customized detailed diet recommendation.",
      "Guidance to understand the recommended changes.",
      "Holistic approach toward your health goal.",
      "Activity that you can start with, for better results.",
      "Doubt solving post the sessions.",
    ],
  },
  {
    Title: "Diabetes Management Type 1 / 2",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    content: `If you are struggling to maintain your blood sugar levels within the range even being on oral medication / insulin therapy, then our diet consultation for diabetes management will help you get your blood sugar levels to desired readings. Be it fasting blood sugar level or post-meal readings or HbA1c level, diet modification can help you see changes on all these reports.`,
    features: [
      "Detailed 1-2-1 session",
      "Customized detailed diet recommendation.",
      "Guidance to understand the recommended changes.",
      "Understanding of your health conditions and pain points.",
      "Activity that you can start with, for better results.",
      "Doubt solving post the sessions.",
    ],
  },
  {
    Title: "Poly Cystic Ovarian Disease (PCOD)",
    img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    content: `This condition brings a metabolic change in hormone system + body composition + the way food is metabolized. PCOD makes it more difficult for the individual to lose weight, due to the imbalance of insulin production & irregular periods. Diet modification is a potent way of supporting the treatment of PCOD, which helps to manage the symptoms.`,
    features: [
      "Detailed 1-2-1 session",
      "Customized detailed diet recommendation.",
      "Guidance to understand the recommended changes.",
      "Activity that you can start with, for better results.",
      "Doubt solving post the sessions.",
    ],
  },
  {
    Title: "Gestational Diabetes (GDM)",
    img: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: `Gestational diabetes is when high sugar levels are detected during pregnancy. Maintaining a healthy balanced diet is utmost important for baby’s development in the womb and mother’s health. We consider mother’s requirement and cravings; thus, the diet is planned with multiple options and substitutes.`,
    features: [
      "Detailed 1-2-1 session",
      "Customized detailed diet recommendation.",
      "Guidance to understand the recommended changes.",
      "Doubt solving post the sessions.",
    ],
  },
  {
    Title: "Cancer",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    content: `Diet plays a particularly important role during cancer treatment. To successfully survive the chemotherapy / radiation therapy, one needs a strong diet backup. Scientific-based nutrition therapy during cancer treatment determines better recovery during and post-treatment. Diet recommendations will also help reduce side-effects commonly seen during cancer treatment.`,
    features: [
      "Detailed 1-2-1 session",
      "Customized detailed diet recommendation.",
      "Guidance to understand the recommended changes.",
      "Guidance for how to prep food for alternate feeding methods.",
      "Suggestion on Yoga practice that will help in your condition.",
      "Doubt solving post the sessions.",
    ],
  },
  {
    Title: "Thyroid",
    img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1078&q=80",
    content: `Thyroid is an inflammatory disease, where anti-inflammatory food helps the body to fight the condition better. Even being on thyroid medication if you face symptoms like weakness, hairfall, low hemoglobin, weight gain, etc., then our nutrition counseling will help you manage these symptoms well.`,
    features: [
      "Detailed 1-2-1 session",
      "Customized detailed diet recommendation.",
      "Guidance to understand the recommended changes.",
      "Activity that you can start with, for better results.",
      "Doubt solving post the sessions.",
    ],
  },
];
