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

export const errorCase = (statusCode, message) => {
  switch (statusCode) {
    case 400:
      return message[0].errorCode400;
    case 512:
      return message[0].errorCode512;
    case 500:
      return message[0].errorCode500;
    default:
      return true;
  }
};

export const isValid = (
  inputValue,
  articleDataList,
  setMessageList,
  textarea,
  message,
  link = null,
) => {
  if (inputValue.trim() === "") {
    setMessageList((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        icon: ERROR_MESSAGE.BLANK.icon,
        messages: ERROR_MESSAGE.BLANK.messages,
        link,
      },
    ]);

    textarea.current.value = "";
    textarea.current.style.height = "auto";

    return false;
  }

  if (!inputValue.includes("http")) {
    setMessageList((prev) => [
      ...prev,
      {
        id: new Date().getTime(),
        icon: ERROR_MESSAGE.NOT_VALID_URL.icon,
        messages: ERROR_MESSAGE.NOT_VALID_URL.messages,
        link,
      },
    ]);

    textarea.current.value = "";
    textarea.current.style.height = "auto";

    return false;
  }

  if (articleDataList) {
    const isDuplicate = articleDataList.some((articleData) => {
      if (
        articleData.url.replace(/^https?:\/\/(www\.)?/, "") ===
        inputValue.replace(/^https?:\/\/(www\.)?/, "")
      ) {
        setMessageList((prev) => [
          ...prev,
          {
            id: new Date().getTime(),
            icon: ERROR_MESSAGE.DUPLICATE_URL.icon,
            messages: ERROR_MESSAGE.DUPLICATE_URL.messages,
            link,
          },
        ]);

        return true;
      }

      return false;
    });

    if (isDuplicate) {
      return false;
    }
  }

  if (articleDataList) {
    if ((articleDataList.length + 1) % 30 === 0) {
      setMessageList((prev) => [
        ...prev,
        {
          id: new Date().getTime(),
          icon: "📚",
          messages: `저장한 아티클이 ${articleDataList.length + 1}개가 넘었어요.`,
          link,
        },
      ]);
    }
  }

  return true;
};

export const handleResizeHeight = (textarea) => {
  textarea.current.style.height = "auto";

  const computedStyle = getComputedStyle(textarea.current);
  const lineHeight = parseInt(computedStyle.lineHeight, 10);
  const maxHeight = lineHeight * 3;
  const newHeight = Math.min(textarea.current.scrollHeight, maxHeight);

  textarea.current.style.height = `${newHeight}px`;
};
