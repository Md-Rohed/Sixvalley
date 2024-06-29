import { CartIcon, CompareIcon, EyeIcon, WishlistIcon } from "libs/icons";
import Image from "next/image";
// import { Rating } from "primereact/rating";

const IconButton = ({ Icon, extraClasses = "" }) => (
  <div
    className={`cursor-pointer rounded-full w-[30px] h-[30px] border border-[#1B7FED] flex justify-center items-center bg-white ${extraClasses}`}
  >
    <Icon />
  </div>
);

const ProductCard = ({ productsData }) => {
  const { name, rating, images, discount, purchase_price } = productsData;
  const discountedPrice = purchase_price - (purchase_price * discount) / 100;

  return (
    <div className="shadow-lg bg-white p-2.5 rounded-lg">
      <div className="rounded-md relative product-card">
        <div className="flex invisible hover:visible flex-col gap-2.5 absolute right-2 top-2 icon-container">
          <IconButton Icon={CartIcon} />
          <IconButton Icon={WishlistIcon} />
          <IconButton Icon={CompareIcon} />
          <IconButton Icon={EyeIcon} />
        </div>

        <div>
          <Image
            src={`https://6valley.6amtech.com/storage/app/public/product/${images[0]}`}
            width={500}
            height={500}
            alt={name}
            className="h-[175px] rounded-md object-cover"
          />
        </div>

        <div className="badge bg-red-600 border-0 absolute -top-1 -left-1 text-xs font-extrabold text-white p-2 rounded-full">
          +{discount}%
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="text-center flex justify-center items-center gap-0.5 mb-1">
          {/* <Rating
            value={Math.floor(parseFloat(rating[0]?.average))}
            readOnly
            cancel={false}
            style={{ color: "var(--rating-color)" }}
          /> */}
          <span className="text-xs font-normal">
            ({Math.floor(parseFloat(rating[0]?.average))})
          </span>
        </div>

        <h6 className="text-[0.906rem] font-bold">{name}</h6>
        <h6 className="text-[0.906rem] font-bold">
          <span className="text-sm font-normal line-through">
            {purchase_price}$
          </span>
          {discountedPrice}$
        </h6>
      </div>
    </div>
  );
};

export default ProductCard;
