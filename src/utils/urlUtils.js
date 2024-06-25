import ERROR_MESSAGE from "./errorMessage";

export const requestURL = async (inputValue) => {
  const BASE_URL = "http://localhost:3000";
  const requestParam = {
    url: inputValue,
    wpm: Number(window.localStorage.getItem("wpm")),
  };
  const query = new URLSearchParams(requestParam).toString();
  const path = `/articleSummary?${query}`;
  const response = await fetch(BASE_URL + path);
  const articleDatas = await response.json();

  return articleDatas;
};

export const isValid = (inputValue, articleDataList, link = null) => {
  let toastMessage;

  if (inputValue.trim() === "") {
    toastMessage = {
      id: new Date().getTime(),
      icon: ERROR_MESSAGE.BLANK.icon,
      messages: ERROR_MESSAGE.BLANK.messages,
      link,
    };

    return toastMessage;
  }

  if (!inputValue.includes("http")) {
    toastMessage = {
      id: new Date().getTime(),
      icon: ERROR_MESSAGE.NOT_VALID_URL.icon,
      messages: ERROR_MESSAGE.NOT_VALID_URL.messages,
      link,
    };

    return toastMessage;
  }

  if (
    articleDataList &&
    articleDataList.some((articleData) => {
      return (
        articleData.url.replace(/^https?:\/\/(www\.)?/, "") ===
        inputValue.replace(/^https?:\/\/(www\.)?/, "")
      );
    })
  ) {
    toastMessage = {
      id: new Date().getTime(),
      icon: ERROR_MESSAGE.DUPLICATE_URL.icon,
      messages: ERROR_MESSAGE.DUPLICATE_URL.messages,
      link,
    };

    return toastMessage;
  }

  if (articleDataList && (articleDataList.length + 1) % 30 === 0) {
    toastMessage = {
      id: new Date().getTime(),
      icon: "📚",
      message: `저장한 아티클이 ${articleDataList.length + 1}개가 넘었어요.`,
      link,
    };

    return toastMessage;
  }

  return false;
};

export const handleSingleURL = async (url, articleDataList, setMessageList) => {
  const isValidResult = isValid(url, articleDataList, url);

  if (isValidResult) {
    const toastMessage = isValidResult;

    setMessageList((prev) => [...prev, toastMessage]);

    return null;
  }

  const articleDatas = await requestURL(url);
  const { statusCode } = articleDatas;

  if (statusCode !== 200) {
    setMessageList((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        icon: ERROR_MESSAGE[statusCode].icon,
        messages: ERROR_MESSAGE[statusCode].messages,
        url,
      },
    ]);

    return null;
  }

  return articleDatas.data;
};

export const handleResizeHeight = (textarea) => {
  textarea.current.style.height = "auto";

  const computedStyle = getComputedStyle(textarea.current);
  const lineHeight = parseInt(computedStyle.lineHeight, 10);
  const maxHeight = lineHeight * 3;
  const newHeight = Math.min(textarea.current.scrollHeight, maxHeight);

  textarea.current.style.height = `${newHeight}px`;
};
