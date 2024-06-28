"use client";
import ProductCard from "@/components/data-display/card/ProductCard";
import { getProductsListApi } from "libs/api/getProductListApi";
import { useEffect, useState } from "react";

const ProductsSection = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductsListApi();

        if (productData.error) {
          setError(productData.error);
        } else {
          setAllProducts(productData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="border-b pb-5">
        <h3 className="font-medium text-2xl">All Products</h3>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <p key={index}>Loading...</p>
            ))
          : allProducts?.products?.map((data, index) => (
              <ProductCard key={index} productsData={data} />
            ))}
      </div>
    </div>
  );
};

export default ProductsSection;
