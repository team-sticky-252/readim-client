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
    const inputValue = textareaRef.current.value;
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

    if (event.keyCode === 13) {
      event.preventDefault();

      const handleSingleResult = (result) => {
        if (result !== null) {
          const existingData =
            JSON.parse(window.localStorage.getItem("URLs")) || [];
          const updatedArticleDataList = [result, ...existingData];

          window.localStorage.setItem(
            "URLs",
            JSON.stringify(updatedArticleDataList),
          );
          setArticleDataList(updatedArticleDataList);
        }
      };

      inputValues.forEach(async (input) => {
        const result = await handleSingleURL(
          input,
          articleDataList,
          setMessageList,
        );

        handleSingleResult(result);
      });

      textareaRef.current.value = "";
      handleResizeHeight(textareaRef);
    }
  };

  return (
    <div className="flex items-center justify-center m-auto mx-auto mt-4 bg-white border shadow-md mb-14 border-light-gray w-fit rounded-xl">
      <textarea
        ref={textareaRef}
        rows={1}
        onChange={() => handleResizeHeight(textareaRef)}
        onKeyDown={handleURLInput}
        onPaste={handleURLInput}
        className="m-3 mx-5 text-base font-thin outline-none resize-none w-118"
        placeholder="URL을 입력해 주세요."
        data-test="test-inputWindow"
      />
    </div>
  );
}

UrlInputContainer.propTypes = {
  articleDataList: PropTypes.arrayOf(
    PropTypes.shape({
      createDate: PropTypes.string.isRequired,
      readingTime: PropTypes.number.isRequired,
      mainContent: PropTypes.string.isRequired,
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
