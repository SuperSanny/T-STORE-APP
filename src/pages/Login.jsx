import { useEffect, useState } from "react";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import apple from "../assets/images/apple.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import poster from "../assets/images/girl01.png";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../Redux/Slices/AuthSlice";
import CustomModal from "../components/CustomModal";
import LabelCustomInput from "../components/CustomInput/LabelCustomInput";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);
  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
  };
  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
  };
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
      <section className="container mx-auto">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1 xl:col-span-1">
              <div className="poster">
                <img src={poster} alt="poster" className="w-full" />
              </div>
            </div>
            <div className="py-5 px-5">
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
                    <Link
                      to="#"
                      className="link-color flex items-start w-max"
                      onClick={openForgotPasswordModal}
                    >
                      Forgot Your Password?
                    </Link>
                    <CustomModal
                      isOpen={isForgotPasswordModalOpen}
                      className="text-center text-sm my-3 font-medium text-gray-400"
                      closeModal={closeForgotPasswordModal}
                      title="Please enter your Email Id to receive a reset password link"
                      customDiv={
                        <>
                          <div className="flex flex-col gap-3">
                            <LabelCustomInput
                              type="email"
                              label="Email"
                              value={emailValue}
                              onChange={(newValue) => setEmailValue(newValue)}
                            />
                            <button
                              className={`w-full font-semibold mt-2 py-2 px-3 bg-gray-600 ${
                                emailValue === ""
                                  ? "cursor-not-allowed opacity-50"
                                  : "login-btn"
                              } `}
                            >
                              SUBMIT
                            </button>
                          </div>
                        </>
                      }
                    />
                    <button className="btn login-btn mt-3 py-2">Log In</button>
                    <p className="text-center mt-3">Or</p>
                    <div className="flex items-center justify-center gap-4">
                      <img src={apple} className="icon w-7 h-7" alt="apple" />
                      <img src={google} className="icon w-7 h-7" alt="google" />
                      <img
                        src={facebook}
                        className="icon w-7 h-7"
                        alt="facebook"
                      />
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
        </div>
      </section>
    </>
  );
};

export default Login;
