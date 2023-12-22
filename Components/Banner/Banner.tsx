"use client";
import React, {  } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.module.css";
import { Carousel } from "react-responsive-carousel";
import Img from "next/image";

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
    <div className="mt-4  w-[100em] z-0  py-10  px-[10px] sm:px-[10px] md:px-[20px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-4 sm:pt-[20px] sm:mb-1 font-normal mb-2 text-lg cursor-pointer">
      <div className="flex overflow-hidden h-[12rem] sm:h-[20rem] ">
        <Carousel
          autoPlay
          infiniteLoop
          dynamicHeight
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          interval={5000}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              backgroundColor: "gray",
              // boxSizing:"border-box",
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
                  // boxSizing: "border-box",
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
                // value={index}
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
            <Img
              src="/bn.png"
              loading="lazy"
              alt="image1"
              className=" h-[12rem] sm:h-[20rem]"
            />
            {/* <p className="legend">Image 1</p> */}
          </div>
          <div>
            <Img
              src="/img1.png"
              loading="lazy"
              alt="image2"
               priority
              className=" h-[12rem] sm:h-[20rem]"
            />
            {/* <p className="legend">Image 2</p> */}
          </div>
          <div>
            <Img
              src="/img2.png"
              loading="lazy"
              alt="image3"
              className=" h-[12rem] sm:h-[20rem]"
            />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <Img
              src="/img3.png"
              loading="lazy"
              alt="image4"
              className=" h-[12rem] sm:h-[20rem]"
            />
            {/* <p className="legend">Image 4</p> */}
          </div>
          <div>
            <Img
              src="/img4.png"
              loading="lazy"
              alt="image4"
              className="  h-[12rem] sm:h-[20rem]"
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
