import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Service from "../shared/Service/Service";
import CONTENTS from "../../utils/ServiceContents";
import { calculateMinReadTime, renderContent } from "../../utils/readTimeTest";

function TestService({ navigateNextPage }) {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [readingTimes, setReadingTimes] = useState([]);
  const [countdown, setCountdown] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(CONTENTS.title.test.normal);

  const navigate = useNavigate();

  const contents = CONTENTS.message.test;

  const updateCountdown = useCallback(() => {
    setCountdown((prevCountdown) => {
      if (prevCountdown <= 1) {
        setIsNextButtonDisabled(true);
        return 0;
      }
      return prevCountdown - 1;
    });
  }, []);

  useEffect(() => {
    if (currentContentIndex < contents.length) {
      setStartTime(Date.now());

      const minReadTime = calculateMinReadTime(
        contents[currentContentIndex].content,
      );

      setCountdown(minReadTime);
      setCurrentTitle(CONTENTS.title.test[contents[currentContentIndex].type]);

      const timer = setInterval(updateCountdown, 1000);

      return () => {
        clearInterval(timer);
      };
    }

    return () => {};
  }, [currentContentIndex, contents, updateCountdown]);

  const handleNextContent = () => {
    const endTime = Date.now();
    const readingTime = (endTime - startTime) / 1000;

    setReadingTimes([
      ...readingTimes,
      { contentId: currentContentIndex, time: readingTime },
    ]);

    if (currentContentIndex < contents.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
      setIsNextButtonDisabled(false);
    } else {
      navigateNextPage("test");
    }
  };

  const progress = ((currentContentIndex + 1) / contents.length) * 100;

  const customButtonArea = (
    <div className="flex items-center justify-between w-4/5 m-auto mt-4 max-mobile:w-full">
      <p className="m-0 mt-auto text-base text-gray max-mobile:text-sm">
        {countdown > 0
          ? `다음 글까지 ${countdown}초 남았어요.`
          : "다음 버튼을 눌러주세요."}
      </p>
      <button
        onClick={handleNextContent}
        disabled={!isNextButtonDisabled}
        data-test="test-next-button"
        className={`px-4 py-2 text-white rounded-lg max-mobile:text-sm ${isNextButtonDisabled ? "bg-dark-gray hover:bg-black" : "bg-medium-gray"}`}
      >
        다음
      </button>
    </div>
  );

  return (
    <Service
      title={currentTitle}
      onCloseButtonClick={() => navigate("/service/warning")}
      onNextButtonClick={handleNextContent}
      isDisabledButton={!isNextButtonDisabled}
      customButtonArea={customButtonArea}
    >
      <div className="w-full mb-4">
        <div className="w-4/5 h-2 m-auto rounded-full bg-medium-gray max-mobile:w-full">
          <div
            className="h-2 bg-black rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="w-4/5 m-auto mt-2 text-base text-left text-gray max-mobile:w-full max-mobile:text-sm">
          진행 상황: {currentContentIndex + 1} / {contents.length}
        </p>
      </div>
      <div className="w-4/5 m-auto mt-4 mb-4 overflow-y-auto text-lg leading-7 prose prose-lg text-left whitespace-pre-line h-76 max-w-none max-mobile:w-full max-mobile:text-sm max-mobile:leading-6 mobile-content">
        {contents[currentContentIndex] &&
          renderContent(contents[currentContentIndex])}
      </div>
    </Service>
  );
}

export default TestService;

TestService.propTypes = {
  navigateNextPage: PropTypes.func.isRequired,
};
