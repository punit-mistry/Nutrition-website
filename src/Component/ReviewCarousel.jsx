import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Reviews } from "./Pages/ServicesData"; // Assuming you have the Reviews data in a separate file

const ReviewCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={5000} // Set the interval for automatic sliding (5 seconds in this example)
      showArrows={true} // Show navigation arrows
      showThumbs={false} // Hide thumbnail navigation
      className="max-w-screen-md mx-auto"
    >
      {Reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white p-4 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
          <p className="text-gray-700">{review.review}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
