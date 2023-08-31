import React from "react";
import Button from "@mui/material/Button";
import Img1 from ".././assets/img1.png";
import Img2 from ".././assets/img2.png";
const Home = () => {
  const buttonStyle = {
    backgroundColor: "orange",
    width: "150px",
    borderRadius: "15px",
    fontWeight: "bold",
    color: "black",
    "&:hover": {
      backgroundColor: "orange",
    },
  };
  const Image = {
    width: "100%",
    height: "300px",
    borderRadius: "80px",
  };
  return (
    <>
      <div className="w-full p-20">
        {/* // first Section  */}
        <div
          className="flex w-full "
          style={{ height: "90vh" }}
        >
          <div className="w-1/2  font-bold flex  items-center flex-col ">
            <span className=" text-2xl ">Welcome🍿</span>
            <br />
            <span className="text-6xl">
              Unlock Your Health <br /> Potential <br />
              Personalized Nutrition Meals
            </span>
            <br />
            <br />
            <span className="font-normal ml-8">
              Are you ready to take control of your health and embrace a
              vibrant, energetic lifestyle? Look no further!
              <br /> At [Your Company Name], we specialize in providing
              personalized nutrition solutions tailored to your unique needs and
              goals.
            </span>
            <br />
            <br />
            <Button
              variant="contained"
              sx={buttonStyle}
            >
              More
            </Button>
          </div>
          <div className="w-1/2">
            <img
              src={Img1}
              width={"100%"}
              className="h-full w-full rounded-3xl"
            />
          </div>
        </div>

        {/* second Section */}

        <div className="h-screen w-full  p-20">
          <div className="text-3xl font-bold">
            Top Categories 🔥
            <br />
            <br />
            <span className="font-normal text-lg">
              There are many variations of passages of available,<br />but 
              the majorityhave suffered alterations in
            </span>
          </div>
          <br /><br /><br />
          <div className="flex gap-5">
            {itemData.map((res) => {
              return (
                <div className="flex flex-col justify-center items-center w-52">
                  <img
                    src={res.img}
                    style={Image}
                  />
                  <br />
                  <span className="text-2xl font-bold">{res.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Third Section  */}
        <div className="h-screen w-full p-20 flex">
            <div className="w-1/2" >
                <img src={Img2} />
            </div>
            <div className="w-1/2" >
                    <span className="text-orange-500 font-serif text-3xl font-bold">Our Experience</span><br /><br />
                    <span className="text-8xl font-serif">Our Stories Have Emotions</span><br /><br />
                    <span className="text-2xl font-serif">Start your journey today by reaching out to us. We can't wait to welcome you into our home and help you unlock your health potential. Together, we'll make your nutrition goals a reality!</span>
            </div>
        </div>

      </div>
    </>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Meal 1",
  },
  {
    img: "https://images.unsplash.com/photo-1598532213919-078e54dd1f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    title: "Meal 1",
  },
  {
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Meal 3",
  },
  {
    img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    title: "Meal 4",
  },
  {
    img: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Meal 5",
  },
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    title: "Meal 6",
  },
  {
    img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1078&q=80",
    title: "Meal 7",
  },
];

export default Home;
