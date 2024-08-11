import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Service from "../shared/Service/Service";

import CONTENTS from "../../utils/ServiceContents";

function DescriptionService({ navigateNextPage, statement }) {
  const navigate = useNavigate();

  const title = CONTENTS.title[statement];
  const nextButtonText = CONTENTS.button[statement];
  const message = CONTENTS.message[statement];

  const moveToMainPage = () => {
    navigate("/");
  };

  const moveToWaringService = () => {
    navigate("/service/warning");
  };

  const handleCloseButtonClick = () => {
    if (statement === "warning") {
      moveToMainPage();
    } else {
      moveToWaringService();
    }
  };

  return (
    <Service
      title={title}
      onCloseButtonClick={handleCloseButtonClick}
      nextButtonText={nextButtonText}
      onNextButtonClick={() => navigateNextPage(statement)}
      isDisabledButton={false}
    >
      <div className="h-48 mb-4 overflow-y-scroll leading-7 max-w-none max-mobile:text-sm">
        <p className="mt-3 whitespace-pre-line">{message}</p>
      </div>
    </Service>
  );
}

export default DescriptionService;

DescriptionService.propTypes = {
  navigateNextPage: PropTypes.func.isRequired,
  statement: PropTypes.string.isRequired,
};
