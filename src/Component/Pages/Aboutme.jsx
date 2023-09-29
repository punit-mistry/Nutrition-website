import React from "react";
import img from "../../assets/fruits.png";
import img1 from "../../assets/restaurant.png";
import img2 from "../../assets/vegetables.png";
import { FaBowlFood } from "react-icons/fa6";
const Aboutme = () => {
  return (
    <div className="w-full h-full  font-serif flex flex-col gap-5">
      <div className="text-center text-5xl p-20 flex items-center justify-center flex-col gap-10">
        <span className="text-7xl font-thin">
          <FaBowlFood className="text-orange-500" />
          <br />
          <div className="bg-black w-20 h-2" />
        </span>

        <span className="text-7xl font-thin">Aditi Khanduri</span>
        <div className="bg-black w-20 h-2" />
      </div>
      <div className="bg-yellow-100  md:h-[60vh] flex flex-col md:flex-row gap-10 justify-center items-center p-10 md:p-20">
        <img
          src={img2}
          width={480}
        />
        <span className="text-xl">
          I have been working with sectors like{" "}
          <b>
            leading, Corporate, Hospitals, Clinics, and International Schools
          </b>{" "}
          for the last 10 years. My vision is to create awareness amongst the
          crowd about the importance of healthy eating patterns so that they
          know the true strength and immense power of naturally available food
          and how it can work over one’s health.
          <br />
          <b>" A future vision is to have a Better India = Fitter India." </b>
        </span>
      </div>
      <div className="bg-[#48172d] text-white  md:h-[60vh] flex flex-col-reverse md:flex-row gap-10 justify-center items-center p-10 md:p-20">
        <span>
          My expertise is in managing cases like Metabolic diseases, Weight
          management, Diabetes management, Gestational Diabetes, PCOD (Polly
          Cystic Ovarian Disease), Hypothyroidism, Nutrition support during
          Cancer treatment, Nutrition during and post pregnancy, and nutrition
          &amp; growth chart plotting for kids and much more. My Interest has
          always been in healthy cooking with the motto of adding more
          nutritional value to a given recipe, I have developed creative and
          tasty yet healthy recipes for weight-loss, pediatric cases, diabetics,
          renal patients, for a healthy food delivery company. I conduct a wide
          range of workshop for past 6 years.
        </span>
        <img
          src={img}
          width={480}
          className="mr-8"
        />
      </div>
      <div className="bg-[#fbab18] md:h-[60vh] flex flex-col md:flex-row gap-10 justify-center items-center p-10 md:p-20">
        <img
          src={img1}
          width={480}
          className="mr-8"
        />
        <span>
          I am a certified Yoga trainer and have been conducting personal and
          group yoga sessions since past 11 years. I have contributed in medical
          articles and case study in “Indian Diabetes Educator Journal”. Have
          Intensively working with Diabetologist, Gynaecologist, Surgeons to
          manage their medical cases like diabetes type 1 &amp; 2, PCOD, GDM’s,
          pregnancy and post-operative. As a public speaker I have had the
          opportunity to speak for with Rotary Club, Inner Wheal, Mompruner,
          Practo, and many other organization.
        </span>
      </div>
    </div>
  );
};

export default Aboutme;
