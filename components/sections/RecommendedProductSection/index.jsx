"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/data-display/card/ProductCard";
import ProductSkeleton from "../ProductSection/ProaductSkeleton";
import { NewArrivalIcon } from "libs/icons";

export const base_url = "https://6valley.6amtech.com/api/v1";

export const product_type = {
  featured: "featured",
  top_rated: "top-rated",
  best_selling: "best-selling",
  latest: "latest",
  new_arrivals: "new-arrival",
};
const ProductType = () => {
  const [type, setType] = useState(product_type?.featured);
  const [data, setData] = useState([]);
  const loaderRef = useRef(null);
  const [page, setPage] = useState(1);

  const productTypes = [
    {
      type: "featured",
      label: "Featured Products",
    },
    {
      type: "top_rated",
      label: "Top Rated",
    },
    {
      type: "best_selling",
      label: "Best Selling",
    },
    {
      type: "latest",
      label: "Latest Products",
    },
    {
      type: "new_arrivals",
      label: "New Arrivals",
      showImage: true,
    },
  ];

  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        base_url + `/products/${type}?guest_id=1&limit=10&&offset=${page}`
      );
      const product = await response.json();

      if (
        product.products.length === 0 ||
        product?.total_size <= data?.length
      ) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...product.products]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      setHasMore(false);
      console.error("Error fetching data: ", error);
    } finally {
      //   setHasMore(false);
    }
  };

  useEffect(() => {
    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchData();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page, type]);

  return (
    <div className="flex flex-col items-center justify-center mt-[3.0693rem]">
      <div className="mb-6 font-bold leading-6 text-fs20">
        Recommended For You
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[54px]">
        {productTypes.map((productType, index) => (
          <List
            key={index}
            onClick={() => {
              setType(product_type[productType?.type]);
              setData([]);
              setHasMore(true);
              setPage(1);
            }}
            type={productType.label}
            isActive={type === product_type[productType.type]}
            showImage={productType.showImage}
          />
        ))}
      </div>

      <div className="container mt-5">
        {
          <div className=" mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data && data?.length > 0 ? (
              data?.map((item, index) => {
                return <ProductCard productsData={item} key={index} />;
              })
            ) : (
              <>
                {!hasMore && (
                  <div className="flex items-center justify-center w-full py-10">
                    <p className="text-lg font-medium text-gray-600 text-center">
                      No products found.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        }

        {hasMore && (
          <div ref={loaderRef}>
            <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1rem]">
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductType;

const List = ({
  showImage = false,
  type = "",
  isActive = false,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer border-b-3 ${
        isActive
          ? "border-[#1B7FED] font-bold text-[#1B7FED]"
          : "border-white font-normal"
      }`}
    >
      <div
        className={`w-full leading-6 text-center pb-3 text-fs14 ${
          showImage ? "flex" : "md:text-start"
        }`}
      >
        {type}
      </div>
      {showImage && (
        <div className="flex items-start justify-start">
          <NewArrivalIcon />
        </div>
      )}
    </div>
  );
};
