import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-[135px]">
        <ul className="flex items-start justify-between pt-12  ">
          <li>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-xl font-semibold py-2 ">Buyer’s Edge</h2>
              <div className="">Subscribe</div>

              <span>Get 10% off your first order </span>
              <div className="bg-transparent border-gray-300 border-2 shadow rounded-md flex items-center justify-center  p-2">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none placeholder:text-gray-500"
                />
                <button className="" >
                  <AiOutlineSend className=""/>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold py-2 ">Support</h2>
              <div className="">
                849 north canso New York City, United State.
              </div>
              <div>buyersedge@hdk.com</div>
              <div>+88015-88888-9999</div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold pt-2  ">Account</h2>
              <div className="hover:text-gray-300 cursor-pointer hover:underline">
                My Account
              </div>
              <div className="hover:text-gray-300 cursor-pointer hover:underline">
                Login/Register
              </div>
              <div className="hover:text-gray-300 cursor-pointer hover:underline">
                Cart
              </div>
              <div className="hover:text-gray-300 cursor-pointer hover:underline">
                Wishlist
              </div>
              <div className="hover:text-gray-300 cursor-pointer hover:underline">
                Shop
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold py-2 ">Quick Link</h2>
              <div className="">Privacy Policy</div>
              <div>Term Of Use</div>
              <div>FAQ</div>
              <div>Contact</div>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold  py-2">Download App</h2>
              <div className="">
                <div className="text-xs">Save $3 with App New User Only</div>
                <div className=" py-2 items-center flex flex-row justify-between gap-2">
                  <div>
                    <img src="qr.png" alt="" />
                  </div>
                  <div className="flex flex-col justify-between gap-2 ">
                    <img src="gl.png" alt="" />

                    <img src="al.png" alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between py-4">
                  <span>
                    <RiFacebookLine className="w-6 h-6" />
                  </span>
                  <span>
                    <RiTwitterXLine className="w-6 h-6 " />
                  </span>
                  <span>
                    <RiInstagramLine className="w-6 h-6" />
                  </span>
                  <span>
                    <RiLinkedinLine className="w-6 h-6 " />
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center border-t  border-gray-800 mt-20  p-4  ">
        <span className="text-gray-200/40 cursor-pointer effect-shine ">
          <a className="effect-sine" href="">
            &copy; Copyright HDK. 2023. All right reserved
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
