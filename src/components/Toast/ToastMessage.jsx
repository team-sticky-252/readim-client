import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import PropTypes from "prop-types";

import IconButton from "../shared/Button/IconButton";

function ToastMessage({ icon, messages, link, deleteMessage }) {
  const [messageFadeAnimation, setMessageFadeAnimation] =
    useState("animate-slide-top");

  const handleDeleteMessageClick = () => {
    setMessageFadeAnimation("animate-fade-out-bottom");

    setTimeout(deleteMessage, 500);
  };

  return (
    <li
      className={`group hover:scale-50 z-10 transition-all box-border relative flex items-start w-full px-5 pr-3 py-2.5 mt-4 shadow-md select-none rounded-xl bg-white/80 ${messageFadeAnimation}`}
    >
      <div>
        <span>{icon}</span>
      </div>
      <div className="px-3 w-72">
        {messages.map((message) => (
          <p key={message}>{message}</p>
        ))}
        {link && (
          <a
            href={link}
            className="block underline truncate decoration-solid"
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
        )}
      </div>
      <IconButton onClick={handleDeleteMessageClick} title="메시지 삭제">
        <FiMinus color="gray" strokeWidth={4} />
      </IconButton>
    </li>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  icon: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
  deleteMessage: PropTypes.func.isRequired,
};
