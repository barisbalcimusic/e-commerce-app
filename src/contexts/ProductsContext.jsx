import { useEffect, useState, createContext, useContext } from "react";
import fetchProductData from "../components/data/fetchProductData";

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const data = await fetchProductData();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
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
    <ProductsContext.Provider value={{ products, categories }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
export const useProductsContext = () => useContext(ProductsContext);
