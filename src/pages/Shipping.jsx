import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CartItem from "../components/CartItem";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
const Shipping = () => {
  const items = [
    { label: "Cart", url: "/cart" },
    { label: "Info", url: "/information" },
    { label: "Shipping", bold: true },
    { label: "Payment" },
  ];
  // Radio Button Option
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // Radio Button End
  return (
    <>
      <Meta title="Shipping" />
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
          <div className="order-first md:order-last w-full md:w-1/2 py-4 px-5 mb-3 hidden md:block">
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
            <div className="flex justify-between">
              <div className="mb-5">
                <h1 className="text-md primary-80 font-medium">Ship To</h1>
              </div>
              <div>
                <Link className="link-color" to="/information">
                  Change
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <div className="title mb-2">
                <h1 className="text-md primary-80 font-bold">
                  Delivery Options
                </h1>
              </div>
              <div className="border-b-2"></div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-gray-400 font-bold">
                    Express Courier (Air)
                  </p>
                  <p className="text-xs primary-80">3 to 4 Business Days</p>
                </div>
                <div>
                  <p className="text-md font-semibold">Free</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="">
                  <p className="text-sm text-gray-400 font-bold">
                    Expexted Date:
                  </p>
                </div>
                <div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-7">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange}
                            className="form-radio primary-80 h-5 w-5 accent-green-900"
                          />
                          <span className="ml-2">Monday, August 14</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                            className="form-radio primary-80 h-5 w-5 accent-green-900"
                          />
                          <span className="ml-2">Wednesday, August 16</span>
                        </label>
                      </div>
                      <div className="flex gap-7">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleOptionChange}
                            className="form-radio primary-80 h-5 w-5 accent-green-900"
                          />
                          <span className="ml-2">Tuesday, August 22</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value="option4"
                            checked={selectedOption === "option4"}
                            onChange={handleOptionChange}
                            className="form-radio primary-80 h-5 w-5 accent-green-900"
                          />
                          <span className="ml-2">Friday, August 25</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="">
                  <div className="">
                    <Link
                      to="/information"
                      className="link-color items-center flex gap-1"
                    >
                      <AiOutlineLeft className="text-xl" />
                      Return To Information
                    </Link>
                  </div>
                </div>
                <div className="">
                  <Link to="/payment">
                    <button className="btn login-btn py-2 px-3">
                      Continue to Payment
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

export default Shipping;
