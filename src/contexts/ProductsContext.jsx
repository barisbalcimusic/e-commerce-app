import { useEffect, useState, createContext, useContext } from "react";
import fetchProductData from "../utils/services/fetchProductData";

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProductData()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // filter category names
  const categories = [];
  if (products)
    products.forEach((product) => {
      if (!categories.includes(product.product_category))
        categories.push(product.product_category);
    });

  return (
    <ProductsContext.Provider value={{ products, categories }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
export const useProductsContext = () => useContext(ProductsContext);
