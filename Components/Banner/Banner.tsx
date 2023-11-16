"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.module.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {

  // const [currImgIdx, setCurrImgIdx] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrImgIdx((currImgIdx + 1) % banners.length);
  //   }, 2000);

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, [currImgIdx]);

  // const bannerStyle = {
  //   transform: `translateX(-${currImgIdx * 100}%)`, // Adjust the shift based on the current image index
  //   transition: "transform 0.5s ease-in-out", // Add a smooth transition effect
  // };

  return (
    <div className="mt-4  w-[80em] z-0">
      <div className="flex overflow-hidden h-[20rem] ">
        <Carousel
          autoPlay
          infiniteLoop
          dynamicHeight
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={5000}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              backgroundColor: "gray",
              cursor: "pointer",
              borderRadius: "50%",
              display: "flex",
              height: "1rem",
              width: "1rem",
              padding: ".25rem",
            };
            const style = isSelected
              ? {
                  backgroundColor: "red",
                  boxSizing: "border-box",
                  borderRadius: "50%",
                  border: "2px solid white",
                  height: "1rem",
                  width: "1rem",
                  padding: ".25rem",
                }
              : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
                className="bg-gray-800 ">
                {""}
              </span>
            );
          }} className="cursor-pointer ">
          <div>
            <img
              src="/bn.png"
              loading="lazy"
              alt="image1"
              className="h-[20rem]"
            />
            {/* <p className="legend">Image 1</p> */}
          </div>
          <div>
            <img
              src="/img1.png"
              loading="lazy"
              alt="image2"
              className="h-[20rem]"
            />
            {/* <p className="legend">Image 2</p> */}
          </div>
          <div>
            <img
              src="/img2.png"
              loading="lazy"
              alt="image3"
              className="h-[20rem]"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <img
              src="/img3.png"
              loading="lazy"
              alt="image4"
              className="h-[20rem]"
            />
            {/* <p className="legend">Image 4</p> */}
          </div>
          <div>
            <img
              src="/img4.png"
              loading="lazy"
              alt="image4"
              className="h-[20rem]"
            />
            {/* <p className="legend">Image 4</p> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

// import React, { useState } from 'react';
// import Image from 'your-image-library'; // Replace with the actual image library you're using

// const SliderComponent = () => {
//   const banners = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image URLs
//   const [currImgIdx, setCurrImgIdx] = useState(0);

//   const nextImage = () => {
//     setCurrImgIdx((prevIdx) => (prevIdx + 1) % banners.length);
//   };

//   const prevImage = () => {
//     setCurrImgIdx((prevIdx) => (prevIdx - 1 + banners.length) % banners.length);
//   };

//   return (
//     <div className="w-full mt-4 h-[100%] relative object-cover">
//       <Image src={banners[currImgIdx]} alt="Img" fill className="object-fit" />
//       <button onClick={prevImage}>Previous</button>
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };
