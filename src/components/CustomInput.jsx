/* eslint-disable react/prop-types */
const CustomInput = (props) => {
  const { type, name, id, placeholder, className, onChange, value } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`form-control ${className}`}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default CustomInput;
