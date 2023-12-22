"use client";
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Product from "../Product/Product";
import useProducts from "@/actions/useProducts";
import { Product  as ProductProps} from "@/type";



const BestProduct = () => {
  const { products } = useProducts();


  const product = products?.map((item:ProductProps,index) => <Product key={index} {...item} />);
  return (
    <div className=" py-10  px-[10px] sm:px-[10px] md:px-[20px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-4 sm:pt-[20px] sm:mb-1 font-normal mb-2 text-lg cursor-pointer">
      <div className="flex items-center gap-2 ">
        <div className="bg-[#DB4444] border-2 h-12 w-5 rounded-md border-[#DB4444] " />
        <p className="text-[#DB4444] font-semibold text-base">This Month</p>
      </div>
      <div className="flex justify-between py-4 ">
        <div className="flex items-center gap-10 text-black">
          <h1 className="text-3xl font-bold">Best Selling Products</h1>
        </div>
        <div className="cursor-pointer bg-transparent flex items-center gap-2 ">
          <button className="bg-[#DB4444] px-10 py-3 rounded-md">
            View All
          </button>
        </div>
      </div>
      <div className="grid md:gap-3 lg:gap-12 xl:gap-20 grid-flow-row-dense  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  mt-2 mx-auto">
      {products &&
          products?.length &&
          products
            .slice(0,8)
            .map((product:ProductProps,index) => <Product key={index} {...product} />)}
      </div>
    </div>
  );
};

export default BestProduct;
