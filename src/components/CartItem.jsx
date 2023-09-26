import { useState } from "react";
import cartitemImg from "../assets/images/cartitem.png";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCaretDown } from "react-icons/ai";
const CartItem = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setSelectedQuantity(parseInt(e.target.value));
  };
  return (
    <>
      <div className="mx-auto w-auto primary-75">
        <div className="flex justify-between shadow relative">
          <div className="absolute inset-y-2/4 right-1 ">
            <button className="bg-primary-80 text-white ">
              <RxCross2 className="hover:scale-110 text-2xl" />
            </button>
          </div>
          <div className="flex gap-2 py-3 px-3">
            <div className="w-60">
              <img src={cartitemImg} className="w-auto h-44" alt="cart-img" />
            </div>
            <div className="flex flex-col gap-1 ms-2 w-full">
              <div className="">
                <h3 className="text-md font-semibold w-11/12">T-Shirt Name</h3>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-sm text-gray-600">Size: </p>
                <p className="primary-80">M</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-sm text-gray-600">Color: </p>
                <p className="primary-80">White</p>
              </div>
              <div className="w-20">
                <div className="relative">
                  <select
                    className="block appearance-none border bg-white hover:border-green-800 px-11 py-2 pr-8 shadow leading-tight"
                    value={selectedQuantity}
                    onChange={handleQuantityChange}
                  >
                    {/* Option for quantity 1 to 10 */}
                    {[...Array(10)].map((_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex gap-6 items-center primary-80">
                    <p className="primary-80 ">Qty: </p>
                    <AiOutlineCaretDown />
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-1 items-center">
                <p className="text-sm text-gray-600">Price: </p>
                <p className="primary-80">₹1200</p>
              </div>
              <div className="flex gap-1 font-semibold items-center">
                <p className="text-sm text-gray-600">Subtotal: </p>
                <p className="primary-80">₹1200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
