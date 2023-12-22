import HomeBar from "@/Components/HomeBar/HomeBar";
import Container from "@/Components/ui/container";
import { Mail } from "lucide-react";
import React from "react";
import { IoCall } from "react-icons/io5";

const page = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-md font-semibold font-serif text-gray-600 mb-10">
            <span className="pr-4">Home</span>
            <span>/</span>

            <span className="text-black px-4">Content</span>
          </div>

          <div className="flex text-black gap-8">
            <div className="shadow-md p-8 flex flex-col flex-1">
              <div className="flex flex-col p-4 gap-2 text-sm">
                <span className="flex items-center gap-2 font-semibold text-black">
                  <span className="bg-[#DB4444] p-2 rounded-full  text-white">
                    <IoCall />
                  </span>
                  Call To us
                </span>
                <p>we are avable 24/7 days are week</p>
                <p>phone:+7046478268</p>
              </div>
              <div className="border border-gray-700 w-[90%] mx-auto"></div>
              <div className="flex flex-col flex-1 p-4 gap-2">
                <span className="flex items-center  text-black  font-semibold gap-2">
                  <span className="bg-[#DB4444] p-2 rounded-full text-white">
                    <Mail />
                  </span>
                  Write To us
                </span>
                <p>we are avable 24/7 days are week</p>
                <p>phone:+7046478268</p>
                <p>phone:+7046478268</p>
              </div>
            </div>

            <div className="shadow-md p-8 flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-2 ">
                <input
                  type="text"
                  className="bg-black/5 rounded-sm p-2"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="bg-black/5 rounded-sm p-2"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="bg-black/5 rounded-sm p-2"
                  placeholder="Your Phone"
                />
              </div>
              <div className="flex flex-col w-full">
                <textarea
				  rows={6}
                  className="bg-black/5 rounded-sm p-2 "
                  placeholder="Your Message"
                />
              </div>
			  <div className="flex justify-end">
				<button className="px-6 py-2 bg-[#DB4444] text-white outline-none border-none rounded-sm ">Send Message</button>
			  </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
