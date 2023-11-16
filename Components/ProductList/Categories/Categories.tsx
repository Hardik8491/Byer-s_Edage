import CategoryProducts from "@/Components/Products/CategoriesProducts/CategoriesProducts";
import React from "react";

const Categories = () => {
  return (
    <div className="">
      {/* <div className="flex items-center gap-2 ">
        <div className="bg-[#DB4444] border-2 h-12 w-5 rounded-md border-[#DB4444] " />
        <p className="text-[#DB4444] font-semibold text-base">Categories</p>
      </div>
      <div className="flex justify-between py-4 ">
        <div className="flex items-center gap-10 text-black">
          <h1 className="text-3xl font-bold">Browse By Category</h1>
        </div>
        <div className="cursor-pointer bg-transparent flex items-center gap-2 ">
          <div className="p-4 bg-gray-100 rounded-full">
            <GoArrowLeft color="black" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full ">
            <GoArrowRight color="black" />
          </div>
        </div>
      </div>
      <div>*/}
      {/* </div>  */}
      <CategoryProducts />
    </div>
  );
};

export default Categories;
