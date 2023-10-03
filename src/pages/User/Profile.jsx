import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import LabelCustomInput from "../../components/LabelCustomInput";
import NewCustomInput from "../../components/NewCustomInput";
import { useState } from "react";
import CustomModal from "../../components/CustomModal";
const Profile = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [oldPasswordValue, setOldPasswordValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);

  const openPasswordModal = () => {
    setIsPasswordModalOpen(true);
  };
  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };
  const openPhoneModal = () => {
    setIsPhoneModalOpen(true);
  };
  const closePhoneModal = () => {
    setIsPhoneModalOpen(false);
  };
  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
  };
  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
  };
  return (
    <>
      <section className="container mx-auto px-3 py-5">
        <div className="flex flex-col gap-6">
          <div className="">
            <Link
              to="/myaccount"
              className="link-color items-center flex gap-1"
            >
              <AiOutlineLeft className="text-xl" />
              Return To Account
            </Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl md:text-3xl font-semibold">My Profile</h1>
            <p className="w-20 md:w-28 border-b-2 border-[#5a6d57]"></p>
          </div>
        </div>
        <div className="mt-10 w-full lg:w-2/6">
          <div className="flex flex-col gap-6 py-3 px-5">
            <div className="flex gap-5">
              <LabelCustomInput
                id="first-name"
                type="text"
                label="First Name"
                value={firstNameValue}
                onChange={(newValue) => setFirstNameValue(newValue)}
              />
              <LabelCustomInput
                id="last-name"
                type="text"
                label="Last Name"
                value={lastNameValue}
                onChange={(newValue) => setLastNameValue(newValue)}
              />
            </div>
            <div>
              <LabelCustomInput
                id="email"
                type="email"
                label="Email"
                value={emailValue}
                onChange={(newValue) => setEmailValue(newValue)}
              />
            </div>
            <div className="flex flex-col  gap-1">
              <LabelCustomInput
                id="password"
                type="password"
                label="Password"
                value={passwordValue}
                onChange={(newValue) => setPasswordValue(newValue)}
              />
              <button
                className="link-color w-max flex items-start justify-start"
                onClick={openPasswordModal}
              >
                Change Password
              </button>
              <CustomModal
                isOpen={isPasswordModalOpen}
                closeModal={closePasswordModal}
                title="Change Password"
                customDiv={
                  <>
                    <p className="text-xs font-semibold text-gray-400">
                      {emailValue}
                    </p>
                    <div className="flex flex-col gap-6 mt-10">
                      <LabelCustomInput
                        type="password"
                        label="Enter your Old Password"
                        value={oldPasswordValue}
                        onChange={(newValue) => setOldPasswordValue(newValue)}
                      />
                      <button
                        className="link-color w-max flex items-start justify-start"
                        onClick={openForgotPasswordModal}
                      >
                        Forgot Password?
                      </button>
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
                      <LabelCustomInput
                        type="password"
                        label="Enter your New Password"
                        value={newPasswordValue}
                        onChange={(newValue) => setNewPasswordValue(newValue)}
                      />
                      <LabelCustomInput
                        type="password"
                        label="Confirm New Password"
                        value={confirmPasswordValue}
                        onChange={(newValue) =>
                          setConfirmPasswordValue(newValue)
                        }
                      />
                      <button
                        className={`w-full font-semibold mt-2 py-2 px-3 login-btn `}
                      >
                        UPDATE PASSWORD
                      </button>
                    </div>
                  </>
                }
              />
            </div>
            <div className="flex flex-col  gap-1">
              <LabelCustomInput
                id="phone"
                type="text"
                label="Phone"
                value={phoneValue}
                onChange={(newValue) => setPhoneValue(newValue)}
              />
              <button
                className="link-color w-max flex items-start justify-start"
                onClick={openPhoneModal}
              >
                Change Mobile Number
              </button>
              <CustomModal
                isOpen={isPhoneModalOpen}
                className="text-xl"
                closeModal={closePhoneModal}
                title="Verify Your Email"
                customDiv={
                  <>
                    <div className="flex flex-col gap-10">
                      <p className="text-sm font-semibold text-gray-400">
                        OTP will be sent to your Email
                      </p>
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
                        GET OTP
                      </button>
                    </div>
                  </>
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <LabelCustomInput
                type="date"
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
              />
              <p className="text-[10px] text-gray-400">
                Share your DOB to get special gifts on the 1st day of your
                birthday month
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-[11px]">Gender</p>
              <div className="flex gap-4 items-center">
                <label className="inline-flex items-center mb-2">
                  <input
                    type="radio"
                    value="male"
                    checked={selectedGender === "male"}
                    onChange={handleGenderChange}
                    className="form-radio h-5 w-5 accent-green-900"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center mb-2">
                  <input
                    type="radio"
                    value="female"
                    checked={selectedGender === "female"}
                    onChange={handleGenderChange}
                    className="form-radio h-5 w-5 accent-green-900"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              <NewCustomInput
                type="checkbox"
                className="accent-green-900 h-4 w-4"
                id="check-box"
              />
              <label htmlFor="check-box">
                I want to receive order updates on Whatsapp
              </label>
            </div>
            <div className="">
              <Link
                to="/save-changes"
                className="btn login-btn w-1/2 px-5 py-3"
              >
                SAVE CHANGES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
