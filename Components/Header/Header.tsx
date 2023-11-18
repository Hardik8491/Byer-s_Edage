"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";
import ProfileCard from "../Profile/ProfileCard";
import { useSession } from "next-auth/react";

const Header = () => {


  const menus = [
    { label: "Home", value: "/Home" },
    { label: "Contact", value: "/Home" },
    { label: "About", value: "/Home" },
    { label: "SignUp", value: "/Register" },
  ];
  const [currTab, setCurrTab] = useState("Home");
  const [signIn, setSignIn] = useState(true);
  const [profileTab, setProfileTab] = useState(false);
  const profileToggle = () => {
    setProfileTab(!profileTab);
  };

  const router = useRouter();
  return (
    <div className="text-black  px-[135px] py-[20px] font-medium text-lg cursor-pointer">
      <div className="flex list-none justify-between">
        <div className="text-2xl font-bold" onClick={() => router.push("/")}>
          Buyer’s Edge
        </div>

        <div className="flex items-center justify-between gap-12 font-medium text-lg">
          {menus.map((menu, index) => (
            <Link
              href={menu.value}
              key={index}
              className={`${
                currTab == menu.label ? "border-b-2  border-gray-600 " : ""
              }`}
              onClick={() => setCurrTab(menu.label)}>
              {" "}
              {menu.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between gap-10">
          <li>
            <div className="flex  justify-around items-center gap-2 bg-gray-100 p-2  ">
              <input
                type="text"
                placeholder="What are you looking for?"
                name=""
                id=""
                className="bg-gray-100 outline-none"
              />

              <FiSearch className="opacity-70" />
            </div>
          </li>
          <li>
            <AiOutlineHeart className="w-7 h-7" />
          </li>
          <li className="relative z-0">
            <span className="absolute z-10 bg-red-500 rounded-full text-xs font-sans flex items-center justify-center  w-4 h-4 mt-1 left-4 -top-2 text-white cursor-pointer ">5</span>
            <PiShoppingCartLight
              className="w-7 h-7"
              onClick={() => router.push("/Cart")}
            />
          </li>
          {signIn ? (
            <li className="relative flex  flex-col items-center ">
              <button onClick={profileToggle}>
                <BiUser 
                
                  className={`w-8 h-8 ${profileTab ?" relative bg-red-500 rounded-full p-1 text-white":""}`}
                  // className=""

                  // onClick={() => router.push("/profile")}
                />
              </button>
              {profileTab ? (
                <div className="absolute mt-10 flex  justify-center z-10  bg-gray-900/40 rounded backdrop-blur-[40px]   mr-48 border-none w-60  h-60 ">
                  <div className="mt-4">
                    <ProfileCard />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </li>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
