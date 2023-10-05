import { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import NewCustomInput from "../components/CustomInput/NewCustomInput";
import { MdEmail } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import Images from "../constant/Images";
// import cvvicon from "../assets/images/cvv.png";

import {
  FaUserAlt,
  FaHome,
  FaSearchLocation,
  FaCity,
  FaMobile,
} from "react-icons/fa";
const Payment = () => {
  const items = [
    { label: "Cart", url: "/cart" },
    { label: "Info", url: "/information" },
    { label: "Shipping", url: "/shipping" },
    { label: "Payment", bold: true },
  ];
  // Radio Button Option
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // Radio Button End

  //   Tab
  const [activeTab, setActiveTab] = useState("cards");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const tabData = [
    { id: "cards", label: "Debit & Credit Card", icon: Images.cardIcon },
    { id: "upi", label: "UPI", icon: Images.upiIcon },
    { id: "cod", label: "Cash On Delivery", icon: Images.rupeesIcon },
  ];
  //   Tab End

  //   card payment process
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    // You can integrate with Stripe or another payment gateway
  };
  //  carf payemnt process end
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
      </section>
      <section className="container mx-auto py-5">
        <div className="sm:grid sm:grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-6">
          <div className="sm:col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2 px-3">
            <div className="title border-b-2 py-2">
              <h4 className="text-sm font-bold">Billing Address</h4>
            </div>
            <div className="flex flex-col gap-4 mt-2 pr-16">
              <div className="flex flex-col gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                    className="hidden" // Set height and width, and remove border-radius
                  />
                  <div className="w-4 h-4 border border-green-800 flex items-center justify-center focus-within:border-green-800">
                    {selectedOption === "option1" && (
                      <div className="w-4 h-4 bg-green-800"></div>
                    )}
                  </div>
                  <span className="ml-2">
                    Default (same as billing address)
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleOptionChange}
                    className="hidden" // Set height and width, and remove border-radius
                  />
                  <div className="w-4 h-4 border border-green-800 flex items-center justify-center focus-within:border-green-800">
                    {selectedOption === "option2" && (
                      <div className="w-4 h-4 bg-green-800"></div>
                    )}
                  </div>
                  <span className="ml-2">
                    Add An Alternative Delivery Address
                  </span>
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <FaUserAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <NewCustomInput
                    type="text"
                    placeholder="Full Name"
                    className="px-9"
                  />
                </div>
                <div className="relative">
                  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <NewCustomInput
                    type="email"
                    placeholder="Email"
                    className="px-9"
                  />
                </div>
                <div className="relative">
                  <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <NewCustomInput
                    type="text"
                    placeholder="Address 1"
                    className="px-9"
                  />
                </div>
                <div className="relative">
                  <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <NewCustomInput
                    type="text"
                    placeholder="Address 2"
                    className="px-9"
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
                  <FaMobile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <NewCustomInput
                    type="tel"
                    placeholder="Phone Number"
                    className="pl-9"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-4 xl:col-span-4 2xl:col-span-4 px-3">
            <div className="title border-b-2 py-2">
              <h4 className="text-sm font-bold">Payment</h4>
            </div>
            <div className="flex flex-col gap-5 mt-2 pr-16">
              <p>Please Choose Your Payment Method</p>
            </div>
            <div className="py-3">
              <div className="mb-4 border border-gray-200 dark:border-gray-700">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="myTab"
                  role="tablist"
                >
                  {tabData.map((tab) => (
                    <li key={tab.id} className="mx-auto" role="presentation">
                      <button
                        className={`inline-block p-2 border-b-2 ${
                          activeTab === tab.id
                            ? "border-green-900 primary-80 font-bold"
                            : "border-transparent "
                        }`}
                        id={`${tab.id}-tab`}
                        onClick={() => handleTabClick(tab.id)}
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={activeTab === tab.id}
                      >
                        <div className="flex gap-2 items-center">
                          <img
                            src={tab.icon}
                            alt="${tab-icon}"
                            className="w-auto h-6"
                          />
                          {tab.label}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
                <div id="myTabContent" className="px-3 py-2">
                  {tabData.map((tab) => (
                    <div
                      key={tab.id}
                      className={`${
                        activeTab === tab.id ? "block" : "hidden"
                      } py-4 px-3`}
                      id={tab.id}
                      role="tabpanel"
                      aria-labelledby={`${tab.id}-tab`}
                    >
                      {" "}
                      {tab.id === "cards" && (
                        <div className="flex flex-col gap-3">
                          <div className="flex gap-5">
                            <img
                              src={Images.visaIcon}
                              alt=""
                              className="w-auto h-8"
                            />
                            <img
                              src={Images.mastercardIcon}
                              alt=""
                              className="w-auto h-8"
                            />
                            <img
                              src={Images.rupayIcon}
                              alt=""
                              className="w-auto h-8"
                            />
                            <img
                              src={Images.cardIcon}
                              alt=""
                              className="w-auto h-8"
                            />
                          </div>
                          <div className="w-full md:w-1/2 mt-3">
                            <form onSubmit={handleSubmit} action="">
                              <div className="flex flex-col gap-8">
                                <div className="relative z-0">
                                  <input
                                    type="text"
                                    id="floating_standard"
                                    value={cardNumber}
                                    onChange={(e) =>
                                      setCardNumber(e.target.value)
                                    }
                                    className="block py-2.5 px-0 w-full text-sm font-semibold priamry-80 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 peer"
                                    placeholder=" "
                                  />
                                  <label
                                    htmlFor="floating_standard"
                                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                  >
                                    Card Number
                                  </label>
                                </div>
                                <div className="flex gap-5">
                                  <div className="relative z-0">
                                    <input
                                      type="text"
                                      id="floating_standard"
                                      value={expiryDate}
                                      onChange={(e) =>
                                        setExpiryDate(e.target.value)
                                      }
                                      className="block py-2.5 px-0 w-full text-sm font-semibold priamry-80 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 peer"
                                      placeholder=" "
                                    />
                                    <label
                                      htmlFor="floating_standard"
                                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      Valid through (MM/YY)
                                    </label>
                                  </div>
                                  <div className="relative z-0">
                                    <input
                                      type="text"
                                      id="floating_standard"
                                      className="block py-2.5 pr-10 w-1/3 text-sm font-semibold priamry-80 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 peer"
                                      placeholder=" "
                                      value={cvv}
                                      onChange={(e) => setCvv(e.target.value)}
                                    />
                                    <Link className="absolute left-14 top-4">
                                      <FiAlertCircle />
                                    </Link>
                                    <label
                                      htmlFor="floating_standard"
                                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                      CVV
                                    </label>
                                    {/* <img
                                      src={cvvicon}
                                      alt="cvv"
                                      className="w-auto h-4 absolute"
                                    /> */}
                                  </div>
                                </div>
                                <div className="relative z-0">
                                  <input
                                    type="text"
                                    id="floating_standard"
                                    className="block py-2.5 px-0 w-full text-sm font-semibold priamry-80 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 peer"
                                    placeholder=" "
                                    value={cardHolder}
                                    onChange={(e) =>
                                      setCardHolder(e.target.value)
                                    }
                                  />
                                  <label
                                    htmlFor="floating_standard"
                                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                  >
                                    Name On Card
                                  </label>
                                </div>
                                <div>
                                  <div className="flex items-center gap-3">
                                    <NewCustomInput
                                      type="checkbox"
                                      className="accent-green-900 h-5 w-5"
                                      id="save-information"
                                    />
                                    <label
                                      htmlFor="save-information"
                                      className="text-md font-semibold"
                                    >
                                      Save This Information For Next Time
                                    </label>
                                  </div>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500">{`This transaction you make is totally secure. We don't save your CVV number.`}</p>
                                  </div>
                                </div>
                                <div>
                                  <button
                                    className="login-btn w-full font-semibold py-2 px-3"
                                    type="submit"
                                  >
                                    Pay ₹1250
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      {tab.id === "upi" && (
                        <div className="flex flex-col gap-3">
                          <div className="flex gap-5">
                            <img
                              src={Images.gpayIcon}
                              alt=""
                              className="w-auto h-8"
                            />
                            <img
                              src={Images.phonepeIcon}
                              alt=""
                              className="w-auto h-8"
                            />
                            <img
                              src={Images.bhimIcon}
                              alt=""
                              className="w-auto h-8"
                            />
                            <img
                              src={Images.paytmIcon}
                              alt=""
                              className="w-auto h-8"
                            />
                          </div>
                          <div className="w-full md:w-1/2 mt-3">
                            <form onSubmit={handleSubmit} action="">
                              <div className="flex flex-col mt-2 gap-8">
                                <div className="relative z-0">
                                  <input
                                    type="text"
                                    id="floating_standard"
                                    value={cardNumber}
                                    onChange={(e) =>
                                      setCardNumber(e.target.value)
                                    }
                                    className="block py-2.5 px-0 w-full text-sm font-semibold priamry-80 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 peer"
                                    placeholder=" "
                                  />
                                  <label
                                    htmlFor="floating_standard"
                                    className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                  >
                                    UPI ID
                                  </label>
                                  <p className="text-sm">
                                    UPI ID is in the format of yourname@bankname
                                    or yourmobile@bankname
                                  </p>
                                </div>
                                <div>
                                  <div className="flex items-center gap-3">
                                    <NewCustomInput
                                      type="checkbox"
                                      className="accent-green-900 h-5 w-5"
                                      id="save-information-upi"
                                    />
                                    <label
                                      htmlFor="save-information-upi"
                                      className="text-md font-semibold"
                                    >
                                      Save this UPI ID for future payments.
                                    </label>
                                  </div>
                                  <button
                                    className="login-btn w-full font-semibold mt-2 py-2 px-3"
                                    type="submit"
                                  >
                                    Verify
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      {tab.id === "cod" && (
                        <div>
                          {" "}
                          <button
                            className="login-btn w-full md:w-1/2 font-semibold mt-2 py-2 px-3"
                            type="submit"
                          >
                            Pay ₹1250
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
