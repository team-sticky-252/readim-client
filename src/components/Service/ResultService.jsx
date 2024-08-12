import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import useLocalStorage from "../../hooks/useLocalStorage";

import Pie from "../shared/Chart/PieChart";
import Service from "../shared/Service/Service";

import {
  DEFAULT_WPM,
  ARTICLE_WORD_COUNT,
  MIN_READING_TIME_MS,
  MAX_READING_TIME_MS,
  getTestResultMessage,
} from "../../utils/readTimeTest";

function ResultService({ clickTimeDifferenceMs, navigateNextPage }) {
  const [wpmInStorage] = useLocalStorage("wpm", DEFAULT_WPM);
  const navigate = useNavigate();

  const wpm =
    clickTimeDifferenceMs > 0
      ? Math.floor((ARTICLE_WORD_COUNT / clickTimeDifferenceMs) * 60 * 1000)
      : wpmInStorage;
  const resultMessage = getTestResultMessage(wpm - DEFAULT_WPM);
  const totalReadingSeconds =
    Math.floor(clickTimeDifferenceMs / 1000) ||
    Math.round((ARTICLE_WORD_COUNT * 60) / wpm);

  useEffect(() => {
    if (clickTimeDifferenceMs === 0) return;

    if (
      clickTimeDifferenceMs < MIN_READING_TIME_MS ||
      clickTimeDifferenceMs > MAX_READING_TIME_MS
    ) {
      navigate("/");
    }
  }, [clickTimeDifferenceMs]);

  return (
    <Service
      onCloseButtonClick={navigateNextPage}
      onNextButtonClick={navigateNextPage}
      isDisabledButton={false}
    >
      <div className="flex flex-col items-center font-light text-center">
        <div className="mb-4 text-2xl whitespace-pre-line mt-14 max-mobile:text-lg max-mobile:mt-0">
          <p className="py-4">
            ⏱️ {ARTICLE_WORD_COUNT}개의 단어를 읽는데{" "}
            <span className="relative font-medium z-1 highlight">
              {totalReadingSeconds}초
            </span>
            가 걸렸어요.
          </p>
        </div>
        <Pie size={200} value={wpm} />
        <div className="mb-4 text-lg whitespace-pre-line mt-14 max-mobile:text-base max-mobile:mt-6">
          <p className="mb-1">{resultMessage}</p>
          <p>이 속도에 맞춰서 예상 읽기 시간을 제공해 드릴게요.</p>
          <p className="mt-6 text-sm text-neutral-400">
            wpm(words per minute): 1분에 읽는 단어 수입니다.
          </p>
        </div>
      </div>
    </Service>
  );
}

export default ResultService;

ResultService.propTypes = {
  clickTimeDifferenceMs: PropTypes.number.isRequired,
  navigateNextPage: PropTypes.func.isRequired,
};
