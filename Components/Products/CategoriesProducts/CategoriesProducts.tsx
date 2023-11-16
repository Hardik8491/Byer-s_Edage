"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const CategoryProducts = () => {
  const categories = [
    {
      icon: "/phone.svg",
      label: "phone",
    },
    {
      icon: "/Computer.svg",
      label: "Computers",
    },
    {
      icon: "/SmartWatch.png",
      label: "SmartWatch",
    },
    {
      icon: "/Camera.svg",
      label: "Camera",
    },
    {
      icon: "/HeadPhone.svg",
      label: "HeadPhones",
    },
    {
      icon: "/GamePad.svg",
      label: "Gaming",
    },
    {
      icon: "/phone.svg",
      label: "phone",
    },
    {
      icon: "/Computer.svg",
      label: "Computers",
    },
    {
      icon: "/SmartWatch.png",
      label: "SmartWatch",
    },
    {
      icon: "/Camera.svg",
      label: "Camera",
    },
    {
      icon: "/HeadPhone.svg",
      label: "HeadPhones",
    },
    {
      icon: "/GamePad.svg",
      label: "Gaming",
    },
    {
      icon: "/phone.svg",
      label: "phone",
    },
    {
      icon: "/Computer.svg",
      label: "Computers",
    },
    {
      icon: "/SmartWatch.png",
      label: "SmartWatch",
    },
    {
      icon: "/Camera.svg",
      label: "Camera",
    },
    {
      icon: "/HeadPhone.svg",
      label: "HeadPhones",
    },
    {
      icon: "/GamePad.svg",
      label: "Gaming",
    },
  ];
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group  top-1 pt-10 flex gap-2 m-2 right-0 absolute ">
        <button
          className="block p-4 bg-slate-100 rounded-full"
          onClick={() => previous()}>
          {" "}
          <GoArrowLeft />
        </button>
        <button onClick={() => next()}>
          <span className="block p-4 bg-slate-100 rounded-full">
            <GoArrowRight />
          </span>
        </button>
      </div>
    );
  };
  const responsive = {
    "2xl": {
      breakpoint: { max: 4000, min: 1600 },
      items: 6,
      slidesToSlide: 4,
    },
    xl: {
      breakpoint: { max: 1600, min: 1200 },
      items: 6,
      slidesToSlide: 2,
    },
    lg: {
      breakpoint: { max: 1200, min: 992 },
      items: 4,
      slidesToSlide: 3,
    },
    md: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
      slidesToSlide: 3,
    },
    sm: {
      breakpoint: { max: 768, min: 576 },
      items: 1,
      slidesToSlide: 2,
    },
    xs: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className=" relative mt-0 flex flex-col justify-center text-black   mx-[135px]  ">
      {/* <h1 className="text-3xl p-1  font-bold m-2  "> Shell Products</h1> */}
      {/* <div className="w-full p-4"></div> */}
      <div className="flex items-center gap-2 ">
        <div className="bg-[#DB4444] border-2 h-12 w-5 rounded-md border-[#DB4444] " />
        <p className="text-[#DB4444] font-semibold text-base">Categories</p>
      </div>
      <div className="flex justify-between py-4 ">
        <div className="flex items-center gap-10 text-black">
          <h1 className="text-3xl font-bold">Browse By Category</h1>
        </div>
      </div>
      <Carousel
        arrows={false}
        responsive={responsive}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        className="flex mt-2"
        showDots={false}>
        {categories.map((category) => (
          <div
            className="text-black btn-1 slide-btn  w-48 h-52 shadow-md flex flex-col border p-10 items-center justify-center gap-4 transform transition-transform hover:translate-y-[-5px] hover:shadow-lg hover:bg-red-500" // Added hover:bg-red-500 for red background on hover
            key={category.label}>
            <Image src={category.icon} alt={"img"} width={60} height={60} />
            <p>{category.label}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryProducts;
