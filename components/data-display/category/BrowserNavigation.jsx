import { ArrowDownIcon } from "libs/icons";
import Image from "next/image";

const BrowseNavigation = () => {
  return (
    <>
      <div
        className="bg-white lg:block hidden"
        style={{ borderBottom: "1px solid rgba(185, 185, 185, 0.2)" }}
      >
        <div className="container mx-auto flex">
          <div className="md:w-[20%]">
            <div className="bg-[#1B7FED] flex justify-between items-center px-5 py-4">
              <div className="flex justify-start items-center gap-4">
                <h6 className="font-bold text-sm text-white">
                  Browse Category
                </h6>
              </div>
              <ArrowDownIcon />
            </div>
          </div>

          <div className=" flex justify-start items-center">
            <ul className="list-none flex justify-start items-center gap-5 ms-14">
              <li className="text-gray-800 font-semibold text-sm hover:text-blue-600 cursor-pointer">
                Home
              </li>
              <li className="cursor-pointer flex justify-start items-center gap-2 text-gray-800 font-semibold text-sm hover:text-blue-600">
                <span>Offers</span>
              </li>
              <li className="cursor-pointer flex justify-start items-center gap-2 text-gray-800 font-semibold text-sm hover:text-blue-600">
                <span>Stores</span>
              </li>
              <li className="cursor-pointer flex justify-start items-center gap-2 text-gray-800 font-semibold text-sm hover:text-blue-600">
                <span>Brands</span>
              </li>
              <li className="cursor-pointer flex justify-start items-center gap-2 text-gray-800 font-semibold text-sm hover:text-blue-600">
                <span>Discounted Products</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseNavigation;
