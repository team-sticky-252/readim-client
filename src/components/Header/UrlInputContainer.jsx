import { useRef } from "react";
import PropTypes from "prop-types";

import { handleSingleURL, handleResizeHeight } from "../../utils/urlUtils";

function UrlInputContainer({
  articleDataList,
  setArticleDataList,
  setMessageList,
}) {
  const textareaRef = useRef();

  const handleURLInput = async (event) => {
    let pasteValue = "";

    if (event.clipboardData) {
      pasteValue = event.clipboardData.getData("text");
    } else if (window.clipboardData) {
      pasteValue = window.clipboardData.getData("text");
    }

    const inputValue = pasteValue || textareaRef.current.value;
    const trimmedInputValue = inputValue.trim();
    const urls = trimmedInputValue.match(/(https?:\/\/[^\s]+)/g) || [];
    const otherValues = trimmedInputValue
      .split(/\n+/)
      .filter((value) => !value.match(/(https?:\/\/[^\s]+)/g));
    const inputValues = [...urls, ...otherValues];
    const numOfURL = inputValues.length;

    if (numOfURL > 30) {
      textareaRef.current.value = "";

      alert("URL 입력은 30개 이하로 해주세요");

      return;
    }

    if (event.keyCode === 13 || pasteValue) {
      event.preventDefault();
      textareaRef.current.value = "";
      handleResizeHeight(textareaRef);

      const promises = inputValues.map((input) =>
        handleSingleURL(input, articleDataList, setMessageList),
      );
      const results = await Promise.all(promises);
      const validResults = results.filter((result) => result !== null);
      const updatedArticleDataList = articleDataList
        ? [...articleDataList, ...validResults]
        : validResults;

      window.localStorage.setItem(
        "URLs",
        JSON.stringify(updatedArticleDataList),
      );

      setArticleDataList(updatedArticleDataList);
    }
  };

  return (
    <div className="flex items-center justify-center m-auto mx-auto mb-10 bg-white border shadow-md border-light-gray w-fit rounded-xl">
      <textarea
        ref={textareaRef}
        rows={1}
        onChange={() => handleResizeHeight(textareaRef)}
        onKeyDown={handleURLInput}
        onPaste={handleURLInput}
        className="m-3 mx-5 text-base font-thin outline-none resize-none w-140"
      />
    </div>
  );
}

UrlInputContainer.propTypes = {
  articleDataList: PropTypes.arrayOf(
    PropTypes.shape({
      createDate: PropTypes.string.isRequired,
      readingTime: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      siteName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      faviconUrl: PropTypes.string,
    }),
  ).isRequired,
  setArticleDataList: PropTypes.func.isRequired,
  setMessageList: PropTypes.func.isRequired,
};

export default UrlInputContainer;
