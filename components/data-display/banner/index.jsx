import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col space-y-2 w-full md:w-[77%] max-h-[470px]">
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
      <div className="hidden lg:block">
        <Image
          src="/assets/images/banner/hero_banner4.png"
          alt="Banner 4"
          height={500}
          width={240}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
