/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const BorderCustomInput = ({ id, type, label, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <>
      <div className="relative z-0">
        <input
          type={type}
          id={id}
          value={inputValue}
          onChange={handleInputChange}
          className="block py-2.5 px-3 w-full text-sm font-semibold priamry-80 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border focus:border-green-800 peer"
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="absolute text-sm font-semibold ml-3 px-0.5 text-gray-400 duration-300 transform -translate-y-2 scale-75 top-3 -z-1 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default BorderCustomInput;
