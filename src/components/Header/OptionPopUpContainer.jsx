import { forwardRef } from "react";
import PropTypes from "prop-types";

import OptionPopUpButton from "./OptionPopUpButton";

const OptionPopUpContainer = forwardRef(function OptionPopUpContainer(
  { setIsClick, setIsDeleteMode },
  popUpButton,
) {
  return (
    <div
      ref={popUpButton}
      className="fixed grid w-24 gap-[1px] bg-gray rounded-lg cursor-pointer top-5 right-14 shadow-md"
    >
      <OptionPopUpButton
        text="setting"
        position="top"
        setIsDeleteMode={setIsDeleteMode}
        setIsClick={setIsClick}
      />
      <OptionPopUpButton
        text="edit"
        position="bottom"
        onClick={() => setIsClick((prev) => !prev)}
        setIsDeleteMode={setIsDeleteMode}
        setIsClick={setIsClick}
      />
    </div>
  );
});

export default OptionPopUpContainer;

OptionPopUpContainer.propTypes = {
  setIsClick: PropTypes.func.isRequired,
  setIsDeleteMode: PropTypes.func.isRequired,
};
