import { useEffect, useRef, useState } from "react";
import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const occuredError = useRouteError();
  const messageRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageReadingTime, setErrorMessageReadingTime] = useState(0);

  useEffect(() => {
    if (messageRef.current) {
      const message = messageRef.current.innerText;
      const wpm = localStorage.getItem("wpm") || 202;

      setErrorMessage(message);

      const readingTime = errorMessage.split(" ").length / (wpm / 60);

      setErrorMessageReadingTime(Math.round(readingTime));
    }
  }, [errorMessage, messageRef]);

  return (
    <div className="flex flex-col items-center mt-10 text-center">
      <h1 className="m-10 text-4xl font-normal leading-tight text-left whitespace-pre-line">
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pastel-purple via-blush-pink to-sunset-orange">
          Readim
        </span>
        에 존재하지 않는 페이지 입니다!
      </h1>
      <div className="rounded-lg bg-zinc-700/20 w-fit">
        <h2
          className="m-10 text-2xl text-left whitespace-pre-line"
          ref={messageRef}
        >
          {`${occuredError.status} ${occuredError.statusText || occuredError.message}
        ${occuredError.data}`}
        </h2>
      </div>
      <div className="relative mt-10 font-medium text-left">
        {errorMessageReadingTime > 0 && (
          <p className="mt-3 text-xl">
            <span className="text-2xl font-semibold">
              {errorMessageReadingTime}초
            </span>
            만에 에러를 확인하셨겠네요!
          </p>
        )}
        <p className="mt-3 text-xl">
          이제{" "}
          <Link
            to="/"
            className="mt-3 text-xl underline hover:text-transparent bg-clip-text bg-gradient-to-r from-pastel-purple via-blush-pink to-sunset-orange"
          >
            메인 페이지로 이동
          </Link>
          하실까요?
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
