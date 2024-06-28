import { ArrowDownIcon } from "libs/icons";
import Image from "next/image";

const BrowseNavigation = () => {
  return (
    <>
      <div
        className="bg-[var(--white-color)] lg:block hidden "
        style={{ borderBottom: "1px solid rgba(185, 185, 185, 0.2)" }}
      >
        <div className="container mx-auto grid grid-cols-12 ">
          <div className="lg:col-span-3 xl:col-span-2">
            <div className="bg-[var(--primary-color)] flex justify-between items-center px-5 py-[19.25px]">
              <div className="flex justify-start items-center gap-[16px]">
                {/* <IoIosMenu className="text-[var(--white-color)]" /> */}
                <h6 className="font-bold text-[14px] text-[var(--white-color)]">
                  Browse Category
                </h6>
              </div>
              <ArrowDownIcon />
            </div>
          </div>

          <div className="lg:col-span-9 xl:col-span-10 flex justify-start items-center">
            <ul className="list-none flex justify-start items-center gap-[20px] ms-[55px]">
              <li className="text-[var(--text-color)] font-semibold text-[13px] hover:text-[var(--primary-color)]  cursor-pointer">
                Home
              </li>
              <li className="  cursor-pointer flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold text-[13px] hover:text-[var(--primary-color)]">
                <span>Offers</span>
              </li>
              <li className="  cursor-pointer flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold text-[13px] hover:text-[var(--primary-color)]">
                <span>Stores</span>
              </li>
              <li className=" cursor-pointer flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold text-[13px] hover:text-[var(--primary-color)]">
                <span>Brands</span>
              </li>
              <li className="  cursor-pointer flex justify-start items-center gap-[10px] text-[var(--text-color)] font-semibold text-[13px] hover:text-[var(--primary-color)]">
                <span>Discounted Products</span>
                {/* <Image
                  src={"./teenyicons_discount-solid.svg"}
                  width={15}
                  height={15}
                  alt="teenyicons_discount-solid"
                /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseNavigation;
