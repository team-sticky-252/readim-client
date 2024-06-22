import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import OptionButton from "./OptionButton";
import OptionPopUpContainer from "./OptionPopUpContainer";

function OptionContainer({ setIsDeleteMode }) {
  const [isClick, setIsClick] = useState(false);
  const popUpButton = useRef();
  const optionButton = useRef();

  const isOutsidePopUp = (event) => {
    if (
      isClick &&
      !popUpButton.current.contains(event.target) &&
      !optionButton.current.contains(event.target)
    ) {
      setIsClick(!isClick);
    }
  };

  useEffect(() => {
    window.addEventListener("click", isOutsidePopUp);

    return () => {
      window.removeEventListener("click", isOutsidePopUp);
    };
  }, [isClick]);

  return (
    <div className="flex justify-end h-20 relatvie">
      {isClick && (
        <OptionPopUpContainer
          setIsClick={setIsClick}
          setIsDeleteMode={setIsDeleteMode}
          ref={popUpButton}
        />
      )}
      <OptionButton setIsClick={setIsClick} ref={optionButton} />
    </div>
  );
}

export default OptionContainer;

OptionContainer.propTypes = {
  setIsDeleteMode: PropTypes.func.isRequired,
};
