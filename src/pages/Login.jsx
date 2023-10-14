import { useEffect, useState } from "react";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import Images from "../constant/Images";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../Redux/Slices/AuthSlice";
import CustomModal from "../components/CustomModal";
import LabelCustomInput from "../components/CustomInput/LabelCustomInput";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
  forgotemail: "",
};

const loginSchema = yup.object({
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});

const Login = () => {
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
  const authState = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(login(values));
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/");
    }
  }, [authState.isLoggedIn, navigate]);
  return (
    <>
      <Meta title="Login" />
      <section className="container mx-auto">
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
                  <h3 className="text-center text-4xl font-semibold">Log In</h3>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="py-5 flex flex-col gap-5"
                  >
                    <div className="flex flex-col gap-1">
                      <CustomInput
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="px-4 py-2 border rounded-md w-full"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur("Email")}
                      />
                      <div className="error text-xs ml-2">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <CustomInput
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="px-4 py-2 border rounded-md w-full"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur("Password")}
                      />
                      <div className="error text-xs ml-2">
                        {formik.touched.password && formik.errors.password}
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="link-color flex items-start w-max"
                      onClick={openForgotPasswordModal}
                    >
                      Forgot Your Password?
                    </Link>
                    <button
                      className="btn login-btn mt-3 py-2 rounded-md shadow-md"
                      type="submit"
                    >
                      Log In
                    </button>
                  </form>
                  <div className="flex flex-col gap-5">
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
                      New To T-STORE? &nbsp;
                      <Link to="/signup" className="link-color">
                        Create An Account
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
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
                  name="forgotemail"
                  onChange={formik.handleChange}
                  value={formik.values.forgotemail}
                  onBlur={formik.handleBlur("Email")}
                />
                <div className="error text-xs ml-2">
                  {formik.touched.email && formik.errors.email}
                </div>
                <button
                  className={`w-full font-semibold mt-2 py-2 px-3 bg-gray-600 ${
                    formik.values.forgotemail === ""
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
      </section>
    </>
  );
};

export default Login;
