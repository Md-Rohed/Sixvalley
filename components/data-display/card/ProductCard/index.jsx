import Image from "next/image";
// import { Rating } from "primereact/rating";
const ProductCard = (props) => {
  const {
    name,
    rating,
    images,
    discount,

    purchase_price,
  } = props?.productsData;

  const discountedPrice = purchase_price - (purchase_price * discount) / 100;

  return (
    <>
      <div className="shadow-lg bg-[var(--white-color)] p-[10px] rounded-[5px]">
        <div className="rounded-[5px] relative product-card">
          <div className="flex flex-col gap-[11px] absolute right-2 top-2  icon-container">
            <div className="cursor-pointer rounded-full w-[30px] h-[30px] border border-[var(--primary-color)] flex justify-center items-center bg-[var(--white-color)]">
              <Image src="./activated.svg" width={18} height={18} alt="icon" />
            </div>
            <div className="cursor-pointer rounded-full w-[30px] h-[30px] border border-[var(--primary-color)] flex justify-center items-center bg-[var(--white-color)]">
              <Image src="./ph_heart2.svg" width={18} height={18} alt="icon" />
            </div>
            <div className="cursor-pointer rounded-full w-[30px] h-[30px] border border-[var(--primary-color)] flex justify-center items-center bg-[var(--white-color)]">
              <Image
                src="./teenyicons_git-compare-solid.svg"
                width={18}
                height={18}
                alt="icon"
              />
            </div>
            <div className="cursor-pointer rounded-full w-[30px] h-[30px] border border-[var(--primary-color)] flex justify-center items-center bg-[var(--white-color)]">
              <Image
                src="./fluent_eye-16-regular.svg"
                width={18}
                height={18}
                alt="icon"
              />
            </div>
          </div>

          <div>
            <Image
              src={`https://6valley.6amtech.com/storage/app/public/product/${images[0]}`}
              width={500}
              height={500}
              alt={name}
              className="h-[175px] rounded-[5px] object-cover"
            />
          </div>

          <div className="badge bg-[#DB2222] border-0 absolute -top-1 -left-1 text-[10.98px] font-extrabold text-white p-2 rounded-[1.625rem]">
            +{discount}%
          </div>
        </div>

        <div className="text-center mt-[16.12px]">
          <div className="text-center flex justify-center items-center gap-[2px] mb-[3.96px]">
            {/* <Rating
              value={Math.floor(parseFloat(rating[0]?.average))}
              readOnly
              cancel={false}
              style={{ color: "var(--rating-color)" }}
            /> */}
            <span className="text-[var(--grey-text-color)] text-[10px] font-normal">
              ({Math.floor(parseFloat(rating[0]?.average))})
            </span>
          </div>

          <h6 className="text-[var(--text-color)] text-[14.64px] font-bold">
            {name}
          </h6>
          <h6 className="text-[var(--text-color)] text-[14.64px] font-bold">
            <span className="text-[var(--grey-text-color)] text-[12.81px] font-normal line-through ">
              {purchase_price}$
            </span>{" "}
            {discountedPrice}$
          </h6>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
