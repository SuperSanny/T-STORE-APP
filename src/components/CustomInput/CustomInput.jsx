/* eslint-disable react/prop-types */
const CustomInput = (props) => {
  const { type, name, id, placeholder, className, onChange, value, onBlur } =
    props;
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`form-control accent-[#272f25] ${className}`}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </>
  );
};

export default CustomInput;
