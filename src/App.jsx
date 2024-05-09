import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Credentials from "./pages/Credentials";
import ProductsContextProvider from "./contexts/ProductsContext";
import ProductDetail from "./pages/ProductDetail";
import SidebarContextProvider from "./contexts/SidebarContext";
import AuthContextProvider from "./contexts/AuthContext";
import UserAccount from "./pages/UserAccount";

const App = () => {
  return (
    <ProductsContextProvider>
      <SidebarContextProvider>
        <AuthContextProvider>
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
            </Routes>
          </Layout>
        </AuthContextProvider>
      </SidebarContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
