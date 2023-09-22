import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";
const Navbar = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function onLogout() {
    dispatch(logout());
  }
  return (
    <>
      <div className="primary-80 py-2.5 border-b-2 mb-2">
        <div className="flex justify-around">
          <div>
            <Link to="/products">Products</Link>
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
    </>
  );
};

export default Navbar;
