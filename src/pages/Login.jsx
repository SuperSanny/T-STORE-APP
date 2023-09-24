import { useEffect, useState } from "react";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import apple from "../assets/images/apple.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import poster from "../assets/images/girl01.png";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../Redux/Slices/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  function handleFormChange(e) {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  }
  function resetForm() {
    setLoginDetails({
      email: "",
      password: "",
    });
  }
  async function onFormSubmit(e) {
    e.preventDefault();
    const response = await dispatch(login(loginDetails));
    if (response?.payload?.data) {
      navigate("/");
    }
    resetForm();
  }
  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/");
    }
  });

  return (
    <>
      <Meta title="Login" />
      <Navbar />
      <section className="min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1 xl:col-span-1">
              <div className="poster">
                <img src={poster} alt="poster" className="w-full" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 xl:col-span-1">
              <div className="login">
                <h3 className="text-center text-xl font-semibold">Log In</h3>
                <form
                  onSubmit={onFormSubmit}
                  className="py-3 flex flex-col gap-2"
                >
                  <CustomInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mt-2 px-4 py-2 border rounded-md"
                    onChange={handleFormChange}
                    value={loginDetails.email}
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="mt-2 px-4 py-2 border rounded-md"
                    onChange={handleFormChange}
                    value={loginDetails.password}
                  />
                  <Link to="/forgot-password" className="link-color">
                    Forgot Your Password?
                  </Link>
                  <button className="btn login-btn mt-3 py-2">Log In</button>
                  <p className="text-center mt-3">Or</p>
                  <div className="flex items-center justify-center gap-4">
                    <img src={apple} className="icon" alt="apple" />
                    <img src={google} className="icon" alt="google" />
                    <img src={facebook} className="icon" alt="facebook" />
                  </div>
                  <p className="mt-3 text-center ps">
                    New To T-STORE? &nbsp;
                    <Link to="/signup" className="link-color">
                      Create An Account
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
