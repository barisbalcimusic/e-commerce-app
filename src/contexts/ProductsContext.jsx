import { useEffect, useState, createContext } from "react";
import fetchProductData from "../components/fetchProductData";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProductsData = async () => {
      const data = await fetchProductData();
      setProducts(data.products);
    };
    getProductsData();
  }, [products]); //* why should we use products here?

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
