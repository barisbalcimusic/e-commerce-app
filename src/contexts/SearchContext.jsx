import { createContext, useContext, useEffect, useState } from "react";
import { useProductsContext } from "./ProductsContext";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setFilteredProducts] = useState([]);

  const { products } = useProductsContext();

  useEffect(() => {
    if (searchTerm) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    }
  }, [searchTerm]);

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
export const useSearchContext = () => useContext(SearchContext);
