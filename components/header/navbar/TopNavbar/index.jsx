"use client";
import { CloseIcon } from "libs/icons";
import { useState } from "react";

export default function TopNavbar() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {isModalOpen && (
        <div class=" bg-[url('/assets/images/banner/top_navbar-bg-banner.png')] bg-no-repeat bg-cover bg-center p-1 md:p-3">
          <div className="flex items-center justify-between pr-6 md:container md:grid md:grid-cols-12 ">
            <div className="col-span-3">
              <button onClick={handleClose}>
                <CloseIcon className="text-[#1B7FED] h-5 w-5 md:h-[1rem] md:w-[1rem] " />
              </button>
            </div>
            <div className="col-span-6 text-primary md:flex justify-center">
              <p className="text-[.625rem] md:text-sm  md:font-[600]">
                GEt 50% discount in all product from June 2023 to december 2023
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
