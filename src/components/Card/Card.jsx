import { FiMinus } from "react-icons/fi";
import PropTypes from "prop-types";

import readimFavicon from "../../../public/readimFavicon.png";
import ReadingTime from "./ReadingTime";
import IconButton from "../shared/Button/IconButton";

function Card({
  favicon = "/readimFavicon.png",
  domain,
  articleTitle,
  readingTime,
  isDeleteMode,
}) {
  const articleFavicon = favicon || readimFavicon;

  return (
    <li className="relative flex flex-col content-center w-48 p-5 list-none transition-all bg-white shadow-md h-50 group hover:scale-115 shadow-black/25 rounded-3xl">
      <a
        href="https://www.google.com"
        target="_blank"
        className="relative"
        rel="noreferrer"
      >
        <div className="flex">
          <img
            className="inline-block w-4"
            src={articleFavicon}
            alt="favicon"
          />
          <p className="text-[11px] w-4/5 truncate inline-block ml-1 font-medium">
            {domain}
          </p>
        </div>
        <ReadingTime readingTime={readingTime} />
        <p className="mt-6 mr-1 text-sm leading-sung group-hover:pointed-title font-extralight title-ellipsis">
          {articleTitle}
        </p>
      </a>
      {isDeleteMode && (
        <IconButton onClick={() => {}} title="카드 삭제">
          <FiMinus color="gray" strokeWidth={4} />
        </IconButton>
      )}
    </li>
  );
}

export default Card;

Card.propTypes = {
  favicon: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  isDeleteMode: PropTypes.bool.isRequired,
};
