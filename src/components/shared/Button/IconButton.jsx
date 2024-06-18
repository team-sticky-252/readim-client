import PropTypes from "prop-types";

function IconButton({ children, onClick, title }) {
  return (
    <button
      className="absolute flex items-center justify-center px-2 text-xs text-center rounded-full -top-3 -right-3 h-7 min-w-4 bg-light-gray drop-shadow hover:bg-medium-gray"
      type="button"
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
}

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
