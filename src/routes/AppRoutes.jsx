import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Products from "../pages/Products";
import ProductOrder from "../pages/ProductOrder";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
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
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/:id",
        element: <Products />,
      },
      {
        path: "p/:id",
        element: <ProductOrder />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/shipping",
        element: <Shipping />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/myaccount",
        element: <Account />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "addresses",
        element: <Address />,
      },
      {
        path: "/500",
        element: <ErrorPage message="NOT FOUND" imgLink={ServerError} />,
      },
      {
        path: "*",
        element: <ErrorPage message="NOT FOUND" imgLink={NotFound} />,
      },
    ],
  },
]);

export default AppRoutes;
