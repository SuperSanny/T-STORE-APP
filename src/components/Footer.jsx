import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4 w-full">
        <div className="container">
          <div className="ms-5">
            <h1 className="text-left text-2xl font-bold">T-STORE</h1>
          </div>
        </div>
        <div className="container mx-auto mt-3">
          <div className="flex flex-wrap gap-6 justify-around">
            {/* Customer Service */}
            <div className="grid-cols-3">
              <h4 className="mb-2 font-semibold border-b-2 border-white-500 inline-block">
                CUSTOMER SERVICE
              </h4>
              <div className="footer-link flex flex-col gap-1.5">
                <Link to="/ContactUs" className="">
                  Contact Us
                </Link>
                <Link to="/TrackOrder" className="">
                  Track Order
                </Link>
                <Link to="/ReturnOrder" className="">
                  Return Order
                </Link>
                <Link to="/CancelOrder" className="">
                  Cancel Order
                </Link>
              </div>
            </div>

            {/* Company */}
            <div className="grid-cols-3">
              <h4 className="mb-2 font-semibold border-b-2 border-white-500 inline-block">
                COMPANY
              </h4>
              <div className="footer-link flex flex-col gap-1.5">
                <Link to="/AboutUs" className="">
                  About Us
                </Link>
                <Link to="/Hiring" className="">
                  We are Hiring
                </Link>
                <Link to="/TermsAndConditions" className="">
                  Terms & Conditions
                </Link>
                <Link to="/PrivacyPolicy" className="">
                  Privacy Policy
                </Link>
                <Link to="/Blog" className="">
                  Blog
                </Link>
              </div>
            </div>

            {/* Connect with Us */}
            <div className="grid-cols-3">
              <h4 className="mb-2 font-semibold border-b-2 border-white-500 inline-block">
                CONNECT WITH US
              </h4>
              <div className="footer-link flex flex-col gap-1.5">
                <Link to="/facebookLike" className="">
                  4.7M People Like this
                </Link>
                <Link to="/instagramLike" className="">
                  1M Followers
                </Link>
                <div className="social_icons flex gap-3">
                  <Link to="" className="text-white" alt="Linkdedin">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link to="" className="text-white" alt="Instagram">
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link to="" className="text-white" alt="GitHub">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link to="" className="text-white" alt="Youtube">
                    <BsYoutube className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Keep Up to Date */}
            <div className="grid-cols-3">
              <h4 className="mb-2 font-semibold border-b-2 border-white-500 inline-block">
                KEEP UP TO DATE
              </h4>
              <div className="footer-link flex flex-col gap-1.5">
                <div className="relative">
                  <input
                    type="text"
                    className="py-2 px-2 h-8 text-sm w-64 subscribe-input text-gray-950 placeholder-gray-400"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <div className="absolute inset-y-0 right-0.5 flex items-center">
                    <button
                      className="subscribe-btn h-7 px-1 text-sm transition duration-300 ease-in-out"
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
      </footer>
    </>
  );
};

export default Footer;
