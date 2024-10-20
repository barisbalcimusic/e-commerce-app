import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="products-container">
      <div className="products-div">
        {products ? (
          products.map((product) => (
            <ProductCard
              key={product.product_id}
              productId={product.product_id}
              product={product}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Products;
