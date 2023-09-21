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
      <div className="primary-80 py-3">
        <div className="flex justify-around">
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            {authState.isLoggedIn && (
              <Link to="/login" className="logout-btn" onClick={onLogout}>
                Logout
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
