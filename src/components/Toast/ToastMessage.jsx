import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import PropTypes from "prop-types";

import IconButton from "../shared/Button/IconButton";

function ToastMessage({ message, link, deleteMessage }) {
  const [animation, setAnimation] = useState("animate-slide-top");

  const handleDeleteMessageClick = () => {
    setAnimation("animate-fade-out-bottom");

    const timerId = setTimeout(deleteMessage, 500);

    return () => {
      clearTimeout(timerId);
    };
  };

  return (
    <li
      className={`box-border relative flex flex-col self-stretch justify-center w-full h-16 p-1 px-5 mt-4 shadow-md select-none rounded-xl bg-white/50 ${animation}`}
    >
      <p>{message}</p>
      {link && (
        <a
          href={link}
          className="underline truncate decoration-solid"
          target="_blank"
          rel="noreferrer"
        >
          {link}
        </a>
      )}
      <IconButton onClick={handleDeleteMessageClick} title="메시지 삭제">
        <FiMinus color="gray" strokeWidth={4} />
      </IconButton>
    </li>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string,
  deleteMessage: PropTypes.func.isRequired,
};
