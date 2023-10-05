/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { BsHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Colors from "./Colors";
import Images from "../constant/Images";
const ProductCard = (props) => {
  const { id, slug, brand, title, price, original_price, discount, color } =
    props;
  return (
    <>
      <div className="product-card w-64 shadow-lg py-2 px-2 pb-3">
        <input type="hidden" value={slug} />
        <input type="hidden" value={discount} />
        <Link to={`p/${id}`} className="relative">
          <div className="wishlist-icon absolute top-2 right-2">
            <button className="border-0 bg-transparent">
              <img
                src={Images.heartWhite}
                className="w-6 h-6"
                alt="whishlist"
              />
            </button>
          </div>
          <div className="product-image">
            <img
              src="https://images.bewakoof.com/t640/men-s-white-customizable-oversized-t-shirt-620626-1695292116-1.jpg"
              className="w-full"
              alt="productImage"
            />
          </div>
          <div className="product-details flex flex-col gap-1 mt-1">
            <div className="flex justify-between">
              <h6 className="brand text-gray-600 font-semibold text-sm">
                {brand}
              </h6>
              <div className="bg-gray-100 flex items-center gap-2 p-2 h-5">
                <AiFillStar className="text-yellow-500" />
                <p className="text-gray-900 font-bold text-xs">4.5</p>
              </div>
            </div>
            <h5 className="product-title text-gray-500 font-medium text-xs truncate">
              {title}
            </h5>
            <div className="flex items-center justify-between">
              <div>
                {color}
                <Colors />
              </div>
              <div className="flex items-center">
                <p className="text-gray-900 text-xs">₹</p>
                <p className="text-gray-900 text-lg font-semibold">{price}</p>
                <p className="ms-2 text-gray-400 text-xs line-through">
                  ₹{original_price}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
