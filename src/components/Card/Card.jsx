import { FiMinus } from "react-icons/fi";
import PropTypes from "prop-types";

import ReadingTime from "./ReadingTime";
import IconButton from "../shared/Button/IconButton";

function Card({ favicon, domain, articleTitle, readingTime }) {
  return (
    <li className="relative content-center w-40 h-40 pl-5 list-none transition-all delay-75 bg-white shadow-md group hover:scale-125 shadow-black/25 rounded-3xl">
      <a
        href="https://www.google.com"
        target="_blank"
        className="relative -top-1"
        rel="noreferrer"
      >
        <div>
          <img
            className="inline-block w-4"
            src={favicon || "public/favicon.png"}
            alt="favicon"
          />
          <p className="text-[11px] inline-block ml-1 font-medium">{domain}</p>
        </div>
        <ReadingTime readingTime={readingTime} />
        <p className="mt-1 mr-5 group-hover:pointed-title font-extralight title-ellipsis">
          {articleTitle}
        </p>
      </a>
      <IconButton onClick={() => {}} title="카드 삭제">
        <FiMinus color="gray" strokeWidth={4} />
      </IconButton>
    </li>
  );
}

export default Card;

Card.propTypes = {
  favicon: PropTypes.string,
  domain: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
};
