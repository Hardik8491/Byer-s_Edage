// @ts-nocheck
"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "../Product/Product";
import useProducts from "@/actions/useProducts";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Product as ProductProps } from "@/type";

const SallingProduct = () => {
  const { products, loading } = useProducts();

  // if (error) {
    
  // return( <div className="text-red-500 font-bold">
    
  //     Error loading products. Please try again later.
  //   </div>
  // )
  // }
  const product = products?.map((item: ProductProps, index: any) => (
    <Product key={index} {...item} />
  ));
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group top-0 flex gap-2  right-0 lg:pr-16 xl:pr-20 absolute ">
        <button
          className="block p-4 bg-slate-100 rounded-full"
          onClick={() => previous()}
        >
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
      items: 2,
      slidesToSlide: 2,
    },
    xs: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="pb-4    ">
      <div className="relative  mt-10 flex flex-col justify-center  text-black   sm:mx-[10px] md:mx-[20px] lg:mx-[60px] xl:mx-[80px] 2xl:mx-[100px]   ">
        <div className="flex items-center gap-2 pb-4  ">
          <div className="bg-[#DB4444] border-2 h-12 w-5 rounded-md border-[#DB4444]" />

          <p className="text-[#DB4444] font-semibold text-base pb-4">
            Sell Products
          </p>
        </div>

         {loading ? (
          <h1 className="text-3xl p-1 flex  items-center justify-center font-bold m-2 w-full h-full ">
            Loading...
          </h1>
        ) : (
          <Carousel
     
            arrows={false}
            responsive={responsive}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            className="flex mt-2 items-center "
            infinite={true}
            // autoPlay={true}
            autoPlaySpeed={5000}
            showDots={false}
          >
            {product}
          </Carousel>
        )} 
      </div>
    </div>
  );
};

export default SallingProduct;
