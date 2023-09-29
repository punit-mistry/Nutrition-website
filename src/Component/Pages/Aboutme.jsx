import React, { useEffect, useState } from "react";
// import img from "../../assets/fruits.png";
// import img1 from "../../assets/restaurant.png";
// import img2 from "../../assets/vegetables.png";
// import { FaBowlFood } from "react-icons/fa6";
import { GiThreeLeaves } from "react-icons/gi";
import Logo from "../../assets/logo.jpg";
import img2 from "../../assets/aditi3.jpeg";
const Aboutme = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("scroll-target");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 500) {
          setFadeIn(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full md:h-full font-serif flex flex-col gap-5">
      <div className="h-[80vh] text-center text-5xl p-20 flex items-center justify-center flex-col gap-10 text-orange-500">
        <span className="text-7xl font-thin">
          <GiThreeLeaves />
          {/* <img
            src={Logo}
            width={200}
          /> */}
          <br />
          <div className="bg-black w-20 h-2 " />
        </span>

        <div>Aditi Khanduri</div>
        <div className="bg-black w-20 h-2" />
        <span className="text-gray-600 md:text-xl text-lg">
          (Clinical Dietitian, Certified Diabetes Educator,Yoga Trainer)
        </span>
      </div>

      <div
        id="scroll-target"
        className={`flex flex-col md:flex-row gap-10 ${
          fadeIn ? "fade-in active" : "fade-in"
        }`}
      >
        <div className="md:w-1/2 h-[70vh] md:h-screen bg-orange-500 flex   justify-center items-center md:mx-20">
          <div className="bg-orange-200 h-[65vh] md:w-[35vw] md:h-[90vh] flex items-center justify-center rounded-3xl hover:-translate-y-20 transition-all">
            <img
              src={img2}
              // src="https://i.ibb.co/pfhH3jD/aditi.jpg"
              // src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              className=" w-64 mx-5 md:w-[40vw] rounded-3xl"
            />
          </div>
        </div>
        <div
          className={` md:w-1/2 md:h-screen text-center md:text-left text-3xl `}
        >
          <span className="text-3xl  ">
            Hi! This is Aditi Khanduri.
            <div className="bg-orange-500 mx-5 w-[90vw] md:w-[18vw] h-1 "></div>
          </span>
          <br />
          <div className="text-lg md:pr-20 px-5">
            I have been working with sectors like leading, Corporate, Hospitals,
            Clinics, and International Schools for the last 10 years. My vision
            is to create awareness amongst the crowd about the importance of
            healthy eating patterns so that they know the true strength and
            immense power of naturally available food and how it can work over
            one’s health.{" "}
            <b>A future vision is to have a Better India = Fitter India.</b>{" "}
            <br />
            <br />
            My expertise is in managing cases like Metabolic diseases, Weight
            management, Diabetes management, Gestational Diabetes, PCOD (Polly
            Cystic Ovarian Disease), Hypothyroidism, Nutrition support during
            Cancer treatment, Nutrition during and post pregnancy, and nutrition
            &amp; growth chart plotting for kids and much more. My Interest has
            always been in healthy cooking with the motto of adding more
            nutritional value to a given recipe, I have developed creative and
            tasty yet healthy recipes for weight-loss, pediatric cases,
            diabetics, renal patients, for a healthy food delivery company.
            <br />
            <br /> I conduct a wide range of workshop for past 6 years. I am a
            certified Yoga trainer and have been conducting personal and group
            yoga sessions since past 11 years. I have contributed in medical
            articles and case study in “Indian Diabetes Educator Journal”. Have
            Intensively working with Diabetologist, Gynaecologist, Surgeons to
            manage their medical cases like diabetes type 1 &amp; 2, PCOD,
            GDM’s, pregnancy and post-operative. As a public speaker I have had
            the opportunity to speak for with{" "}
            <b>Rotary Club, Inner Wheal, Mompruner, Practo, </b>and many other
            organization.
          </div>
        </div>
      </div>

      {/* <div className="bg-orange-100 md:h-[60vh] flex flex-col md:flex-row gap-10 justify-center items-center p-10 md:p-20">
        <img
          src={img2}
          width={480}
          alt="Vegetables"
        />
        <span className="text-xl text-orange-500">
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
      <div className="bg-[#ff6600] text-white md:h-[60vh] flex flex-col-reverse md:flex-row gap-10 justify-center items-center p-10 md:p-20">
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
          alt="Fruits"
        />
      </div>
      <div className="bg-orange-400 md:h-[60vh] flex flex-col md:flex-row gap-10 justify-center items-center p-10 md:p-20">
        <img
          src={img1}
          width={480}
          className="mr-8"
          alt="Restaurant"
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
      </div> */}
      <br />
      <div className="flex items-center  flex-col gap-10 justify-center">
        <div className="text-3xl flex item">"Where to Find Me" </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.3978772424775!2d72.83636997163505!3d19.214197600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6cdcc94ef35%3A0x795a2947e104e8fb!2sOrange%20Clinic!5e1!3m2!1sen!2sin!4v1695969577931!5m2!1sen!2sin"
          className="md:w-[90vw] mx-10 h-[50vh]"
        ></iframe>

        <br />
      </div>
    </div>
  );
};

export default Aboutme;
