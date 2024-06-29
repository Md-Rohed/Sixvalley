import ServiceListCard from "@/components/data-display/card/ServiceListCard";

export default function ServiceSection() {
  const servicesList = [
    {
      title: "Great Value",
      des: "We offer competitive prices on over 100 million items.",
      img: "./assets/icons/currency.svg",
    },
    {
      title: "Whole Country Shipping",
      des: "We ship all over the country at any time, anywhere ",
      img: "./assets/icons/shipping.svg",
    },
    {
      title: "Safe Payment",
      des: "Pay with secure payment methods.",
      img: "./assets/icons/payment.svg",
    },
    {
      title: "24/7 Support",
      des: "Pay with secure payment methods.",
      img: "./assets/icons/support.svg",
    },
    {
      title: "Multiple language",
      des: "Our comes in with multiple languages.",
      img: "./assets/icons/language.svg",
    },
    {
      title: "Shop Better",
      des: "Download our app from play store and app store",
      img: "./assets/icons/android.svg",
      img2: "./assets/icons/ios.svg",
    },
  ];
  return (
    <div className="bg-[#F2F3F4] pt-[23px] mt-[115px] pb-[21px]">
      <div className="mx-auto container  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6  gap-[20px] xl:gap-0">
        {servicesList?.map((item, index) => (
          <ServiceListCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
