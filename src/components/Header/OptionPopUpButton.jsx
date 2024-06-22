import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function OptionPopUpButton({ text, position, setIsDeleteMode, setIsClick }) {
  const navigate = useNavigate();
  let borderRadius = "";

  if (position === "top") {
    borderRadius = "rounded-t-lg";
  } else if (position === "bottom") {
    borderRadius = "rounded-b-lg";
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (text === "setting") {
      setIsClick((prev) => !prev);
      navigate("/modal/guide");
    } else {
      setIsClick((prev) => !prev);
      setIsDeleteMode((prev) => !prev);
    }
  };

  return (
    <button
      type="button"
      className={`font-extralight h-8 bg-white ${borderRadius} hover:bg-[#E5E5E5]`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default OptionPopUpButton;

OptionPopUpButton.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setIsDeleteMode: PropTypes.func.isRequired,
  setIsClick: PropTypes.func.isRequired,
};
