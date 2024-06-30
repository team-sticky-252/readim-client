export const DEFAULT_WPM = 202;
export const ARTICLE_WORD_COUNT = 203;
export const MIN_READING_TIME_MS = 25000;
export const MAX_READING_TIME_MS = 145000;

const TEST_RESULT_MESSAGE = {
  fast: "⚡️ 굉장히 빠른 읽기 속도를 가지셨네요.",
  slightlyFast: "⚡️ 빠른 읽기 속도를 가지셨네요.",
  normal: "대부분의 사용자와 비슷한 읽기 속도를 가지셨네요.",
  slightlySlow: "집중해서 읽으시는 편이시네요!",
  slow: "매우 주의깊게 읽으시는 편이시네요!",
};

export const getTestResultMessage = (differenceWPM) => {
  if (differenceWPM < -45) {
    return TEST_RESULT_MESSAGE.slow;
  }

  if (differenceWPM < -15) {
    return TEST_RESULT_MESSAGE.slightlySlow;
  }

  if (differenceWPM > 45) {
    return TEST_RESULT_MESSAGE.fast;
  }

  if (differenceWPM > 15) {
    return TEST_RESULT_MESSAGE.slightlyFast;
  }

  return TEST_RESULT_MESSAGE.normal;
};
