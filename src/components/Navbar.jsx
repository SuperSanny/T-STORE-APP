import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import Images from "../constant/Images";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
import { gatAllCategory } from "../Redux/Slices/CategorySlice";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const NavBar = () => {
  // Logout function
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  function onLogout() {
    dispatch(logout());
  }
  // Logout function end
  // Categoty function Start
  const categoryState = useSelector((state) => state.category.categoryList);
  useEffect(() => {
    dispatch(gatAllCategory())
      .then(() => {
        console.log("Category fetched successfully"); // Log success
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [dispatch]);
  const categoryData = [];
  for (let i = 0; i < categoryState.length; i++) {
    categoryData.push({
      key: i + 1,
      id: categoryState[i]._id,
      name: categoryState[i].name,
    });
  }
  const [isCatOpen, setIsCatOpen] = useState(false);
  const onCatClick = () => {
    setIsCatOpen(!isCatOpen);
  };

  // State to control dropdown visibility
  const onMouseC = () => {
    const dropdown = document.getElementById("user-dropdown");
    dropdown.classList.toggle("hidden");
  };
  // searchbox
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const onMouseSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  // searchbox end
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //Cart Count
  const [cartItem, setCartItem] = useState(0);
  useEffect(() => {
    setCartItem(cartItem);
  }, []);
  return (
    <section className={`primary-80 border-b-2 bg-white w-full px-1.5 py-0.5`}>
      <div className=" container mx-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
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
          <div className="flex items-center gap-4 md:order-2">
            <div className="flex gap-3 items-center">
              <div className="relative z-20">
                <button type="button" onClick={onMouseSearchClick}>
                  {isSearchOpen ? (
                    <AiOutlineClose className="text-2xl mt-2" />
                  ) : (
                    <AiOutlineSearch className="text-2xl mt-2" />
                  )}
                  {/* <AiOutlineSearch className="text-2xl mt-2" /> */}
                </button>
                <div
                  className={`${
                    isSearchOpen ? "block" : "hidden"
                  } absolute right-0 mt-3 primary-80 border border-green-800 backdrop-filter bg-white  shadow-md rounded-md w-max mx-auto`}
                  id="search-dropdown"
                >
                  <div className="py-2 px-5">
                    <div className="border-b-2 border-green-800 flex items-center">
                      <AiOutlineSearch className="text-gray-400 mr-2 text-2xl" />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleInputChange}
                        className="w-full py-2 focus:outline-none focus:border-green-800 bg-transparent"
                      />
                      {query && (
                        <button
                          onClick={() => setQuery("")} // Clear the input field
                          className="text-gray-400 ml-2 focus:outline-none"
                        >
                          <AiOutlineClose className="text-2xl" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/wishlist">
                  <AiOutlineHeart className="text-2xl" />
                </Link>
              </div>
              <div>
                <Link to="/cart" className="relative">
                  <AiOutlineShopping className="text-2xl" />
                  <span className="inline-flex absolute top-0 items-center rounded-full bg-primary-80 px-1.5 py-0.5 text-xs text-white ">
                    {cartItem}
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={onMouseC}
                className="flex mr-2 h-6 w-6 rounded-full md:mr-0 "
                id="user-menu-button"
              >
                <img src={Images.userImg} alt="user" />
              </button>
              {/* Dropdown menu */}

              <div
                className="z-50 hidden absolute right-0 mt-3 bg-white primary-80 border border-green-800 rounded-md shadow-md"
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
                        to="/myaccount"
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
                        className="block px-4 py-2 text-sm primary-80 hover:bg-green-950 hover:text-white rounded-b"
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
                        className="block px-4 py-2 text-sm primary-80 hover:bg-green-950 hover:text-white rounded"
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
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 z-1 ${
              isNavOpen ? "block" : "hidden"
            }`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-2 mt-3 bg-white border primary-80 border-green-800 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 lg:text-center text-left lg:w-36 w-auto pl-5 md:pl-0 hover:bg-green-950 hover:text-white hover:rounded-md hover:shadow-md"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="650a7be17575e3b87f3f1d03"
                  className="block py-2 lg:text-center text-left lg:w-36 w-auto pl-5 md:pl-0 hover:bg-green-950 hover:text-white hover:rounded-md hover:shadow-md"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="650a7bf77575e3b87f3f1d05"
                  className="block py-2 lg:text-center text-left lg:w-36 w-auto pl-5 md:pl-0 hover:bg-green-950 hover:text-white hover:rounded-md hover:shadow-md"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="650a7bf77575e3b87f3f1d05"
                  className="block py-2 lg:text-center text-left lg:w-36 w-auto pl-5 md:pl-0 hover:bg-green-950 hover:text-white hover:rounded-md hover:shadow-md"
                >
                  Unisex
                </Link>
              </li>
              <li>
                <div className="block lg:w-36 w-auto pl-5 mt-2">
                  <div className="relative">
                    <button
                      id="dropdownHoverButton"
                      onClick={onCatClick}
                      // onFocus={onMouseE}
                      // onBlur={onMouseL}
                      className=" primary-80 flex gap-1 items-center"
                      type="button"
                    >
                      Category <FiChevronDown />
                    </button>
                    <div
                      id="dropdownHover"
                      className={`z-10 p-1 mt-2 ${
                        isCatOpen ? "block" : "hidden"
                      }  absolute md:right-0 bg-white min-w-max border border-green-800 shadow-md rounded-md`}
                    >
                      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                        {categoryData.map((list) => (
                          <li key={list.id} className="w-48">
                            <Link
                              to={`p/${list.id}`}
                              className="block px-2 py-2 text-sm hover:bg-green-950 hover:text-white truncate"
                            >
                              {list.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NavBar;
