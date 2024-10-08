import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ImSpinner3 } from "react-icons/im";
import { BsArrowReturnLeft } from "react-icons/bs";

import { handleSingleURL, handleResizeHeight } from "../../utils/urlUtils";

function UrlInputContainer({
  articleDataList,
  setArticleDataList,
  setMessageList,
}) {
  const [isLoading, setIsLoading] = useState(false);
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

    if (event.keyCode === 13 || event.currentTarget.id === "requestButton") {
      setIsLoading(true);
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

      const requests = inputValues.map((input) =>
        handleSingleURL(input, articleDataList, setMessageList),
      );
      const results = await Promise.allSettled(requests);

      results.forEach((result) => {
        if (result.status === "fulfilled") {
          handleSingleResult(result.value);
        }
      });

      setIsLoading(false);
      textareaRef.current.value = "";
      handleResizeHeight(textareaRef);
    }
  };

  return (
    <div
      className={`flex relative items-center justify-center m-auto mx-auto bottom-4 ${isLoading ? "bg-[#fafafa]" : "bg-white"} border shadow-md mb-14 border-light-gray w-136 max-mobile:w-[96%] max-mobile:mb-6 rounded-xl`}
    >
      <textarea
        ref={textareaRef}
        rows={1}
        onChange={() => handleResizeHeight(textareaRef)}
        onKeyDown={handleURLInput}
        onPaste={handleURLInput}
        className="w-full my-3 ml-5 text-base font-thin outline-none resize-none"
        placeholder="URL을 입력해 주세요."
        data-test="test-inputWindow"
        disabled={isLoading}
      />
      <button
        id="requestButton"
        className={`h-8 m-2 rounded group ${!isLoading && "hover:bg-zinc-100"}`}
        aria-label="request url"
        title="request button"
        onClick={handleURLInput}
      >
        {!isLoading && (
          <BsArrowReturnLeft className="w-8 text-zinc-400 group-hover:text-gray" />
        )}
        {isLoading && (
          <ImSpinner3 size={18} className="w-8 animate-spin text-gray" />
        )}
      </button>
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
