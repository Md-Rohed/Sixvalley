import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import { MailIcon } from "libs/icons";

const Newsletter = () => {
  return (
    <div className="bg-[#09336f] sm:rounded-lg px-4 md:px-12 py-7 grid grid-cols-12 mt-6 gap-5 lg:gap-0">
      <div className="text-left col-span-12 lg:col-span-8">
        <h2 className="text-white text-lg font-semibold">Newsletter</h2>
        <p className="text-white text-base mt-1">
          Be the first to know about discounts, offers, and events
        </p>
      </div>
      <div className="flex md:justify-center md:items-center col-span-12 lg:col-span-4">
        <div className="bg-white w-full p-1.5 flex justify-between items-center md:pl-6 rounded-md">
          <div className="flex items-center gap-1.5">
            <MailIcon className="w-[1.5rem]" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full focus:outline-none"
            />
          </div>
          <button className="bg-[#09336f] text-white font-semibold text-sm px-5 py-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
