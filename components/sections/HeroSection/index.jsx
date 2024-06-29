import BrowseNavigation from "@/components/data-display/category/BrowserNavigation";
import Banner from "@/components/data-display/banner";
import Categories from "@/components/data-display/category";

const HeroSection = () => {
  return (
    <>
      <BrowseNavigation />
      <div className="container mx-auto md:flex justify-between gap-4 hidden">
        <div className="w-[20%]">
          <Categories />
        </div>
        <div className="w-[80%] mt-[0.938rem]  ">
          <Banner />
        </div>
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
              <Banner />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
