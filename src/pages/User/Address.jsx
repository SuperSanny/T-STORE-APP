import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { RiAddLine } from "react-icons/ri";
import BorderCustomInput from "../../components/CustomInput/BorderCustomInput";
import { useState } from "react";
import CustomModal from "../../components/CustomModal";
const Address = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };
  const [isAddressModel, setIsAddressModel] = useState(false);
  const openAddressModel = () => {
    setIsAddressModel(true);
  };
  const closeAddressModel = () => {
    setIsAddressModel(false);
  };

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [streetName, setStreetName] = useState("");
  const [locality, setLocality] = useState("");
  const [landmark, setLandmark] = useState("");
  return (
    <>
      <section className="container mx-auto px-5 py-5">
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
            <h1 className="text-xl md:text-3xl font-semibold">My Address</h1>
            <p className="w-20 md:w-28 border-b-2 border-[#5a6d57]"></p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <div className="border border-[#5a6d57] px-5 py-4 h-48 md:w-96">
              <div className="grid grid-cols-1 content-between gap-5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold primary-80 flex justify-between">
                    Sanny Kumar{" "}
                    <p className="bg-primary text-white w-max px-1 py-0 text-[8px]">
                      HOME
                    </p>
                  </h3>
                  <p className="text-xs text-gray-700">
                    HSR LAYOUT, Bengaluru, Karnataka HSR LAYOUT, Bengaluru,
                    Karnataka
                  </p>
                </div>
                <div className="flex flex-col primary-80 text-xs gap-1">
                  <h3 className="">Bengaluru, 560034</h3>
                  <p className="">Contact Number: 9523556280</p>
                </div>
                <div className="primary-80 text-md font-semibold flex items-center gap-3">
                  <Link>Edit</Link>
                  <span className="border border-[#5a6d57] h-4"></span>
                  <Link>Remove</Link>
                </div>
              </div>
            </div>
            <div className="border hover:border-[#5a6d57] h-44 w-96">
              <Link onClick={openAddressModel}>
                <div className="grid content-center py-11">
                  <div className="flex flex-col items-center gap-1">
                    <RiAddLine className="text-5xl" />
                    <h1 className="text-md font-medium">ADD NEW ADDRESS</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5 py-5">
        <CustomModal
          isOpen={isAddressModel}
          closeModal={closeAddressModel}
          title="Add New Address"
          customDiv={
            <>
              <div className="mt-10 w-full">
                <div className="flex flex-col gap-3">
                  <BorderCustomInput
                    type="text"
                    label="Full Name"
                    value={fullName}
                    name="fullName"
                    onChange={(newValue) => setFullName(newValue)}
                    id="full-name"
                  />
                  <BorderCustomInput
                    type="text"
                    label="Mobile Number"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={(newValue) => setMobileNumber(newValue)}
                    id="mobile-number"
                  />
                  <BorderCustomInput
                    type="text"
                    label="Pincode/Postal Code/ Zipcode"
                    name="pincode"
                    id="pincode"
                    value={pincode}
                    onChange={(newValue) => setPincode(newValue)}
                  />
                  <div className="flex gap-5">
                    <BorderCustomInput
                      type="text"
                      label="City"
                      id="city"
                      name="city"
                      value={city}
                      onChange={(newValue) => setCity(newValue)}
                    />
                    <BorderCustomInput
                      type="text"
                      label="State"
                      id="state"
                      name="state"
                      value={state}
                      onChange={(newValue) => setState(newValue)}
                    />
                  </div>
                  <BorderCustomInput
                    type="text"
                    label="Flat no/Building, Street Name"
                    name="streetName"
                    value={streetName}
                    onChange={(newValue) => setStreetName(newValue)}
                    id="streetname"
                  />
                  <BorderCustomInput
                    type="text"
                    label="Area/Locality"
                    id="locality"
                    name="locality"
                    value={locality}
                    onChange={(newValue) => setLocality(newValue)}
                  />
                  <BorderCustomInput
                    type="text"
                    label="Landmark (Optional)"
                    id="landmark"
                    name="landmark"
                    value={landmark}
                    onChange={(newValue) => setLandmark(newValue)}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-medium text-gray-500">
                      Save Address As
                    </p>
                    <div className="flex gap-5">
                      <button
                        className={`text-sm px-3 py-1.5 relative rounded-md ${
                          selectedTag === "home"
                            ? `border border-[#272f25] primary-80 font-medium`
                            : `border text-gray-400`
                        } `}
                      >
                        <input
                          type="radio"
                          value="home"
                          checked={selectedTag === "home"}
                          onChange={handleTagChange}
                          className="form-radio absolute appearance-none cursor-pointer w-full h-8"
                        />
                        <span>HOME</span>
                      </button>
                      <button
                        className={`text-sm px-3 py-1.5 relative rounded-md ${
                          selectedTag === "office"
                            ? `border border-[#272f25] primary-80 font-medium`
                            : `border text-gray-400`
                        } `}
                      >
                        <input
                          type="radio"
                          value="office"
                          checked={selectedTag === "office"}
                          onChange={handleTagChange}
                          className="form-radio absolute appearance-none cursor-pointer w-full h-8 "
                        />
                        <span>OFFICE</span>
                      </button>
                      <button
                        className={`text-sm px-3 py-1.5 relative rounded-md ${
                          selectedTag === "other"
                            ? `border border-[#272f25] primary-80 font-medium`
                            : `border text-gray-400`
                        } `}
                      >
                        <input
                          type="radio"
                          value="other"
                          checked={selectedTag === "other"}
                          onChange={handleTagChange}
                          className="form-radio absolute appearance-none cursor-pointer w-full h-8"
                        />
                        <span>OTHER</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-around gap-5 px-3">
                    <button className="text-center text-sm font-medium py-3 bg-primary-80 text-white w-full rounded-md">
                      SAVE ADDRESS
                    </button>
                    <button className="text-center text-sm font-medium py-3 border-2 border-[#272f25] w-full rounded-md">
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </section>
    </>
  );
};

export default Address;
