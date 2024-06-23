import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GoX } from "react-icons/go";

import CONTENTS from "../../utils/ModalContents";
import { allowScroll, preventScroll } from "../../utils/scrollUtils";

function Modal({
  firstClickTimeMs,
  setFirstClickTimeMs,
  setClickTimeDifferenceMs,
}) {
  const [readingTimeMs, setReadingTimeMs] = useState(0);
  const [textAreaElement, setTextAreaElement] = useState(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const testTextAreaRef = useRef(null);
  const navigate = useNavigate();
  const { modalId: statement } = useParams();

  const modalTitle = CONTENTS.title[statement];
  const modalButton = CONTENTS.button[statement];

  useEffect(() => {
    const storedReadingTimeMs = window.localStorage.getItem("wpm");

    if (storedReadingTimeMs) {
      setReadingTimeMs(storedReadingTimeMs);
    }
  }, [window.localStorage.getItem("wpm")]);

  const updateScroll = () => {
    const bottomScrollPosition =
      textAreaElement.scrollHeight - textAreaElement.clientHeight;
    const currentScrollPosition = textAreaElement.scrollTop;
    const threshold = 1;

    if (Math.abs(bottomScrollPosition - currentScrollPosition) <= threshold) {
      setIsScrolledToBottom(true);
    }
  };

  useEffect(() => {
    if (textAreaElement) {
      textAreaElement.addEventListener("scroll", updateScroll);
    }

    return () => {
      if (textAreaElement) {
        textAreaElement.removeEventListener("scroll", updateScroll);
      }
    };
  }, [textAreaElement]);

  useEffect(() => {
    const prevScrollY = preventScroll();

    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  const navigateButton = () => {
    switch (statement) {
      case "welcome":
        navigate("/modal/guide");
        break;
      case "guide": {
        setFirstClickTimeMs(new Date().getTime());
        navigate("/modal/test");
        break;
      }
      case "test": {
        setClickTimeDifferenceMs(new Date().getTime() - firstClickTimeMs);
        navigate("/");
        break;
      }
      case "warning":
        navigate("/modal/guide");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="p-10 bg-white shadow-md w-200 h-fit shadow-black/25 rounded-3xl">
      <button
        onClick={() =>
          statement !== "warning" ? navigate("/modal/warning") : navigate("/")
        }
        className="absolute rounded-md hover:bg-medium-gray right-5 top-5"
        aria-label="closeButton"
      >
        <GoX color="#AAAAAA" size={30} />
      </button>
      <h1 className="relative text-[2.5rem] font-semibold">{modalTitle}</h1>
      {statement !== "test" ? (
        <div className="h-40 mb-4 overflow-y-scroll leading-7 whitespace-pre-line max-w-none">
          <p className="mt-3 whitespace-pre-line">
            {CONTENTS.message[statement]}
          </p>
        </div>
      ) : (
        <div
          className="pr-4 mt-4 mb-4 overflow-y-scroll text-base leading-7 prose prose-lg whitespace-pre-line modal-textarea-shadow-inner h-72 max-w-none"
          ref={(ref) => {
            testTextAreaRef.current = ref;
            setTextAreaElement(testTextAreaRef.current);
          }}
        >
          {CONTENTS.message[statement]}
        </div>
      )}
      <div className="w-full text-right">
        <button
          onClick={navigateButton}
          disabled={statement === "test" ? !isScrolledToBottom : false}
          className={
            statement === "test" && !isScrolledToBottom
              ? "disabled-modal-button"
              : "abled-modal-button"
          }
        >
          {modalButton}
        </button>
      </div>
    </div>
  );
}

export default Modal;
