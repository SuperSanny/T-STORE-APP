import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
const Footer = () => {
  const [emailValue, setEmailValue] = useState("");
  return (
    <>
      <footer className="bg-primary-80 py-2">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="flex flex-wrap">
              <div className="flex flex-col items-center">
                <Link to="/" className="flex items-center">
                  <lord-icon
                    src="https://cdn.lordicon.com/kecapeqm.json"
                    trigger="hover"
                    colors="outline:#FFF,primary:#4bb3fd"
                    style={{ width: "100px", height: "100px" }}
                  ></lord-icon>
                  {/* <span className="border-2 border-green-700 h-12 mx-2"></span>
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  T-STORE
                </span> */}
                </Link>
                <div className="flex flex-col gap-3">
                  <div>
                    <h2 className="text-3xl font-bold text-center">
                      Join the T-STORE Revolution!
                    </h2>
                  </div>
                  <div className="footer-link px-5 flex flex-col gap-1.5">
                    <div className="relative">
                      <input
                        type="text"
                        className="py-3 px-2 text-base font-medium w-full subscribe-input text-gray-950 placeholder-gray-400 rounded"
                        placeholder="Your Email Address"
                        aria-label="Your Email Address"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                      />
                      <div className="absolute inset-y-0 right-1 flex items-center">
                        <button
                          className="subscribe-btn py-2.5 px-3 text-sm transition duration-300 ease-in-out rounded"
                          type="button"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center mt-3">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex gap-5 text-3xl">
                <Link to="#">
                  <FaXTwitter className="hover:text-white-900" />
                </Link>

                <Link to="#">
                  <BsInstagram className="insta" />
                </Link>
                <Link to="#">
                  <BsLinkedin className="hover:text-[#00B6F1;]" />
                </Link>
                <Link to="#">
                  <BsYoutube className="hover:text-[#C31A1E;]" />
                </Link>
              </div>
              <p>&copy; 2023 T-STORE. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
