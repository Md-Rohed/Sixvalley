import {
  ArrowDownIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "libs/icons";

const HeaderUtilityBar = () => {
  return (
    <>
      <div className="bg-[#0d1d35] py-2 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-start items-center gap-5">
            <button className="bg-[#1b7fed] px-[12.8px] py-[2.75px] text-[13px] text-white font-bold rounded-2xl">
              Become a Seller
            </button>
            <h6 className="text-white text-[12px] font-normal">
              Free Express Shipping
            </h6>
          </div>

          <div className="flex justify-between items-center gap-5">
            <ul className="list-none flex justify-start items-center gap-5">
              <li className="flex justify-start items-center gap-1">
                <h6 className="text-white text-[12px] font-semibold">USD</h6>
                <ArrowDownIcon />
              </li>
              <li className="flex justify-start items-center gap-1">
                <h6 className="text-white text-[12px] font-semibold">EN</h6>
                <ArrowDownIcon />
              </li>
            </ul>

            <ul className="list-none flex justify-start items-center gap-5 ">
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderUtilityBar;
