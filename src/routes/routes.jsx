import Home from "../pages/Home";
import Store from "../pages/Store";
import ProductDetail from "../pages/ProductDetail";
import Credentials from "../pages/Credentials";
import UserAccount from "../pages/UserAccount";
import ShoppingCart from "../pages/ShoppingCart";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";

const routes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/store", element: <Store /> },
  { id: 3, path: "/store/:category", element: <Store /> },
  { id: 4, path: "/store/product-detail/:id", element: <ProductDetail /> },
  { id: 5, path: "/auth", element: <Credentials /> },
  { id: 6, path: "/user", element: <UserAccount /> },
  { id: 7, path: "/cart", element: <ShoppingCart /> },
  { id: 8, path: "/checkout", element: <Checkout /> },
  { id: 9, path: "*", element: <NotFound /> },
];

export default routes;
