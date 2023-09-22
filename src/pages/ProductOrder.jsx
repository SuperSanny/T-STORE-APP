import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaOpencart, FaRegHeart } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
const ProductOrder = () => {
  return (
    <>
      <Meta title="Product Order" />
      <BreadCrumb title="Products" />
      <section className="container mx-auto mt-3 mb-3">
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
          <div className="lg:col-span-2 xl:col-span-1 2xl:col-span-1"></div>
          <div className="lg:col-span-2 xl:col-span-2 2xl:col-span-2">
            <div className="w-full h-full">
              <img
                src="https://images.bewakoof.com/t1080/men-tie-dye-oversize-plain-t-shirt-574128-1684998800-1.jpg"
                alt="images"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-span-1 2xl:col-span-3">
            <div className="flex flex-col">
              <h1 className="brand text-xl font-semibold text-gray-700">
                T-STORE
              </h1>
              <p className="text-md font-medium text-gray-500">
                Men Blue & Pink Tie & Dye Oversized T-shirt
              </p>
              <div className="border-2 border-gray-600 w-14 p-1 mt-2 bg-gray-100 flex gap-2">
                <AiFillStar className="text-yellow-400 text-md" />
                <p className="text-gray-900 font-semibold text-xs">4.5</p>
              </div>
              <div className="flex items-end mt-2 gap-2">
                <div className="flex items-center">
                  <p className="text-gray-900 text-sm">₹</p>
                  <p className="text-gray-900 text-2xl font-semibold">499</p>
                  <p className="ms-1 text-gray-500 text-sm line-through">
                    ₹1699
                  </p>
                  <h2 className="ms-2 text-lg text-green-500 font-medium">
                    58% OFF
                  </h2>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400  font-medium ">
                  inclusive of all taxes
                </p>
              </div>
              <div className="flex mt-2 gap-6">
                <h3 className="p-0.5 px-2 text-xs font-semibold text-white bg-gray-500">
                  OVERSIZED FIT
                </h3>
                <h3 className="p-0.5 px-2 text-xs font-semibold text-gray-500 border border-gray-600">
                  100% COTTON
                </h3>
              </div>
              <div className="border-2 mt-4 w-3/5 text-gray-400"></div>
              <div>
                <p className="text-sm w-3/5 mt-2 font-normal">
                  TriBe members get an extra discount of ₹50 and FREE shipping.
                  &nbsp;
                  <Link to="#" className="link-color">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="border-2 mt-2 w-3/5 text-gray-400"></div>
              <div className="mt-2 flex justify-between w-3/5">
                <h5 className="text-sm font-semibold ">SELECT SIZE</h5>
                <Link to="#" className="bg-#748c70 font-bold text-xs">
                  {" "}
                  Size Guide
                </Link>
              </div>
              <div className="flex flex-row gap-2 mt-2">
                <button className="w-12 h-12 rounded-md border border-gray-800 hover:border-emerald-500 hover:border-2">
                  S
                </button>
                <button className="w-12 h-12 rounded-md border border-gray-800 hover:border-emerald-500 hover:border-2">
                  M
                </button>
                <button className="w-12 h-12 rounded-md border border-gray-800 hover:border-emerald-500 hover:border-2">
                  L
                </button>
                <button className="w-12 h-12 rounded-md border border-gray-800 hover:border-emerald-500 hover:border-2">
                  XL
                </button>
                <button className="w-12 h-12 rounded-md border border-gray-800 hover:border-emerald-500 hover:border-2">
                  2XL
                </button>
              </div>
              <div className="mt-4 flex gap-4 w-3/5">
                <Link className="py-3 w-1/2 text-md font-medium rounded bg-primary-75 text-white flex justify-center items-center gap-2 hover:scale-105">
                  <FaOpencart />
                  ADD TO CART
                </Link>
                <Link className="py-3 w-1/2 text-md font-medium rounded border text-gray-400 justify-center items-center flex gap-2 hover:scale-105">
                  <FaRegHeart />
                  WISHLIST
                </Link>
              </div>
              <div className="border-2 mt-4 w-3/5 text-gray-400"></div>
              <div className="mt-2 flex justify-between w-3/5">
                <h5 className="text-sm font-semibold flex items-center gap-2">
                  <SlLocationPin />
                  CHECK FOR DELIVERY DETAILS
                </h5>
              </div>
              <div className="relative mt-2 w-3/5">
                <input
                  type="text"
                  className="py-2 px-2 border-2 text-sm w-full outline-none text-gray-950 placeholder-gray-400"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                />
                <div className="absolute inset-y-0 right-0.5 flex items-center">
                  <button
                    className="me-3 text-sm font-bold primary-75 transition duration-300 ease-in-out"
                    type="button"
                  >
                    CHECK
                  </button>
                </div>
              </div>
              <div className="border-2 mt-4 w-3/5 text-gray-400"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOrder;
