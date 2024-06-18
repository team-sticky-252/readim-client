import PropTypes from "prop-types";

function Button({ children, onClick, label }) {
  return (
    <button
      className="flex items-center justify-center h-8 px-2.5 text-xs text-center rounded-full min-w-6 bg-light-gray drop-shadow"
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
