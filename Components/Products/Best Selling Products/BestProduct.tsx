"use client";
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Product from "../Product/Product";
import useProducts from "@/actions/useProducts";

const BestProduct = () => {
  const { products, error } = useProducts();


  const product = products?.map((item: any) => <Product product={item} />);
  return (
    <div className="px-[135px] py-10">
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
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mt-2 mx-auto">
      {products &&
          products?.length &&
          products
            .slice(0,8)
            .map((product) => <Product key={product?.id} product={product} />)}
      </div>
    </div>
  );
};

export default BestProduct;
