"use client";

// import serverSideFunction from "@/utils/server-utils";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useTheme } from "../themeProvide";
import clientSideFunction from "@/utils/client-utils";

export default function ImageSlider() {
  const theme = useTheme();
  const result = clientSideFunction();
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
      <h1 style={{ color: theme.primary }}>client route{result} </h1>
    </div>
  );
}
//here if we try to use the server only code there will be the error
//third party peoviders
