import { useEffect } from "react";
import Meta from "../components/Meta";
import CustomInput from "../components/CustomInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import Images from "../constant/Images";
import { signup } from "../Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
  username: "",
};

const singupSchema = yup.object({
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
  username: yup.string().required("Name is required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues,
    validationSchema: singupSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(signup(values));
        if (response.status === 200) {
          navigate("/login");
        } else {
          console.error("Failed to register");
        }
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
                    onSubmit={formik.handleSubmit}
                    className="py-5 flex flex-col gap-5"
                  >
                    <div className="flex flex-col gap-1">
                      <CustomInput
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Full Name"
                        className="mt-2 px-4 py-2 border rounded-md"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        onBlur={formik.handleBlur("Full Name")}
                      />
                      <div className="error text-xs ml-2">
                        {formik.touched.username && formik.errors.username}
                      </div>
                    </div>
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
                    <button
                      type="submit"
                      className="btn login-btn mt-3 py-2 shadow-md rounded-md"
                    >
                      Register Now
                    </button>
                  </form>
                  <div className="flex flex-col gap-5">
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
                  </div>
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
