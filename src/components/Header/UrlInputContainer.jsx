import { useRef } from "react";
import PropTypes from "prop-types";

import message from "../../utils/message.json";
import {
  requestURL,
  errorCase,
  isValid,
  handleResizeHeight,
} from "../../utils/urlUtils";

function UrlInputContainer({
  prevArticleDataList,
  setPrevArticleDataList,
  setMessageList,
}) {
  const textarea = useRef();

  const handleURLInput = async (event) => {
    let pasteValue = "";

    if (event.clipboardData) {
      pasteValue = event.clipboardData.getData("text");
    } else if (window.clipboardData) {
      pasteValue = window.clipboardData.getData("text");
    }

    const inputValue = pasteValue || textarea.current.value;
    const trimmedInputValue = inputValue.trim();
    const urls = trimmedInputValue.match(/(https?:\/\/[^\s]+)/g) || [];
    const otherValues = trimmedInputValue
      .split(/\n+/)
      .filter((value) => !value.match(/(https?:\/\/[^\s]+)/g));
    const inputValues = [...urls, ...otherValues];
    const numOfURL = inputValues.length;

    if (numOfURL > 30) {
      textarea.current.value = "";
      textarea.current.style.height = "auto";

      alert("URL 입력은 30개 이하로 해주세요");

      return false;
    }

    if (event.keyCode === 13 || pasteValue) {
      const handleSingleURL = async (url) => {
        const articleDatas = await requestURL(url);
        const { statusCode } = articleDatas;
        const isValidResult = isValid(
          url,
          prevArticleDataList,
          setMessageList,
          textarea,
          message,
          articleDatas.data?.url,
        );

        if (!isValidResult) {
          textarea.current.value = "";
          textarea.current.style.height = "auto";

          return null;
        }

        if (statusCode !== 200) {
          setMessageList((prev) => [
            ...prev,
            {
              id: prev ? prev.length + 1 : 1,
              message: errorCase(statusCode, message),
              link: url || null,
            },
          ]);

          textarea.current.value = "";
          textarea.current.style.height = "auto";

          return null;
        }

        articleDatas.createDate = new Date().toISOString();

        return articleDatas;
      };

      const promises = inputValues.map(handleSingleURL);
      const results = await Promise.all(promises);
      const validResults = results.filter((result) => result !== null);
      const updatedArticleDataList = prevArticleDataList
        ? [...prevArticleDataList, ...validResults]
        : validResults;

      window.localStorage.setItem(
        "URLs",
        JSON.stringify(updatedArticleDataList),
      );
      setPrevArticleDataList(updatedArticleDataList);

      textarea.current.value = "";
      textarea.current.style.height = "auto";
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center m-auto mx-auto mb-10 bg-white border shadow-md border-light-gray w-fit rounded-xl">
      <textarea
        ref={textarea}
        rows={1}
        onChange={() => handleResizeHeight(textarea)}
        onKeyDown={handleURLInput}
        onPaste={handleURLInput}
        className="m-3 mx-5 text-base font-thin outline-none resize-none w-140"
      />
    </div>
  );
}

UrlInputContainer.propTypes = {
  prevArticleDataList: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      createDate: PropTypes.string,
      statusCode: PropTypes.number,
    }),
  ).isRequired,
  setPrevArticleDataList: PropTypes.func.isRequired,
  setMessageList: PropTypes.func.isRequired,
};

export default UrlInputContainer;
