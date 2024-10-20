import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import routes from "./routes/routes";

import ProductsContextProvider from "./contexts/ProductsContext";
import SidebarContextProvider from "./contexts/SidebarContext";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import ResponsivityContextProvider from "./contexts/ResponsivityContext";
import SearchProvider from "./contexts/SearchContext";
import RenderContextProvider from "./contexts/RenderContext";

const App = () => {
  return (
    <ProductsContextProvider>
      <RenderContextProvider>
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
      </RenderContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
