import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { SiOpenai } from "react-icons/si";
import PropTypes from "prop-types";

import GradientPatchCheckIcon from "../shared/GradientPatchCheckIcon";
import ReadingTime from "./ReadingTime";
import IconButton from "../shared/Button/IconButton";

function Card({
  id,
  favicon = "/readimFavicon.png",
  domain,
  articleTitle,
  readingTime,
  mainContent,
  url,
  deleteArticle,
  setArticleSummaryData,
  isSummaryClosed,
  setIsSummaryClosed,
}) {
  const [isDeleted, setIsDeleted] = useState();

  const CERTIFICATED_SITE = [
    "mozilla.org",
    "react.dev",
    "github.com",
    "medium.com",
    "velog.io",
    "tistory.com",
  ];

  const isCertifiedSite = () => {
    return CERTIFICATED_SITE.some((site) => url.includes(site));
  };

  const handleClick = () => {
    setIsDeleted((prev) => !prev);
    setTimeout(() => {
      deleteArticle();
    }, 500);
  };

  const setArticleSummary = () => {
    setIsSummaryClosed(false);
    setArticleSummaryData({
      id,
      favicon,
      domain,
      articleTitle,
      readingTime,
      mainContent,
      url,
    });
  };

  const handleShowSummaryClick = () => {
    if (!isSummaryClosed) {
      setIsSummaryClosed(true);

      setTimeout(setArticleSummary, 500);
    }
    setArticleSummary();
  };

  return (
    <li
      className={`relative flex flex-col content-center w-48 list-none transition-all bg-white shadow-md ${isDeleted ? "animate-fade-out" : "animate-scale-in-center"} h-52 shadow-black/25 rounded-3xl group hover:scale-115`}
      data-test="test-articleCard"
    >
      <a
        href={url}
        target="_blank"
        className="relative h-full p-5"
        rel="noreferrer"
      >
        <div className="flex items-center">
          <img
            className="inline-block w-4 h-4"
            src={favicon}
            alt="favicon"
            data-test="test-articleCardFavicon"
          />
          <p className="text-[11px] w-4/5 truncate inline-block ml-1 font-medium">
            {domain}
          </p>
          {isCertifiedSite() && (
            <div className="absolute top-4 right-5">
              <GradientPatchCheckIcon />
            </div>
          )}
        </div>
        <ReadingTime readingTime={readingTime} />
        <p className="mt-6 mr-1 text-sm group-hover:pointed-title font-extralight title-ellipsis">
          {articleTitle}
        </p>
      </a>
      <button
        aria-label="openAI-summary"
        className="absolute p-1 bottom-4 right-4 text-gray hover:text-black hover:bg-medium-gray hover:rounded-lg"
        onClick={handleShowSummaryClick}
      >
        <SiOpenai />
      </button>
      <IconButton
        className="hidden group-hover:block"
        onClick={handleClick}
        title="카드 삭제"
      >
        <FiMinus color="gray" strokeWidth={4} />
      </IconButton>
    </li>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.string.isRequired,
  favicon: PropTypes.string,
  domain: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  mainContent: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  setArticleSummaryData: PropTypes.func.isRequired,
};
