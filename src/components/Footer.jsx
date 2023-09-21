import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container">
          <div>
            <h1 className="text-left text-xl">T-STORE</h1>
          </div>
          <div className="flex">
            <div className="grid-cols-3">
              <h4 className="mb-2">CUSTOMER SERVICE</h4>
              <div className="footer-link flex flex-col">
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
            <div className="grid-cols-3">
              <h4 className="mb-2">COMPANY</h4>
              <div className="footer-link flex flex-col">
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
            <div className="grid-cols-3">
              <h4 className="mb-2">CONNECT WITH US</h4>
              <div className="footer-link flex flex-col">
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
            <div className="grid-cols-3">
              <h4 className="mb-2">KEEP UP TO DATE</h4>
              <div className="footer-link flex flex-col">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="py-2 px-3 borde focus:ring focus:ring-indigo-200 focus:outline-none placeholder-gray-400"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      className="subscribe-btn px-2 py-2 transition duration-300 ease-in-out"
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
