import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
const Orders = () => {
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
            <h1 className="text-xl md:text-3xl font-semibold">My Orders</h1>
            <p className="w-20 md:w-28 border-b-2 border-[#5a6d57]"></p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center text-xs">
              <p className="text-gray-400 font-medium">ORDER#</p>
              <p className="font-semibold primary-80">12005</p>
            </div>
            <div className="border border-[#272f25] h-40 md:h-60 flex gap-2">
              <div className="w-52">
                <img
                  src="https://images.bewakoof.com/t640/men-s-green-cyber-samurai-graphic-printed-t-shirt-589374-1694762490-1.jpg"
                  alt="order-1"
                  className="h-40 md:h-60 p-0.5"
                />
              </div>
              <div className="flex flex-col gap-2 py-3 w-11/12 pl-2 primary-80">
                <h3 className="text-sm md:text-xl font-medium">
                  Olive Camo Full Sleeve Camo T-Shirt
                </h3>
                <p className="text-sm md:text-lg font-medium">
                  Size: <span className="font-semibold">M</span>
                </p>
                <h2 className="py-1.5 px-2.5 text-xs md:text-sm success success-bg w-max">
                  DELIVERED
                </h2>
                <h2 className="py-1.5 px-2.5 text-xs md:text-sm error error-bg w-max">
                  ORDER FAILED
                </h2>
              </div>
              <div className="flex md:items-end items-center justify-end md:w-80 w-8">
                <div className="px-2 py-2">
                  <Link
                    to="/order-id"
                    className="py-3 hidden md:block px-10 font-medium border-2 border-[#272f25] hover:bg-[#272f25] hover:text-white"
                  >
                    ORDER INFO
                  </Link>
                  <Link to="/order-id">
                    <FaAngleRight className="md:hidden text-2xl" />
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

export default Orders;
