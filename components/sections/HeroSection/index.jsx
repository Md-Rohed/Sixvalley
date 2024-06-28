import BrowseNavigation from "@/components/data-display/category/BrowserNavigation";
import Banner from "@/components/data-display/banner";
import Categories from "@/components/data-display/category";

const HeroSection = () => {
  return (
    <>
      <BrowseNavigation />
      <div className="container mx-auto flex justify-between">
        <div className="  rounded-[5px] xl:col-span-2 col-span-12 ">
          <Categories />
        </div>

        <Banner />
      </div>

      {/* for mobiles */}

      <div className="container mx-auto grid grid-cols-1 lg:hidden   ">
        <div className=" hidden sm:block rounded-[5px]  ">
          <div className=" bg-[var(--white-color)] rounded-[5px] lg:ps-[15px] lg:pr-[23px] h-[395px] overflow-y-auto scrollbar ">
            <Categories />
          </div>
        </div>

        <div className="">
          <div className="xl:ms-[15px] pt-[15px]">
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 ">
              <div className=" bg-slate-500 rounded-[3px] banner1 h-[300px] sm:h-[100%]"></div>
              <div className=" bg-slate-500 rounded-[3px] banner4 text-center py-[35px] px-[30px]">
                <Banner />{" "}
              </div>
              <div className="bg-slate-500 rounded-[3px]   banner2 h-[300px] "></div>
              <div className=" bg-slate-500 rounded-[3px] banner3 h-[300px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
