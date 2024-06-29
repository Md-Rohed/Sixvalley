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
      <div className="container mx-auto grid grid-cols-1 lg:hidden">
        <div className=" hidden sm:block rounded-[5px]">
          <div className=" bg-white rounded-[5px] overflow-y-auto scrollbar">
            <Categories />
          </div>
        </div>

        <div>
          <div className="pt-[15px]">
            <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4">
              <Banner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
