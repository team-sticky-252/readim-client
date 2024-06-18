import PropTypes from "prop-types";

function TextButton({ children, onClick }) {
  return (
    <button
      className="absolute top-0 right-0 flex items-center justify-center px-2 text-xs text-center rounded-full h-7 min-w-4 bg-light-gray drop-shadow hover:bg-medium-gray"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TextButton;

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
