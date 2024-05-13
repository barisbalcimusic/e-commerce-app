import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="products">
      {products ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Products;
