import PropTypes from "prop-types";

function TextButton({ children, onClick = () => {} }) {
  return (
    <div
      className="z-10 flex items-center justify-center px-2 text-xs text-center rounded-full w-fit h-7 min-w-4 bg-light-gray drop-shadow hover:bg-medium-gray"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(e);
      }}
    >
      {children}
    </div>
  );
}

export default TextButton;

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
