import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex h-screen space-x-s14 max-h-[200px] min-h-[200px] w-full md:max-h-[490px] md:min-h-[490px]">
      <div className="flex flex-col space-y-2 lg:w-3/4">
        <Image
          src="/assets/images/banner/hero_banner1.png"
          alt="Banner 1"
          height={220}
          width={665}
          className="object-cover w-full h-1/2"
        />
        <div className="flex mr-2 space-x-2 h-1/2">
          <Image
            src="/assets/images/banner/hero_banner2.png"
            alt="Banner 2"
            height={150}
            width={325}
            className="object-cover w-1/2"
          />
          <Image
            src="/assets/images/banner/hero_banner3.png"
            height={150}
            width={325}
            className="object-cover w-1/2"
          />
        </div>
      </div>
      <div className="hidden lg:w-1/4 lg:block">
        <Image
          src="/assets/images/banner/hero_banner4.png"
          alt="Banner 4"
          height={380}
          width={240}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
