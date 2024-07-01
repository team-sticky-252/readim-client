import { useEffect } from "react";
import { GoX } from "react-icons/go";
import PropTypes from "prop-types";

import { allowScroll, preventScroll } from "../../../utils/scrollUtils";

function Modal({
  title,
  onCloseButtonClick,
  nextButtonText,
  onNextButtonClick,
  isDisabledButton,
  children,
}) {
  useEffect(() => {
    const prevScrollY = preventScroll();

    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <div className="p-10 bg-white shadow-md w-200 h-fit shadow-black/25 rounded-3xl">
      <button
        onClick={onCloseButtonClick}
        className="absolute rounded-md hover:bg-medium-gray right-5 top-5"
        aria-label="closeButton"
        data-test="test-close-button"
      >
        <GoX color="#AAAAAA" size={30} />
      </button>
      {title && (
        <h1
          className="relative text-[2.5rem] font-semibold"
          data-test="test-header"
        >
          {title}
        </h1>
      )}
      {children}
      <div className="w-full text-right">
        <button
          onClick={onNextButtonClick}
          disabled={isDisabledButton}
          data-test="test-next-button"
          className={
            isDisabledButton ? "disabled-modal-button" : "abled-modal-button"
          }
        >
          {nextButtonText}
        </button>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  onCloseButtonClick: PropTypes.func.isRequired,
  nextButtonText: PropTypes.string.isRequired,
  onNextButtonClick: PropTypes.func.isRequired,
  isDisabledButton: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
