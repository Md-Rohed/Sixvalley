import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductSection";
import ProductType from "@/components/sections/RecommendedProductSection";

export default function Home() {
  return (
    <div className="px-[1rem] md:px-0">
      <HeroSection />
      <ProductType />
      <ProductsSection />
    </div>
  );
}
