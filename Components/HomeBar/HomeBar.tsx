// @ts-nocheck
"use client";
import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
import Categories from "../ProductList/Categories/Categories";
import BestProduct from "../Products/Best Selling Products/BestProduct";
import ItemBanner from "../ItemBanner/ItemBanner";
import OurProduct from "../OverProduct/OurProduct";
import Featured from "../Featured/Featured";
import { AiOutlineArrowUp } from "react-icons/ai";
import ShallingProduct from "../Products/Best Selling Products/ShallingProduct";

const HomeBar = () => {
  return (
    <div className=" overflow-hidden">
      {/* <div className="flex items-center  sm:px-[10px] md:px-[20px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px]  font-normal  text-lg cursor-pointe  flex-row  text-black px-[100px] w-full h-fit"> */}
      {/* <div className="flex flex-col gap-4 mt-4 w-1/6 mr-4   ">
          <div>Women`s Fashion</div>
          <div>Men`s Fashion</div>
          <div>Electronics</div>
          <div>Home & Lifestyle</div>
          <div>Medicine</div>
          <div>Baby`s & Toy</div>
          <div>Groceries & Pets</div>
          <div>Health & Beauty</div>
        </div> */}

      {/* <div className=" flex items-center mx-auto  z-1 text-gray-700 border-l-2 border-gray-300 pl-20 w-5/6 h-80">
          <Banner />
        </div> */}
      {/* </div> */}
      <div className="flex items-center px-[4px] sm:px-[6px] md:px-[20px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px]  font-normal  text-lg cursor-pointe  flex-row  text-black  w-full h-fit">
        <Banner />
      </div>
      <ShallingProduct />
      {/* <ProductList />
      <Categories />
      <BestProduct />

      <ItemBanner />
      <OurProduct />
      <Featured /> */}

      <div>
        <div className=" flex bg-gray-200 ml-[1740px] w-10 rounded-full justify-center  m-4 h-10 items-center ">
          <AiOutlineArrowUp color="black" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomeBar;
