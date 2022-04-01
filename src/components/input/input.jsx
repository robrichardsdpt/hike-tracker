import "./input.styles.scss";

const Input = ({
  required = false,
  className,
  id,
  name,
  type,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <input
      required={required}
      className={`primary ${className}`}
      name={name}
      id={id}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
