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
  prevArticleDatas,
  setPrevArticleDatas,
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
      .split(/\s+/)
      .filter((value) => !value.match(/(https?:\/\/[^\s]+)/g));
    const inputValues = [...urls, ...otherValues];

    if (event.keyCode === 13 || pasteValue) {
      const handleSingleURL = async (url) => {
        const articleDatas = await requestURL(url);
        const { statusCode } = articleDatas;
        const isValidResult = isValid(
          url,
          prevArticleDatas,
          setMessageList,
          textarea,
          message,
          articleDatas.data ? articleDatas.data.url : null,
        );

        if (!isValidResult) {
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
          return null;
        }

        articleDatas.createDate = new Date(
          new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
        ).toISOString();

        return articleDatas;
      };

      const promises = inputValues.map(handleSingleURL);
      const results = await Promise.all(promises);
      const validResults = results.filter((result) => result !== null);
      const updatedArticleDatas = prevArticleDatas
        ? [...prevArticleDatas, ...validResults]
        : validResults;

      window.localStorage.setItem("URLs", JSON.stringify(updatedArticleDatas));
      setPrevArticleDatas(updatedArticleDatas);

      textarea.current.value = "";
      textarea.current.style.height = "auto";
    }
  };

  return (
    <div className="border-[1px] border-light-gray flex items-center justify-center m-auto mx-auto bg-white shadow-md w-fit rounded-xl mb-10">
      <textarea
        ref={textarea}
        rows={1}
        onChange={() => handleResizeHeight(textarea)}
        onKeyDown={handleURLInput}
        onPaste={handleURLInput}
        className="m-3 mx-5 outline-none w-[35rem] font-thin text-base resize-none"
      />
    </div>
  );
}

UrlInputContainer.propTypes = {
  prevArticleDatas: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      createDate: PropTypes.string,
      statusCode: PropTypes.number,
    }),
  ).isRequired,
  setPrevArticleDatas: PropTypes.func.isRequired,
  setMessageList: PropTypes.func.isRequired,
};

export default UrlInputContainer;
