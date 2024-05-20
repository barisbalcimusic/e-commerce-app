import "./App.scss";
import Layout from "./components/layout/Layout";
import { Route, Routes, useParams } from "react-router-dom";
import ProductsContextProvider from "./contexts/ProductsContext";
import SidebarContextProvider from "./contexts/SidebarContext";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import ResponsivityContextProvider from "./contexts/ResponsivityContext";
import SearchProvider from "./contexts/SearchContext";
import routes from "./routes/routes";

const App = () => {
  return (
    <ProductsContextProvider>
      <SidebarContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <ResponsivityContextProvider>
              <SearchProvider>
                <Layout>
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        key={route.id}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                  </Routes>
                </Layout>
              </SearchProvider>
            </ResponsivityContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </SidebarContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
