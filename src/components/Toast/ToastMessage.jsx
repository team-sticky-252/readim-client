import { FiMinus } from "react-icons/fi";
import PropTypes from "prop-types";

import IconButton from "../shared/Button/IconButton";

function ToastMessage({ message, link }) {
  return (
    <li className="box-border relative flex flex-col self-stretch justify-center w-full h-16 p-1 px-5 mt-4 shadow-md select-none animate-slide-top rounded-xl bg-white/50">
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
      <IconButton onClick={() => {}} title="카드 삭제">
        <FiMinus color="gray" strokeWidth={4} />
      </IconButton>
    </li>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string,
};
