import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import card from "../../assets/images/card.png";
import upi from "../../assets/images/upi.png";
import { RiAddCircleLine } from "react-icons/ri";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const Payments = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [upiId, setUpiId] = useState("");

  return (
    <>
      <section className="container mx-auto px-5 py-5">
        <div className="flex flex-col gap-6">
          <div className="">
            <Link
              to="/myaccount"
              className="link-color items-center flex gap-1"
            >
              <AiOutlineLeft className="text-xl" />
              Return To Account
            </Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl md:text-3xl font-semibold">My Payments</h1>
            <p className="w-20 md:w-28 border-b-2 border-[#5a6d57]"></p>
          </div>
        </div>
        <div className="mt-10 border border-[#272f25]">
          <div className="py-10 px-10 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-md font-semibold">DEBIT & CREDIT CARD</h2>
              <div className="px-5 py-5 border border-[#5a6d57]">
                <div className="flex gap-8 justify-start items-center">
                  <img
                    src={card}
                    alt="card"
                    className="w-auto h-8 opacity-50"
                  />
                  <p className="text-sm font-medium text-gray-500">
                    No Debit/Credit Card saved
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-md font-semibold">UPI</h2>
              <button onFocus={openModal}>
                <div className="px-5 py-5 border border-[#5a6d57] flex justify-between items-center">
                  <div className="flex gap-8 justify-start items-center">
                    <img src={upi} alt="card" className="w-auto h-10" />
                    <p className="text-sm font-medium primary-80">ADD UPI ID</p>
                  </div>
                  <RiAddCircleLine className="text-2xl text-[#748c70]" />
                </div>
              </button>
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 blur-background ">
                  <div className="modal-container relative">
                    <div className="bg-white w-80 md:w-96 py-4 px-4 shadow-lg">
                      <h2 className="text-md text-center font-semibold mb-2">
                        Add UPI ID
                      </h2>
                      <div className="flex flex-col gap-2">
                        <div className="relative z-0">
                          <input
                            type="text"
                            id="floating_standard"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm font-semibold priamry-80 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-800 peer"
                            placeholder=" "
                          />
                          <label
                            htmlFor="floating_standard"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            UPI ID
                          </label>
                          <p className="text-xs text-gray-400">
                            UPI ID is in the format of yourname@bankname or
                            yourmobile@bankname
                          </p>
                        </div>
                        <div className="mt-4 mb-1">
                          <button
                            className={`w-full font-semibold mt-2 py-2 px-3 bg-gray-600 ${
                              upiId === ""
                                ? "cursor-not-allowed opacity-50"
                                : "login-btn"
                            } `}
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="primary-80 absolute top-3 right-3">
                      <button onClick={closeModal}>
                        <RxCross2 className="hover:scale-125 text-2xl" />
                      </button>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payments;
