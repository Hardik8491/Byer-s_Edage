"use client";
import React, { useState } from "react";
import { BiLogOut, BiSearch, BiUser } from "react-icons/bi";
import { IoCardOutline, IoSettingsOutline } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import { RiComputerFill } from "react-icons/ri";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import { PiEngineBold } from "react-icons/pi";
import { MdDoNotDisturbOnTotalSilence, MdFavoriteBorder } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin4Line } from "react-icons/ri";

const UserProfile = () => {
  const { user } = useUser();

  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event: any) => {
    const value = event.target.value;
    setSliderValue(value);
  };
  const nabs=[
    {
      name:"profile",
      icons:<BiUser/>
    },
    {
      name:"profile",
      icons:<BiUser/>
    },
    {
      name:"profile",
      icons:<BiUser/>
    },
    {
      name:"profile",
      icons:<BiUser/>
    }
  ]

  return (
    <div className=" w-full flex text-black h-[100%] cursor-pointer ">
      <div className="flex gap-4 m-6 w-[100%] ">
       
        <div className="w-[80%] flex flex-col bg-white">
        <div className="flex items-center gap-2 justify-between px-4 pb-10  ">
           <div className="flex items-center gap-2 ">
          <span className=" p-3 rounded-full border-r-red-700 border-t border-b border-red-300 border-r-8 ">  <img src="/eshop.jpg"  width={90} height={90} alt=""  className=""/></span>
            <h1 className="text-3xl text-red-400  font-semibold px-4">Buyers Edge  </h1>
           </div>

           <div className="bg-red-50 p-2 rounded-md flex items-center shadow justify-between">
            <input type="text" placeholder="Search..." className="outline-none border-none bg-transparent" />
            <BiSearch/>
           </div>
        </div>

          <div className="flex">
              {/* navsestio  */}
          <div className="w-[30%] mt-6 h-full text-gray-400 ">
            <div className="grid grid-cols-1 h-[50%] gap-6 ">
             {/* {nabs.map((item)=>(
                   <div className="bg-violet-50 px-5  rounded-xl hover:bg-violet-500 hover:text-white flex items-center gap-6">
                <div className="ico text-violet-700 hover:text-white group-hover:text-white"> 
                  
                  {item.icons}
                </div>
                <div>{item.name}</div>
              </div> 
             ))} */}

              <div className="bg-violet-50 px-5  rounded-xl hover:bg-violet-500 hover:text-white flex items-center gap-6">
                <div className="ico text-violet-700 hover:text-white group-hover:text-white"> 
                  <BiUser />
                </div>
                <div>Profile</div>
              </div>
          <div className="bg-violet-50 px-5  rounded-xl hover:bg-violet-500 hover:text-white flex items-center gap-6">
                <div className="ico text-violet-700">
                  <RiComputerFill />
                </div>
                <div>My Computers</div>
              </div>
              <div className="bg-violet-50 px-5  rounded-xl hover:bg-violet-500 hover:text-white flex items-center gap-6">
                <div className="ico text-violet-700">
                  <ImAttachment className="ico text-violet-700" />
                </div>
                <div>Order History</div>
              </div>
             <div className="bg-violet-50 px-5  rounded-xl hover:bg-violet-500 hover:text-white flex items-center gap-6">
                <div className="ico text-violet-700 ">
                  <IoCardOutline />
                </div>
                <div>Cards Details</div>
              </div>
              <div className="bg-violet-50 px-5  rounded-xl hover:bg-violet-500 hover:text-white flex items-center gap-6">
                <div className="ico text-violet-700">
                  <MdFavoriteBorder />
                </div>
                <div>My Favorite</div>
              </div>
              <div className="bg-violet-50 px-5  rounded-xl hover:bg-violet-500 hover:text-white flex items-center gap-6">
                <div className="ico text-violet-700">
                  <IoSettingsOutline />
                </div>
                <div>Setting</div>
              </div>
            </div>
          </div>
          {/* Profile Session */}
          <div className="w-[100%] flex flex-col mt-2  ">
            <div className="mb-10">
              <h2 className="flex  font-sans flex-col text-5xl tracking-widest font-semibold  p-4 ">
                PROFILE
              </h2>
              <span className="text-slate-300 p-4 -pt-6 ">
                Welcome back to your home! Here to check your activity you done!
              </span>
            </div>
            <div>
              <div className="contaienr grid grid-cols-4 gap-4 p-4">
                <div className="bg-violet-50  w-full flex flex-col px-10 py-1 rounded-2xl ">
                  <p className="py-2">CPU</p>
                  <span className="py-10">
                    Your need a hardwere for computer
                  </span>
                  <p className="py-2">AMD Ryzen 5 3600</p>
                </div>
                <div className="bg-violet-50 w-full px-10 py-1  flex flex-col   rounded-2xl">
                  <p className="py-2">CPU</p>
                  <span className="py-10">
                    Your need a hardwere for computer
                  </span>
                  <p className="py-2">AMD Ryzen 5 3600</p>
                </div>
                <div className="bg-violet-50 w-full px-10 py-1  flex flex-col   rounded-2xl">
                  <p className="py-2">CPU</p>
                  <span className="py-10">
                    Your need a hardwere for computer
                  </span>
                  <p className="py-2">AMD Ryzen 5 3600</p>
                </div>
                <div className="bg-violet-50 w-full px-10 py-1  flex flex-col    rounded-2xl">
                  <p className="py-2">CPU</p>
                  <span className="py-10">
                    Your need a hardwere for computer
                  </span>

                  <div className="bottom-0  text-xs">
                    <p className="py-2">AMD Ryzen 5 3600</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 ">
              {/* History */}
              <div className=" flex flex-col p-4 ">
                <h2 className="cursiv flex  font-sans flex-col  text-2xl  tracking-widest font-semibold  p-4">
                  Browsing History
                </h2>
                <p className="text-slate-300 text-sm">
                  Here to check what you visited here
                </p>

                <div className="grid grid-cols-1 gap-2 p-4">
                  <div className=" flex items-center gap-2 justify-between">
                    <img
                      src="p4.png"
                      alt="img"
                      className="p-4 border  rounded-lg bg-violet-50"
                    />
                    <div className="">
                      <h3 className="text-xl text-gray-700/95 font-medium cursiv">
                        Bodsiaejfoawek
                      </h3>
                      <p className="text-gray-300">display card</p>
                    </div>
                    <button className="py-1 px-4  text-blue-600 bg-violet-50 rounded-xl">
                      Details
                    </button>
                  </div>
                  <div className=" flex items-center gap-2 justify-between">
                    <img
                      src=""
                      alt="img"
                      className="p-4 border  rounded-lg bg-violet-50"
                    />
                    <div>
                      <h3 className="text-xl text-gray-700/95 font-medium cursiv">
                        Bodsiaejfoawek
                      </h3>
                      <p className="text-gray-300">display card</p>
                    </div>
                    <button className="py-1 px-4 bg-violet-50 text-blue-600 rounded-xl">
                      Details
                    </button>
                  </div>
                  <div className=" flex items-center gap-2 justify-between">
                    <img
                      src="p4.png"
                      alt="img"
                      className="p-4 border  rounded-lg bg-violet-50"
                    />
                    <div>
                      <h3 className="text-xl text-gray-700/95 font-medium cursiv">
                        Bodsiaejfoawek
                      </h3>
                      <p className="text-gray-300">display card</p>
                    </div>
                    <button className="py-1 px-4 bg-violet-50  text-blue-600 rounded-xl">
                      Details
                    </button>
                  </div>
                  <div className=" flex items-center gap-2 justify-between">
                    <img
                      src="p4.png"
                      alt="img"
                      className="p-4 border rounded-lg bg-violet-50"
                    />
                    <div>
                      <h3 className="text-xl text-gray-700/95 font-medium cursiv">
                        Bodsiaejfoawek
                      </h3>
                      <p className="text-gray-300">display card</p>
                    </div>

                    <button className="py-1 px-4 = text-blue-600 bg-violet-50 rounded-xl">
                      Details
                    </button>
                  </div>
                </div>
              </div>
              {/* REvies */}
              <div className="flex flex-col p-4">
                <h2 className="cursiv  flex  font-sans flex-col text-2xl  tracking-widest font-semibold  p-4">
                  Your Review
                </h2>
                <p className="text-slate-300 text-sm">
                  Here to check the message you left
                </p>
                <div className="bg-slate-100 mt-10 flex flex-col item gap-2">
                  <span className="text-slate-300 p-4">AMD Ryzen 5 3600</span>
                  <p className="text-slate-800 items-center p-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officiis doloribus iure reiciendis necessitatibus quam in.
                    Velit corrupti cupiditate quidem. Sed corporis nam sit quae
                    et excepturi, ad expedita possimus aliquam placeat nihil
                    explicabo quos odio velit neque obcaecati aspernatur enim,
                    maiores ea nobis dolor, impedit iure dolorum molestias.
                    Atque, maiores? Autem saepe aliquam quas rerum.
                  </p>
                  <div className="flex items-center gap-2 p-4">
                    <GoPencil />
                    <RiDeleteBin4Line />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="p-6  h-full  rounded-3xl shadow-md bg-slate-50 w-[25%]">
          {/* image section */}
          <div className="relative  w-full ">
            <span className=" p-1 right-0 absolute">
              <BiLogOut />
            </span>

            <div className=" flex  items-center   flex-col justify-center">
              <Image
                src="/profile.png"
                alt="image"
                height={190}
                width={160}
                className="object-cover rounded-full"
              />
            </div>

            <div className="info flex items-center flex-col pb-4 ">
              <h2 className="text-2xl font-semibold flex items-center justify-center italic">
                <span className="cursiv font-thin text-3xl py-2 tracking-widest ">
                  Mr.
                </span>
                {user?.username}
              </h2>
              <p className="text-gray-400 text-base tracking-widest  cursiv ">
                {user?.email}
              </p>
            </div>
          </div>
          {/* brouse itmes */}
          <div className="grid grid-cols-2 mt-6 p-4 items-center w-full gap-4  list-none rounded-xl shadow-sm bg-white  ">
            <li className="flex flex-col p-1 items-center w-full ">
              <span className=" py-1 px-1  w-full text-sm  items-center bg-blue-50  text-blue-800 font-medium rounded-xl">
                <p className="text-sm p-1 flex items-center justify-center ">
                  {" "}
                  browsed item
                </p>
              </span>
              <span className="font-semibold py-2  items-center ml-2 ">
                2340
              </span>
            </li>
            <li className="flex flex-col p-1  items-center ">
              <span
                className="py-1 px-1 bg-violet-50 font-medium text-violet-500 flex items-center rounded-xl
              w-full">
                <p className="text-sm p-1 w-full flex  justify-center items-center">
                  {" "}
                  older count
                </p>
              </span>
              <span className="font-semibold  py-2  ml-2">32</span>
            </li>
            <li className="flex flex-col p-1 items-center">
              <span className="py-1 px-1 items-center font-medium  bg-orange-50 text-orange-500 rounded-xl w-full">
                <p className="text-sm p-1 flex items-center justify-center ">
                  {" "}
                  loved item
                </p>
              </span>
              <span className="font-semibold   py-2 ml-2">127</span>
            </li>
            <li className="flex flex-col p-1 w-full items-center">
              <span className="py-1 flex px-1 font-medium bg-green-50  rounded-xl text-[#5cec28]  items-center w-full">
                <p className="text-sm p-1 flex w-full items-center  justify-center ">
                  {" "}
                  reviewed
                </p>
              </span>
              <span className="font-semibold  py-2  ml-2">29</span>
            </li>
          </div>
          {/* rating lavels */}
          <div className="grid grid-cols-1 mt-6 p-4 items-center w-full gap-4  list-none rounded-xl shadow-sm bg-white  ">
            <div className="flex flex-col  ">
              <span className="text-xl  font-thin cursiv">Your Rank</span>
              <p className="text-gray-300 text-sm font-thin   ">
                Compared to other user
              </p>
              <div className="w-full bg-[#ede5f659] h-[7px] my-3 py-3  flex items-center rounded-md">
                <div
                  className="bg-violet-800 h-[18px] rounded-md flex items-center justify-center  relative "
                  style={{ width: "32%" }}>
                  <span className="text-white bg-violet-800 absolute  font-Poppins font-medium h-[18px]  flex items-center justify-center rounded-md px-[.9375rem] top-0 mt-[-0px] right-0 translate-x-2/4">
                    <p className="text-sm">32%</p>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xl font-thin cursiv">
                Your Wanted Level
              </span>
              <p className="text-gray-300 text-sm font-thin ">
                Upgrade your computer fore reaching
              </p>
              <div className="w-full bg-[#ede5f659] h-[7px] my-3 py-3  flex items-center rounded-md">
                <div
                  className="bg-violet-800 h-[18px] rounded-md flex items-center justify-center  relative "
                  style={{ width: "60%" }}>
                  <span className="text-white bg-violet-800 absolute  font-Poppins font-medium h-[18px]  flex items-center justify-center rounded-md px-[.9375rem] top-0 mt-[-0px] right-0 translate-x-2/4">
                    <p className="text-sm">60%</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
