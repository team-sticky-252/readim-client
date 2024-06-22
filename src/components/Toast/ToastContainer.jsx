import PropTypes from "prop-types";

import ToastMessage from "./ToastMessage";
import TextButton from "../shared/Button/TextButton";

function ToastContainer({ messageList }) {
  return (
    <aside className="fixed p-3 overflow-x-hidden overflow-y-auto max-h-screen-margin-24 bottom-5 right-5 w-88">
      {messageList.length !== 0 && (
        <div className="h-6">
          <TextButton onClick={() => {}}>
            <span className="text-slate-700">모두 지우기</span>
          </TextButton>
        </div>
      )}
      <ul className="flex flex-col-reverse items-center whitespace-pre-wrap flex-nowrap">
        {messageList.map(({ id, message, link }) => (
          <ToastMessage key={id} message={message} link={link} />
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
};
