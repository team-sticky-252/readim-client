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
      className={`overflow-y-scroll fixed p-3 max-h-screen-margin-24 bottom-5 right-5 w-90 ${containerFadeAnimation}`}
    >
      {messageList.length > 0 && (
        <div className="relative flex justify-end h-6">
          <TextButton onClick={handleDeleteAllMessageClick}>
            <span className="text-slate-700">모두 지우기</span>
          </TextButton>
        </div>
      )}
      <ul className="flex flex-col-reverse items-center whitespace-pre-wrap flex-nowrap">
        {messageList.map(({ id, icon, messages, link }) => (
          <ToastMessage
            key={id}
            icon={icon}
            messages={messages}
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
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      messages: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
  deleteMessage: PropTypes.func.isRequired,
  deleteAllMessages: PropTypes.func.isRequired,
};
