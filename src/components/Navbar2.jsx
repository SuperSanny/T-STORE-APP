/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
import { FiChevronDown } from "react-icons/fi";
import { useEffect } from "react";
import { gatAllCategory } from "../Redux/Slices/CategorySlice";
const Navbar2 = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const categoryState = useSelector((state) => state.category.categoryList);
  function onLogout() {
    dispatch(logout());
  }
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
  const itemsPerColumn = Math.ceil(categoryData.length / 3);
  const columns = Array.from({ length: 3 }, (_, columnIndex) =>
    categoryData.slice(
      columnIndex * itemsPerColumn,
      (columnIndex + 1) * itemsPerColumn
    )
  );
  // State to control dropdown visibility
  const onMouseE = () => {
    const dropdown = document.getElementById("dropdownHover");
    dropdown.classList.toggle("hidden");
  };
  const onMouseL = () => {
    const dropdown = document.getElementById("dropdownHover");
    dropdown.classList.toggle("hidden");
  };
  return (
    <>
      <div className="primary-80 py-2.5 border-b-2 mb-2">
        <div className="flex justify-around items-center">
          <div className="flex gap-5">
            <div>
              <Link to="/products" className="link-color">
                Products
              </Link>
            </div>
            <div className="relative">
              <button
                id="dropdownHoverButton"
                onMouseOver={onMouseE}
                onMouseLeave={onMouseL}
                className="link-color flex gap-1 items-center"
                type="button"
              >
                Category <FiChevronDown />
              </button>
              <div
                id="dropdownHover"
                className="z-10 hidden absolute left-0 mt-3 w-max bg-white divide-y divide-gray-100 shadow-lg "
              >
                <div className="p-3 grid grid-cols-3 gap-2">
                  {columns.map((column, columnIndex) => (
                    <div key={columnIndex}>
                      <ul>
                        {column.map((list) => (
                          <li key={list.id}>
                            <Link
                              to={`products/${list.id}`}
                              className="block px-1 py-1 text-sm hover:bg-green-950 hover:text-white"
                            >
                              {list.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            {authState.isLoggedIn ? (
              <Link
                to="/login"
                className="logout-btn py-2 px-2.5"
                onClick={onLogout}
              >
                Logout
              </Link>
            ) : (
              <Link to="/login" className="logout-btn py-2 px-2.5">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown items */}
    </>
  );
};

export default Navbar2;
