import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "libs/icons";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 bg-no-repeat bg-cover bg-[#2F436D] border  bg-[url('/assets/images/banner/footer_bg.png')">
      <div className="flex justify-between invisible py-8 md:visible">
        <div></div>
        <div className="flex space-x-5">
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <YoutubeIcon />
        </div>
        <div className="flex justify-center">
          <PhoneIcon />
          <div>
            <p>Hotline</p>
            <p>+90-327-5345543</p>
          </div>
        </div>
      </div>
      <div className="bg-[#171c2e] px-[6.188rem] bg-cover px-s100 flex md:flex-row flex-col justify-center space-y-7 md:space-y-0  md:justify-between py-4">
        <div className="flex flex-col items-center justify-center text-center">
          <LogoIcon />
          <div className="mt-s14 mb-s17">
            <div className="font-light leading-6 text-white text-fs14">
              Suspendisse ultrices at diam lectus nullam.
            </div>
            <div className="font-light leading-6 text-white text-fs14">
              Nisl, sagittis viverra enim erat tortor ultricies{" "}
            </div>
          </div>

          <div className="font-light leading-6 text-white text-fs14">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </div>
          <div className="mt-2 font-light leading-6 text-white text-fs14">
            support@example.cpm
          </div>

          <div className="flex flex-col gap-4 mt-5 md:flex-row ">
            <Image
              alt=""
              height={45}
              width={140}
              src="/assets/images/playStore.png"
            />
            <Image
              alt=""
              height={45}
              width={141}
              src="/assets/images/appleStore.png"
            />
          </div>
        </div>

        <FooterSection
          title="Accounts"
          items={[
            "Become a Delivery Man",
            "Open Your Store",
            "Profile",
            "Help & Support",
          ]}
        />

        <FooterSection
          title="Quick Links"
          items={[
            "Flash Deals",
            "Featured Products",
            "Top Stores",
            "New Arrivals",
          ]}
        />

        <FooterSection
          title="Other"
          items={[
            "Privacy Policy",
            "Term & Conditions",
            "Refund Policy",
            "Support Ticket",
          ]}
        />
      </div>
      <div className="flex justify-center items-center text-white text-fs14 font-normal leading-[22px] py-6">
        2021 COPYRIGHT All Rights Reserved By 6amMart.com
      </div>
    </div>
  );
};

export default Footer;

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col items-center space-y-2 md:items-start">
    <div className="font-bold leading-7 text-white text-fs16">{title}</div>
    {items.map((item, index) => (
      <div key={index} className="font-light leading-7 text-white text-fs14">
        {item}
      </div>
    ))}
  </div>
);
