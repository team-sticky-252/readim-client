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
        id: prev ? prev.length + 1 : 1,
        message: message[0].onlySpace,
        link,
      },
    ]);

    textarea.current.value = "";
    textarea.current.style.height = "auto";

    return false;
  }

  if (!inputValue.includes("http")) {
    setMessageList((prev) => {
      return [
        ...prev,
        {
          id: prev ? prev.length + 1 : 1,
          message: message[0].notValidURL,
          link,
        },
      ];
    });

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
            id: prev ? prev.length + 1 : 1,
            message: message[0].duplicateURL,
            link: inputValue,
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
          id: prev ? prev.length + 1 : 1,
          message: `📚 저장한 아티클이 ${articleDataList.length + 1}개가 넘었어요.`,
          link: null,
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
