import codeHighlighter from "./HighlightCodeBlock";

export const DEFAULT_WPM = 202;
export const ARTICLE_WORD_COUNT = 202;
export const MIN_READING_TIME_MS = 25000;
export const MAX_READING_TIME_MS = 145000;

const MIN_READ_TIME_FACTOR = 0.5;

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

export const calculateMinReadTime = (content) => {
  const numOfWords = content.split(" ").length;
  const baseTime = (numOfWords / DEFAULT_WPM) * 60;

  return Math.max(Math.round(baseTime * MIN_READ_TIME_FACTOR), 2);
};

export const renderCodeTags = (str) => {
  const tags = str.split(/(<code>.*?<\/code>)/);

  return tags.map((part) => {
    if (part.startsWith("<code>") && part.endsWith("</code>")) {
      const codeContent = part.slice(6, -7);

      return (
        <code key={crypto.randomUUID()} className="code code-inline">
          {codeContent.replace(/&lt;/g, "<").replace(/&gt;/g, ">")}
        </code>
      );
    }

    return part.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  });
};

export const renderContent = (content) => {
  if (content.type === "code") {
    const highlightedCode = codeHighlighter({ code: content.content });

    if (highlightedCode === null) {
      return <p>코드를 표시할 수 없습니다.</p>;
    }

    return (
      <pre className="p-4 overflow-x-auto text-sm bg-gray-100 rounded-md">
        <code className="code-block">{highlightedCode}</code>
      </pre>
    );
  }

  return <p>{renderCodeTags(content.content)}</p>;
};
