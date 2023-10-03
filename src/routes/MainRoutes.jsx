import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Products from "../pages/Products";
import ProductOrder from "../pages/ProductOrder";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Categories from "../pages/Categories";
import Information from "../pages/Information";
import Shipping from "../pages/Shipping";
import Payment from "../pages/Payment";
import ServerError from "../assets/images/Cloud hosting.gif";
import NotFound from "../assets/images/404 error lost in space.gif";
import Account from "../pages/User/Account";
import Orders from "../pages/User/Orders";
import Payments from "../pages/User/Payments";
import Address from "../pages/User/Address";
import Profile from "../pages/User/Profile";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homelayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="p/:id" element={<ProductOrder />} />
            <Route path="products/:slug" element={<ProductOrder />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:id" element={<Products />} />
            <Route path="/:id" element={<Products />} />
            <Route path="information" element={<Information />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
            <Route path="myaccount" element={<Account />} />
            <Route path="orders" element={<Orders />} />
            <Route path="payments" element={<Payments />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addresses" element={<Address />} />
            <Route
              path="/500"
              element={<ErrorPage message="NOT FOUND" imgLink={ServerError} />}
            />
            <Route
              path="*"
              element={<ErrorPage message="NOT FOUND" imgLink={NotFound} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
