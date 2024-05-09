import { useEffect, useState, createContext, useContext } from "react";
import fetchProductData from "../components/data/fetchProductData";

const productsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProductsData = async () => {
      const data = await fetchProductData();
      setProducts(data);
    };
    getProductsData();
  }, []);

  //filter category names
  const categories = [];
  if (products)
    products.forEach((product) => {
      if (!categories.includes(product.category))
        categories.push(product.category);
    });

  return (
    <productsContext.Provider value={{ products, categories }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;

export const useProductsContext = () => useContext(productsContext);
