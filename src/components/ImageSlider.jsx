"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <Image
              src={`https://picsum.photos/seed/${i}/400/200`}
              alt="Random image"
              width={400}
              height={200}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
//here if we try to use the server only code there will be the error
//third party  provider
