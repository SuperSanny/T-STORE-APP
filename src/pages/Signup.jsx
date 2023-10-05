import { useEffect } from "react";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import Images from "../constant/Images";
import { signup } from "../Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);

  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    username: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  }

  function resetForm() {
    setSignupDetails({
      email: "",
      password: "",
      username: "",
    });
  }
  async function onFormSubmit(e) {
    e.preventDefault();
    const response = await dispatch(signup(signupDetails));
    if (response?.payload?.data) {
      navigate("/login");
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
      <Meta title="Sign up" />
      <section className="container mx-auto min-h-screen">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1 xl:col-span-1">
              <div className="poster">
                <img src={Images.poster1} alt="poster" className="w-full" />
              </div>
            </div>
            <div className="py-5 px-5">
              <div className="col-span-1 md:col-span-1 xl:col-span-1">
                <div className="login">
                  <h3 className="text-center text-4xl font-semibold">
                    Create An Account
                  </h3>
                  <form
                    onSubmit={onFormSubmit}
                    className="py-3 flex flex-col gap-2"
                  >
                    <CustomInput
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Name"
                      className="mt-2 px-4 py-2 border rounded-md"
                      onChange={handleFormChange}
                      value={signupDetails.username}
                    />
                    <CustomInput
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="mt-2 px-4 py-2 border rounded-md"
                      onChange={handleFormChange}
                      value={signupDetails.email}
                    />
                    <CustomInput
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="mt-2 px-4 py-2 border rounded-md"
                      onChange={handleFormChange}
                      value={signupDetails.password}
                    />
                    <button type="submit" className="btn login-btn mt-3 py-2">
                      Register Now
                    </button>
                    <p className="mt-3 text-center">
                      Already Have an Account? &nbsp;
                      <Link to="/login" className="link-color">
                        Log In
                      </Link>
                    </p>
                    <p className="text-center mt-3">Or</p>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={Images.appleIcon}
                        className="icon w-7 h-7"
                        alt="apple"
                      />
                      <img
                        src={Images.googleIcon}
                        className="icon w-7 h-7"
                        alt="google"
                      />
                      <img
                        src={Images.facebookIcon}
                        className="icon w-7 h-7"
                        alt="facebook"
                      />
                    </div>
                    <p className="mt-3 text-center ps">
                      By clicking Register Now - you Agree To &nbsp;
                      <Link
                        to="TermAndConditions"
                        className="link-color underline "
                      >
                        Terms & Conditions
                      </Link>
                      &nbsp; And &nbsp;
                      <Link
                        to="PrivacyPolicy"
                        className="link-color underline "
                      >
                        Privacy Policy.
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

export default Signup;
