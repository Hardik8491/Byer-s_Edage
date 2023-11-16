import Link from "next/link";
import React from "react";
import LanguageSelector from "./languages";

const TopHeader = () => {
  return (
    <div className="bg-black flex w-full justify-around h-[48px] items-center ">
      <div className="flex ">
        <h1 className="font-thin">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <Link href="Products/shall">
          <span className="ml-4 font-semibold hover:underline sine-text cursor-pointer">
            ShopNow
          </span>
        </Link>
      </div>
      <div className="">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default TopHeader;
