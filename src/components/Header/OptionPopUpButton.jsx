import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";

function OptionPopUpButton({ text, position }) {
  const navigate = useNavigate();
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
      onClick={() => navigate("/modal/welcome")}
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
