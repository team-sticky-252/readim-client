import PropTypes from "prop-types";

function OptionPopUpButton({ text, position }) {
  let borderRadius = "";
  if (position === "top") {
    borderRadius = "rounded-t-lg";
  } else if (position === "bottom") {
    borderRadius = "rounded-b-lg";
  }

  return (
    <button
      type="button"
      className={`font-extralight h-8 bg-white ${borderRadius} hover:bg-[#E5E5E5]`}
      onClick={() => {}}
    >
      {text}
    </button>
  );
}

export default OptionPopUpButton;

OptionPopUpButton.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
