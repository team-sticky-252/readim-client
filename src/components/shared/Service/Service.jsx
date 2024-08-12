import { useEffect } from "react";
import PropTypes from "prop-types";

import Footer from "../../Footer/Footer";

import { allowScroll, preventScroll } from "../../../utils/scrollUtils";

import "./service.css";

function Service({ title, onNextButtonClick, isDisabledButton, children }) {
  useEffect(() => {
    const prevScrollY = preventScroll();

    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen max-mobile:h-screen max-mobile:min-h-0">
      <div className="flex justify-center h-auto min-h-full mb-auto max-mobile:h-auto max-mobile:min-h-0">
        <div className="w-216 min-w-90 max-mobile:w-dvw max-mobile:px-4">
          <div className="w-full h-full mt-20 text-center max-mobile:mt-10">
            {title && (
              <h1
                className="relative mb-20 font-semibold text-7xl max-mobile:text-4xl max-mobile:mb-10"
                data-test="test-header"
              >
                {title}
              </h1>
            )}
            {children}
            <div className="w-full text-center">
              <button
                onClick={onNextButtonClick}
                disabled={isDisabledButton}
                data-test="test-next-button"
                className={
                  isDisabledButton
                    ? "disabled-service-button"
                    : "abled-service-button"
                }
              >
                ✔️ 확인했어요
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="absolute w-full h-20 bg-gradient-to-b from-white -z-10"></div>
    </div>
  );
}

export default Service;

Service.propTypes = {
  title: PropTypes.string.isRequired,
  onNextButtonClick: PropTypes.func.isRequired,
  isDisabledButton: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
