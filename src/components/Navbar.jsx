import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import userImg from "../assets/images/user.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";

const Navbar = () => {
  // Logout function
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  function onLogout() {
    dispatch(logout());
  }
  // Logout function end
  // State to control dropdown visibility
  const onMouseC = () => {
    const dropdown = document.getElementById("user-dropdown");
    dropdown.classList.toggle("hidden");
  };
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="primary-80 border-b-2 mb-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex gap-2">
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center primary-80 md:hidden hover:outline-none hover:ring-2 hover:ring-green-800"
            aria-controls="navbar-user"
            aria-expanded={isNavOpen}
            onClick={toggleNav}
          >
            <FaBars className="text-2xl" />
          </button>
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
        </div>
        <div className="flex items-center gap-2 md:order-2">
          <div className="flex gap-2 items-center">
            <Link to="/wishlist">
              <AiOutlineHeart className="text-2xl" />
            </Link>
            <Link to="/cart">
              <AiOutlineShopping className="text-2xl" />
            </Link>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={onMouseC}
              className="flex mr-2 h-6 w-6 rounded-full md:mr-0 "
              id="user-menu-button"
            >
              <img src={userImg} alt="user" />
            </button>
            {/* Dropdown menu */}

            <div
              className="z-50 hidden absolute right-0 mt-3 bg-white primary-80 border border-green-800 shadow"
              id="user-dropdown"
            >
              {authState.isLoggedIn ? (
                <div className="px-4 py-2 border-b-2">
                  <span className="block text-sm font-bold">Sanny Kumar</span>
                  <span className="block text-sm truncate">
                    ksanny556@gmail.com
                  </span>
                </div>
              ) : (
                <span></span>
              )}
              {authState.isLoggedIn ? (
                <ul className="" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/user-account"
                      className="block px-4 py-2 text-sm primary-80 hover:bg-green-950 hover:text-white"
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user-wishlist"
                      className="block px-4 py-2 text-sm primary-80 hover:bg-green-950 hover:text-white"
                    >
                      My Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user-order"
                      className="block px-4 py-2 text-sm primary-80 hover:bg-green-950 hover:text-white"
                    >
                      My Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm primary-80 hover:bg-green-950 hover:text-white"
                      onClick={onLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm primary-80 hover:bg-green-950 hover:text-white"
                      onClick={onLogout}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 z-50 ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border primary-80 border-green-800 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 hover:bg-green-950 hover:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 pl-3 pr-4 hover:bg-green-950 hover:text-white"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                key={5}
                to="/products"
                className="block py-2 pl-3 pr-4 hover:bg-green-950 hover:text-white"
              >
                Women
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
