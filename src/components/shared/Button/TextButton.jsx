import PropTypes from "prop-types";

function TextButton({ children, onClick = () => {} }) {
  return (
    <button
      className="absolute flex items-center z-10 justify-center px-2 text-xs text-center rounded-full -right-1.5 -top-2 h-7 min-w-4 bg-light-gray drop-shadow hover:bg-medium-gray"
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
  onClick: PropTypes.func,
};
