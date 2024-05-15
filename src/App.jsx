import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
//pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import Credentials from "./pages/Credentials";
import ProductDetail from "./pages/ProductDetail";
import UserAccount from "./pages/UserAccount";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
//contexts
import ProductsContextProvider from "./contexts/ProductsContext";
import SidebarContextProvider from "./contexts/SidebarContext";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import ResponsivityContextProvider from "./contexts/ResponsivityContext";

const App = () => {
  return (
    <ProductsContextProvider>
      <SidebarContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <ResponsivityContextProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/store/" element={<Store />} />
                  <Route path="/store/:category" element={<Store />} />
                  <Route
                    path="/store/product-detail/:id"
                    element={<ProductDetail />}
                  />
                  <Route path="/auth" element={<Credentials />} />
                  <Route path="/user" element={<UserAccount />} />
                  <Route path="/cart" element={<ShoppingCart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </ResponsivityContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </SidebarContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
