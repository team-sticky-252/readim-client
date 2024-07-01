import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Modal from "../shared/Modal/Modal";

import CONTENTS from "../../utils/ModalContents";
import { allowScroll, preventScroll } from "../../utils/scrollUtils";

function TestModal({ navigateNextPage }) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const testTextAreaRef = useRef(null);
  const navigate = useNavigate();

  const title = CONTENTS.title.test;
  const nextButtonText = CONTENTS.button.test;
  const message = CONTENTS.message.test;

  const updateScroll = () => {
    const bottomScrollPosition =
      testTextAreaRef.current.scrollHeight -
      testTextAreaRef.current.clientHeight;
    const currentScrollPosition = testTextAreaRef.current.scrollTop;
    const threshold = 1;

    if (
      Math.abs(bottomScrollPosition - currentScrollPosition) <= threshold &&
      !isScrolledToBottom
    ) {
      setIsScrolledToBottom(true);
    }
  };

  useEffect(() => {
    if (testTextAreaRef.current) {
      testTextAreaRef.current.addEventListener("scroll", updateScroll);
    }

    return () => {
      if (testTextAreaRef.current) {
        testTextAreaRef.current.removeEventListener("scroll", updateScroll);
      }
    };
  }, []);

  return (
    <Modal
      title={title}
      onCloseButtonClick={() => navigate("/modal/warning")}
      nextButtonText={nextButtonText}
      onNextButtonClick={() => navigateNextPage("test")}
      isDisabledButton={!isScrolledToBottom}
    >
      <div
        className="pr-4 mt-4 mb-4 overflow-y-scroll text-base leading-7 prose prose-lg whitespace-pre-line modal-textarea-shadow-inner h-140 max-w-none"
        ref={testTextAreaRef}
        data-test="test-area"
      >
        {message}
      </div>
    </Modal>
  );
}

export default TestModal;

TestModal.propTypes = {
  navigateNextPage: PropTypes.func.isRequired,
};
