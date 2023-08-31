import React,{useState,useEffect} from "react";
import img3 from "../../assets/img3.png";
import { Button } from "@mui/material";
const Services = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    if (!cartItems.some((cartItem) => cartItem.title === item.title)) {
      setCartItems([...cartItems, item]);
    }
  };
  const button = {
    color:"black",
    
    backgroundColor: "#F28C28",
    "&:hover": {
      backgroundColor: "#FF5F1F",
    },
  };
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
          <Button
            variant="contained"
            sx={button}
            onClick={scrollToSection}
          >
            View Meal Plans
          </Button>
        </div>
        <div className="w-1/2">
          <img src={img3} />
        </div>
      </div>
      {/* Second Section */}

      <div id="second-section" className="w-full h-full flex flex-col justify-center items-center p-20">
        <span className="text-7xl"> Healthy Meals</span>
        <br />
        <span>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </span>
        <br />
        <div className="flex gap-10 flex-wrap justify-center items-center px-52">
          {itemData.map((res) => {
            return (
              <div className=" flex justify-center items-center flex-col" style={{width:"25%"}}>
                <img src={res.img} style={{width:"100%"}} />
                <span>{res.title}</span>
               
                <span> &#8377; {res.Price}</span>
                <button onClick={() => addToCart(res)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
        <div>{cartItems.map((res)=>{
          return (
            <div>
              {res.title}
              </div>
          )
        })}</div>
        <br />
      </div>
    </>
  );
};

export default Services;
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Meal 1",
    Price:650
  },
  {
    img: "https://images.unsplash.com/photo-1598532213919-078e54dd1f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    title: "Meal 1",
    Price:650
  },
  {
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Meal 3",
    Price:650
  },
  {
    img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    title: "Meal 4",
    Price:650
  },
  {
    img: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Meal 5",
    Price:650
  },
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    title: "Meal 6",
    Price:650
  },
  {
    img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1078&q=80",
    title: "Meal 7",
    Price:650
  },
];
