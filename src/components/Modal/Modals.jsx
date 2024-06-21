import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GoX } from "react-icons/go";

import CONTENTS from "../../utils/ModalContents";

function Modals() {
  const [readingTimeMs, setReadingTimeMs] = useState();
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const testTextAreaRef = useRef(null);
  const navigate = useNavigate();
  const { modalId: statement } = useParams();

  const modalTitle = CONTENTS.title[statement];
  const modalButton = CONTENTS.button[statement];

  let startReadingTimeMs = 0;
  let finishReadingTimeMs = 0;

  useEffect(() => {
    setReadingTimeMs(window.localStorage.getItem("wpm"));
  }, [window.localStorage.getItem("wpm")]);

  const updateScroll = () => {
    const bottomScrollPosition =
      testTextAreaRef.current.scrollHeight -
      testTextAreaRef.current.clientHeight;
    const currentScrollPosition = testTextAreaRef.current.scrollTop;

    if (bottomScrollPosition === currentScrollPosition) {
      setIsScrolledToBottom(true);
    }
  };

  useEffect(() => {
    if (testTextAreaRef.current) {
      testTextAreaRef.current.addEventListener("scroll", updateScroll);
    }

    return () => {
      if (testTextAreaRef.current) {
        testTextAreaRef.current.removeEventListener("scroll", updateScroll);
      }
    };
  }, [testTextAreaRef.current]);

  const navigateButton = () => {
    switch (statement) {
      case "welcome":
        navigate("/modal/guide");
        break;
      case "guide":
        navigate("/modal/test");
        break;
      case "test":
        finishReadingTimeMs = Date.now();
        navigate("/", {
          state: {
            totalReadingTimeMs: finishReadingTimeMs - startReadingTimeMs,
          },
        });
        break;
      case "warning":
        navigate("/modal/guide");
        break;
      default:
        navigate("/");
    }
  };

  if (statement === "test") {
    startReadingTimeMs = Date.now();
  }

  return (
    <div
      className={`w-[42rem] ${statement !== "test" ? "h-72" : "h-[30rem]"} bg-white shadow-md shadow-black/25 rounded-3xl`}
    >
      <button
        onClick={() =>
          statement !== "warning" ? navigate("/modal/warning") : navigate("/")
        }
        className="absolute rounded-md hover:bg-medium-gray right-5 top-5"
        aria-label="closeButton"
      >
        <GoX color="#AAAAAA" size={30} />
      </button>
      <h1 className="w-11/12 p-3.5 relative text-[2.5rem] font-semibold left-5 top-4">
        {modalTitle}
      </h1>
      {statement !== "test" ? (
        <div className="h-40 px-8 mb-4 overflow-y-scroll whitespace-pre-line max-w-none">
          <p className="mt-3 whitespace-pre-line">
            {CONTENTS.message[statement]}
          </p>
        </div>
      ) : (
        <div
          className="px-8 mb-4 overflow-y-scroll prose prose-lg whitespace-pre-line h-72 max-w-none"
          ref={testTextAreaRef}
        >
          {CONTENTS.message[statement]}
        </div>
      )}
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
  );
}

export default Modals;
