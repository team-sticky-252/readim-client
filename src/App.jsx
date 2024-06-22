import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import CardContainer from "./components/Card/CardContainer";
import ToastContainer from "./components/Toast/ToastContainer";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalReadingTimeMs = location.state?.totalReadingTimeMs;

  useEffect(() => {
    const storedWpm = window.localStorage.getItem("wpm");

    const DEFAULT_WPM = 202;
    const ARTICLE_WORD_COUNT = 203;
    const MIN_READING_TIME_MS = 25000;
    const MAX_READING_TIME_MS = 145000;

    if (!storedWpm) {
      window.localStorage.setItem("wpm", DEFAULT_WPM);
      navigate("/modal/welcome");

      return;
    }

    if (
      totalReadingTimeMs &&
      totalReadingTimeMs >= MIN_READING_TIME_MS &&
      totalReadingTimeMs <= MAX_READING_TIME_MS
    ) {
      const wpm = Math.floor(
        (ARTICLE_WORD_COUNT / totalReadingTimeMs) * 60 * 1000,
      );
      window.localStorage.setItem("wpm", wpm);
    } else {
      window.localStorage.setItem("wpm", storedWpm);
    }
  }, [totalReadingTimeMs, window.localStorage.getItem("wpm")]);

  const [messageList, setMessageList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [prevArticleDataList, setPrevArticleDataList] = useState([]);

  useEffect(() => {
    const storedURLs = JSON.parse(window.localStorage.getItem("URLs"));

    if (storedURLs) {
      setPrevArticleDataList(storedURLs);
    }
  }, []);

  return (
    <>
      <HeaderContainer
        prevArticleDataList={prevArticleDataList}
        setPrevArticleDataList={setPrevArticleDataList}
        setMessageList={setMessageList}
        setIsDeleteMode={setIsDeleteMode}
      />
      <CardContainer isDeleteMode={isDeleteMode} />
      <ToastContainer messageList={messageList} />
      <Outlet />
    </>
  );
}

export default App;
