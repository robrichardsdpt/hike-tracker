import "./themed-button.styles.scss";

const ThemedButton = ({ className, message, handleClick, type }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={!type && handleClick}
      type={type}
    >
      {message}
    </button>
  );
};
export default ThemedButton;
