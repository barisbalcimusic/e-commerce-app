import Products from "../components/Products";
import ProductsContextProvider from "../contexts/ProductsContext";

const Store = () => {
  return (
    <ProductsContextProvider>
      <Products />
    </ProductsContextProvider>
  );
};

export default Store;
