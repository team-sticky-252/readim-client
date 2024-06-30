import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Modal from "../shared/Modal/Modal";

import CONTENTS from "../../utils/ModalContents";

function DescriptionModal({ navigateNextPage, statement }) {
  const navigate = useNavigate();

  const title = CONTENTS.title[statement];
  const nextButtonText = CONTENTS.button[statement];
  const message = CONTENTS.message[statement];

  const handleCloseButtonClick = () => {
    if (statement === "warning") {
      navigate("/");
    } else {
      navigate("/modal/warning");
    }
  };

  return (
    <Modal
      title={title}
      onCloseButtonClick={handleCloseButtonClick}
      nextButtonText={nextButtonText}
      onNextButtonClick={() => navigateNextPage(statement)}
      isDisabledButton={false}
    >
      <div className="h-40 mb-4 overflow-y-scroll leading-7 whitespace-pre-line max-w-none">
        <p className="mt-3 whitespace-pre-line">{message}</p>
      </div>
    </Modal>
  );
}

export default DescriptionModal;

DescriptionModal.propTypes = {
  navigateNextPage: PropTypes.func.isRequired,
  statement: PropTypes.string.isRequired,
};
