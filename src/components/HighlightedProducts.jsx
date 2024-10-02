import { useProductsContext } from "../contexts/ProductsContext";
import HighlightedProduct from "./HighlightedProduct";

const HighlightedProducts = ({ type }) => {
  const { products } = useProductsContext();

  //filter best rated products
  let filteredProducts;
  if (products && type === "best-rated") {
    filteredProducts = products.filter((product) => product.rating > 4.8);
  } else if (products && type === "discounted") {
    filteredProducts = products.filter(
      (product) => product.discountPercentage > 0
    );
  } else if (products && type === "bestseller") {
    const sortedProducts = [...products].sort(
      (a, b) => b.soldAmount - a.soldAmount
    );
    filteredProducts = sortedProducts.slice(0, 5);
  }
  return (
    <div className="highlights">
      {filteredProducts
        ? filteredProducts.map((product) => (
            <HighlightedProduct key={product.id} product={product} />
          ))
        : "loading..."}
    </div>
  );
};

export default HighlightedProducts;
