import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import NewCustomInput from "../components/NewCustomInput";
import { AiOutlineLeft } from "react-icons/ai";
import CartItem from "../components/CartItem";
import {
  FaUserAlt,
  FaAddressCard,
  FaHome,
  FaSearchLocation,
  FaCity,
  FaMobile,
} from "react-icons/fa";
const Information = () => {
  const items = [
    { label: "Cart", url: "/cart" },
    { label: "Info", bold: true },
    { label: "Shipping" },
    { label: "Payment" },
  ];
  return (
    <>
      <Meta title="Information" />
      <section className="container mx-auto px-4">
        <div className="">
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
            <div className="py-3">
              <BreadCrumb items={items} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="order-first md:order-last w-full md:w-1/2 py-4 px-5 mb-3">
            <div className="text-center mb-3">
              <h1 className="text-2xl primary-80 font-semibold">Your Cart</h1>
            </div>
            <div className="">
              <CartItem />
              <CartItem />
            </div>
            <div className="flex mt-3 flex-col gap-2">
              <div className="flex justify-between primary-75">
                <p>Sabtotal (2)</p>
                <p>₹2149</p>
              </div>
              <div className="flex justify-between primary-75">
                <p>Tax</p>
                <p>₹120</p>
              </div>
              <div className="flex justify-between primary-75">
                <p>Shipping Charges</p>
                <p className="text-green-500">FREE</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Total Order:</p>
                <p>₹2269</p>
              </div>
              <div>
                <p className="text-xs">
                  The total amount you pay includes all applicable customs
                  duties & taxes. We guarantee no additional charges on delivery
                </p>
              </div>
            </div>
          </div>
          <div className="order-last md:order-first w-full md:w-1/2 py-4 px-5">
            <div className="flex flex-col gap-3">
              <div className="title mb-2">
                <h1 className="text-xl primary-80 font-medium">
                  Shipping Address
                </h1>
              </div>
              <div className="relative">
                <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <NewCustomInput
                  type="text"
                  placeholder="Full Name"
                  className="px-9"
                />
              </div>
              <div className="relative">
                <FaAddressCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <NewCustomInput
                  type="text"
                  placeholder="Address"
                  className="px-9"
                />
              </div>
              <div className="relative">
                <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <NewCustomInput
                  type="text"
                  placeholder="Apartment,suite,etc.(optional)"
                  className="px-9"
                />
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <FaSearchLocation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <NewCustomInput
                    type="number"
                    max="6"
                    placeholder="Postal Code"
                    className="pl-9"
                  />
                </div>
                <div className="relative">
                  <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <NewCustomInput
                    type="text"
                    placeholder="City"
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="relative">
                <FaMobile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <NewCustomInput
                  type="tel"
                  placeholder="Phone Number"
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <NewCustomInput
                  type="checkbox"
                  className="accent-green-900 h-4 w-4"
                  id="save-information"
                />
                <label htmlFor="save-information">
                  Save This Information For Next Time
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <div className="">
                    <Link
                      to="/cart"
                      className="link-color items-center flex gap-1"
                    >
                      <AiOutlineLeft className="text-xl" />
                      Return To Cart
                    </Link>
                  </div>
                </div>
                <div className="">
                  <Link to="/shipping">
                    <button className="btn login-btn py-2 px-3">
                      Continue to Shipping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
