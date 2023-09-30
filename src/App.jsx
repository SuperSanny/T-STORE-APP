// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homelayout from "./layouts/Homelayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductOrder from "./pages/ProductOrder";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Categories from "./pages/Categories";
import Information from "./pages/Information";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import InternalServer from "./pages/InternalServer";

function App() {
  // const [count, setCount] = useState(0);

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
            <Route path="/500" element={<InternalServer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
