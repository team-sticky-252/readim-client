import PropTypes from "prop-types";

function Button({ children, onClick, label }) {
  return (
    <button
      className="absolute flex items-center justify-center px-2 text-xs text-center rounded-full hover:bg-medium-gray -top-3 -right-3 h-7 min-w-4 bg-light-gray drop-shadow"
      type="button"
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
