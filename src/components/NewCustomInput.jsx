/* eslint-disable react/prop-types */
import { useState } from "react";

const NewCustomInput = ({ id, type, placeholder, className, min, max }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //   const handleEnterKeyPress = (e) => {
  //     if (e.key === 'Enter') {
  //       alert(`Enter key pressed with value: ${inputValue}`);
  //       setInputValue(''); // Clear the input field
  //     }
  //   };

  return (
    <div>
      <input
        type={type}
        id={id}
        value={inputValue}
        min={min}
        max={max}
        onChange={handleInputChange}
        // onKeyPress={handleEnterKeyPress}
        placeholder={placeholder}
        className={`focus:outline-none p-2 w-full border border-green-800 ${className}`}
      />
    </div>
  );
};

export default NewCustomInput;
