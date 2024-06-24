import PropTypes from "prop-types";

import { useState } from "react";
import ToastMessage from "./ToastMessage";
import TextButton from "../shared/Button/TextButton";

function ToastContainer({ messageList, deleteMessage, deleteAllMessages }) {
  const [containerFadeAnimation, setContainerFadeAnimation] = useState("");

  const handleDeleteAllMessageClick = () => {
    setContainerFadeAnimation("animate-fade-out-bottom");

    const timerId = setTimeout(() => {
      deleteAllMessages();
      setContainerFadeAnimation("");
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };
  };

  return (
    <aside
      className={`toast-scroll-container fixed p-3 max-h-screen-margin-24 bottom-5 right-5 w-88 ${containerFadeAnimation}`}
    >
      {messageList.length !== 0 && (
        <div className="h-6">
          <TextButton onClick={handleDeleteAllMessageClick}>
            <span className="text-slate-700">모두 지우기</span>
          </TextButton>
        </div>
      )}
      <ul className="flex flex-col-reverse items-center whitespace-pre-wrap flex-nowrap">
        {messageList.map(({ id, message, link }) => (
          <ToastMessage
            key={id}
            message={message}
            link={link}
            deleteMessage={() => deleteMessage(id)}
          />
        ))}
      </ul>
    </aside>
  );
}

export default ToastContainer;

ToastContainer.propTypes = {
  messageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
  deleteMessage: PropTypes.func.isRequired,
  deleteAllMessages: PropTypes.func.isRequired,
};
