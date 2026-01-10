import HeroSection from "./components/home/hero";
import CategorySection from "./components/home/category";
import ProductSection from "./components/home/product";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <ProductSection />
    </main>
  );
}
