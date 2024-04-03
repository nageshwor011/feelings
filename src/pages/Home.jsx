import ProductCard from "../components/ProductCard";
import ProductCardWithPoint from "../components/ProductCardWithPoint";

export default function Home() {
  return (
    <div>
      Home
      <ProductCardWithPoint />
      <br />
      <br />
      <ProductCard />
    </div>
  );
}
