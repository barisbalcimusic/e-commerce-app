import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Credentials from "./pages/Credentials";
import Cart from "./pages/Cart";
import ProductsContextProvider from "./contexts/ProductsContext";
import ProductDetail from "./pages/ProductDetail";
import SidebarContextProvider from "./contexts/SidebarContext";

const App = () => {
  return (
    <ProductsContextProvider>
      <SidebarContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/store/" element={<Store />} />
            <Route path="/store/:category" element={<Store />} />
            <Route
              path="/store/product-detail/:id"
              element={<ProductDetail />}
            />
            <Route path="/user" element={<Credentials />} />
          </Routes>
        </Layout>
      </SidebarContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
