import {
  AppDownloadLinkIcon,
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  PhoneIcon,
  TwitterIcon,
  WhiteLogoIcon,
  YoutubeIcon,
} from "libs/icons";
import React from "react";

const footerData = [
  {
    title: "Accounts",
    items: [
      "Become a Delivery Man",
      "Open Your Store",
      "Profile",
      "Help & Support",
    ],
  },
  {
    title: "Quick Links",
    items: ["Flash Deals", "Featured Products", "Top Stores", "New Arrivals"],
  },
  {
    title: "Other",
    items: [
      "Privacy Policy",
      "Term & Conditions",
      "Refund Policy",
      "Support Ticket",
    ],
  },
];

const Footer = () => {
  return (
    <div
      className="mt-5 bg-no-repeat bg-cover bg-[#284370]"
      style={{
        backgroundImage: `url('/assets/images/banner/footer_bg.png'`,
      }}
    >
      <div className="flex justify-between invisible py-8 md:visible">
        <div></div>
        <div className="flex space-x-5">
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <YoutubeIcon />
        </div>
        <div className="flex justify-center items-center gap-[0.25rem]">
          <PhoneIcon />
          <div className="text-white md:mr-[10.063rem]">
            <p>Hotline</p>
            <p>+90-327-5345543</p>
          </div>
        </div>
      </div>
      <div className="bg-[#171c2e] opacity-80 px-[1rem] md:px-[6.188rem] bg-cover flex md:flex-row flex-col justify-center space-y-7 md:space-y-0  md:justify-between py-4">
        <div className="flex flex-col md:items-center justify-center md:text-center">
          <WhiteLogoIcon />
          <div className="">
            <div className="font-light leading-6 text-white">
              Suspendisse ultrices at diam lectus nullam.
            </div>
            <div className="font-light leading-6 text-white">
              Nisl, sagittis viverra enim erat tortor ultricies
            </div>
          </div>

          <div className="font-light leading-6 text-white">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </div>
          <div className="mt-2 font-light leading-6 text-white">
            support@example.cpm
          </div>

          <div className="flex flex-col gap-4 mt-5 md:flex-row">
            <AppDownloadLinkIcon />
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
      <div className="flex justify-center items-center text-white text-[14px] font-normal leading-[22px] py-6">
        2024 COPYRIGHT All Rights Reserved By 6amMart.com
      </div>
    </div>
  );
};

export default Footer;

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col space-y-2 md:items-start">
    <div className="font-bold leading-7 text-white">{title}</div>
    {items.map((item, index) => (
      <div key={index} className="font-light leading-7 text-white">
        {item}
      </div>
    ))}
  </div>
);
