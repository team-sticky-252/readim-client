import PropTypes from "prop-types";

function OptionPopUpButton({ text, position }) {
  return (
    <>
      {position === "top" && (
        <button
          type="button"
          className="font-extralight h-8 bg-white rounded-t-lg hover:bg-[#E5E5E5]"
          onClick={() => {}}
        >
          {text}
        </button>
      )}
      {position === "bottom" && (
        <button
          type="button"
          className="font-extralight h-8 bg-white rounded-b-lg hover:bg-[#E5E5E5]"
          onClick={() => {}}
        >
          {text}
        </button>
      )}
      {position === "middle" && (
        <button
          type="button"
          className="font-extralight h-8 bg-white hover:bg-[#E5E5E5]"
          onClick={() => {}}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default OptionPopUpButton;

OptionPopUpButton.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
