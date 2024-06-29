import Image from "next/image";

const ServiceCard = ({ item }) => {
  return (
    <div className="text-center px-6  border-r">
      <div className="flex justify-center items-center gap-3">
        <Image src={item.img} width={30} height={30} alt={item.title} />
        {item.img2 && (
          <Image src={item.img2} width={30} height={30} alt={item.title} />
        )}
      </div>
      <h3 className="mt-3 font-bold text-lg">{item.title}</h3>
      <p className="mt-4 font-normal text-sm">{item.des}</p>
    </div>
  );
};

export default ServiceCard;
