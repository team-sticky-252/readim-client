import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Service from "../shared/Service/Service";

import CONTENTS from "../../utils/ServiceContents";

function TestService({ navigateNextPage }) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const testTextAreaRef = useRef(null);
  const navigate = useNavigate();

  const title = CONTENTS.title.test;
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
    <Service
      title={title}
      onCloseButtonClick={() => navigate("/service/warning")}
      onNextButtonClick={() => navigateNextPage("test")}
      isDisabledButton={!isScrolledToBottom}
    >
      <div
        className="pr-4 mt-4 mb-4 overflow-y-auto text-base leading-7 prose prose-lg whitespace-pre-line service-textarea-shadow-inner h-132 max-w-none max-mobile:text-sm max-mobile:leading-6 mobile-content"
        ref={testTextAreaRef}
        data-test="test-area"
      >
        {message}
      </div>
    </Service>
  );
}

export default TestService;

TestService.propTypes = {
  navigateNextPage: PropTypes.func.isRequired,
};
