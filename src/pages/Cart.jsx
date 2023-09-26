import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Meta from "../components/Meta";
const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <section className="container mx-auto px-4">
        <div className="py-3">
          <Link to="/" className="flex items-center">
            <lord-icon
              src="https://cdn.lordicon.com/kecapeqm.json"
              trigger="hover"
              colors="outline:#121331,primary:#4bb3fd"
              style={{ width: "32px", height: "32px" }}
            ></lord-icon>
            <span className="border-2 border-green-700 h-7 mx-2"></span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              T-STORE
            </span>
          </Link>
        </div>
        <div className="flex mt-4 mb-4 items-center justify-between">
          <div className="flex gap-10 items-center">
            <Link className="link-color text-sm" to="/products">
              Back
            </Link>
            <h1 className="text-3xl font-semibold">Your Cart</h1>
          </div>
          <div>
            <Link className="link-color text-sm" to="/products">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
      <div className="border-b-2 mb-2"></div>
      <section className="mb-3">
        <div className="conatiner mx-auto py-2 px-2">
          <div className="sm:grid sm:grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-5">
            <div className="sm:col-span-1 lg:col-span-4 xl:col-span-4 2xl:col-span-4 border-r-2">
              <div className="py-2 px-4 flex flex-wrap gap-3">
                <CartItem />
                <CartItem />
              </div>
            </div>
            <div className="sm:col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
              <div className="shadow me-3">
                <div className="bg-primary py-2 px-4">
                  <p className="text-xs font-bold">PRICE SUMMARY</p>
                </div>
                <div className="flex flex-col gap-2 py-3 px-4">
                  <div className="flex justify-between text-sm primary-75">
                    <p>Total MRP (Incl. of taxes)</p>
                    <p>₹2149</p>
                  </div>
                  <div className="flex justify-between text-sm primary-75">
                    <p>Shipping Charges</p>
                    <p className="text-green-500">FREE</p>
                  </div>
                  <div className="flex justify-between text-sm primary-75">
                    <p>Bag Discount</p>
                    <p>-₹1200</p>
                  </div>
                  <div className="flex justify-between text-sm mb-5 font-semibold">
                    <p>Subtotal</p>
                    <p>₹149</p>
                  </div>
                </div>
                <div className="border-t-2 ">
                  <div className="flex justify-between py-2 px-4">
                    <p className="text-md font-semibold">Total</p>
                    <p className="text-md font-semibold">₹149</p>
                  </div>
                  <div className="py-2 px-4">
                    <div className="w-full mb-2">
                      <button className="py-2 w-full font-semibold text-center bg-primary hover:bg-green-950 hover:text-white">
                        Proceed to Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
