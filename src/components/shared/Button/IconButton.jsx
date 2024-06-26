import PropTypes from "prop-types";

function IconButton({ children, onClick, title }) {
  return (
    <button
      className="group-hover:block hidden absolute items-center justify-center h-6 px-1.5 text-xs text-center rounded-full -top-2 -right-2 min-w-4 bg-light-gray drop-shadow hover:bg-medium-gray"
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
