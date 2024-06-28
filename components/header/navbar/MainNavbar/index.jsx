import {
  ArrowDownIcon,
  CartIcon,
  LogoIcon,
  MenuIcon,
  ProfileIcon,
  SearchIcon,
  ShuffleIcon,
  WishlistIcon,
} from "libs/icons";

export default function MainNavbar() {
  return (
    <div
      className="py-[17px]"
      style={{ borderBottom: "1px solid rgba(185, 185, 185, 0.2)" }}
    >
      <div className="container mx-auto flex justify-between items-center ">
        <div>
          <LogoIcon />
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="border w-[10rem] md:w-[551px] mx-auto rounded-[25px] flex justify-between items-center p-[3px] ">
            <div>
              <div className="flex justify-start items-center gap-[15px] border-r  pr-[7px] ps-[14px]">
                <MenuIcon />
              </div>
            </div>
            <div className="text-left flex-[0.9]">
              <input
                type="search"
                placeholder="Search for items or store..."
                className="w-full h-[2.813rem] "
              />
            </div>
            <button className="bg-[#1B7FED] rounded-e-[25px] px-[20px] py-[11px]">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div></div>
        <div className="hidden md:block">
          <ul className="list-none flex justify-center items-center gap-[30px]">
            <li className="border-r border-[#DEDEDE]  pr-[15px]">
              <ProfileIcon />
            </li>
            <li className="border-r border-[#DEDEDE] pr-[15px] relative">
              <div className="bg-[#1B7FED] absolute -top-2 right-0 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                <span className="text-[12px] font-normal text-white">6</span>
              </div>
              <ShuffleIcon />
            </li>
            <li className="border-r border-[#DEDEDE] pr-[15px] relative">
              <div className="bg-[#1B7FED] absolute -top-2 right-0 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                <span className="text-[12px] font-normal text-white">6</span>
              </div>
              <WishlistIcon />
            </li>
            <li className="relative pr-[15px]">
              <div className="bg-[#1B7FED] absolute -top-2 right-0 w-[20px] h-[20px] rounded-full flex justify-center items-center ">
                <span className="text-[12px] font-normal text-white">6</span>
              </div>
              <CartIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
