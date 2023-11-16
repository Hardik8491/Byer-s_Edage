"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { productData } from "@/Components/test/test";
import Product from "../Product/Product";
import useProducts from "@/actions/useProducts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Example: You can use any icons or components you prefer.
import { FiChevronLeft } from "react-icons/fi";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BiChevronRight } from "react-icons/bi";

const SallingProduct = () => {
  const { products } = useProducts();

  const product = products?.map((item: any) => <Product product={item} />);
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group top-0 flex gap-2 m-2 right-0 absolute ">
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
      items: 5,
      slidesToSlide: 4,
    },
    xl: {
      breakpoint: { max: 1600, min: 1200 },
      items: 4,
      slidesToSlide: 2,
    },
    lg: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
      slidesToSlide: 2,
    },
    md: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
      slidesToSlide: 2,
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
    <div className=" relative mt-10 flex flex-col justify-center text-black  mx-[135px]   ">
      <h1 className="text-3xl p-1  font-bold m-2  "> Shell Products</h1>
      {/* <div className="w-full p-4"></div> */}

      <Carousel
        arrows={false}
        responsive={responsive}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        className="flex mt-2"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={false}>
        {product}
      </Carousel>
    </div>
  );
};

export default SallingProduct;
