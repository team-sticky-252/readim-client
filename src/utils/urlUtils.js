import ERROR_MESSAGE from "./errorMessage";

export const requestURL = async (inputValue, option = {}) => {
  const BASE_URL = "http://localhost:3000";
  const requestParam = {
    url: inputValue,
    wpm: Number(window.localStorage.getItem("wpm")),
  };
  const query = new URLSearchParams(requestParam).toString();
  const path = `/articleSummary?${query}`;

  const response = await fetch(BASE_URL + path, option);
  const articleDatas = await response.json();

  return articleDatas;
};

export const validateUrl = (inputValue, articleDataList, link = null) => {
  if (inputValue.trim() === "") {
    return {
      id: crypto.randomUUID(),
      icon: ERROR_MESSAGE.BLANK.icon,
      messages: ERROR_MESSAGE.BLANK.messages,
      link,
    };
  }
  if (!inputValue.includes("http")) {
    return {
      id: crypto.randomUUID(),
      icon: ERROR_MESSAGE.NOT_VALID_URL.icon,
      messages: ERROR_MESSAGE.NOT_VALID_URL.messages,
      link,
    };
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
    return {
      id: crypto.randomUUID(),
      icon: ERROR_MESSAGE.DUPLICATE_URL.icon,
      messages: ERROR_MESSAGE.DUPLICATE_URL.messages,
      link,
    };
  }

  if (articleDataList && (articleDataList.length + 1) % 30 === 0) {
    return {
      id: crypto.randomUUID(),
      icon: "📚",
      message: `저장한 아티클이 ${articleDataList.length + 1}개가 넘었어요.`,
      link,
    };
  }

  return null;
};

export const handleSingleURL = async (url, articleDataList, setMessageList) => {
  const isValidResult = validateUrl(url, articleDataList, url);

  if (isValidResult) {
    const toastMessage = isValidResult;

    setMessageList((prev) => [...prev, toastMessage]);

    return null;
  }

  const controller = new AbortController();
  const controlloerOption = {
    signal: controller.signal,
  };
  const fetchTimer = setTimeout(() => {
    controller.abort();
  }, 3000);

  try {
    const articleData = await requestURL(url, controlloerOption);
    const { statusCode } = articleData;

    if (statusCode !== 200) {
      setMessageList((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          icon: ERROR_MESSAGE[statusCode].icon,
          messages: ERROR_MESSAGE[statusCode].messages,
          link: url,
        },
      ]);
    } else {
      return articleData.data;
    }
  } catch (error) {
    if (error.name === "AbortError") {
      setMessageList((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          icon: ERROR_MESSAGE[408].icon,
          messages: ERROR_MESSAGE[408].messages,
          link: url,
        },
      ]);
    } else {
      throw error;
    }
  } finally {
    clearTimeout(fetchTimer);
  }

  return null;
};

export const handleResizeHeight = (textarea) => {
  textarea.current.style.height = "auto";

  const computedStyle = getComputedStyle(textarea.current);
  const lineHeight = parseInt(computedStyle.lineHeight, 10);
  const maxHeight = lineHeight * 3;
  const newHeight = Math.min(textarea.current.scrollHeight, maxHeight);

  textarea.current.style.height = `${newHeight}px`;
};
