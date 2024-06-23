import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import CardContainer from "./components/Card/CardContainer";
import ToastContainer from "./components/Toast/ToastContainer";

function App() {
  const [firstClickTimeMs, setFirstClickTimeMs] = useState(0);
  const [clickTimeDifferenceMs, setClickTimeDifferenceMs] = useState(0);
  const navigate = useNavigate();

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
      clickTimeDifferenceMs &&
      clickTimeDifferenceMs >= MIN_READING_TIME_MS &&
      clickTimeDifferenceMs <= MAX_READING_TIME_MS
    ) {
      const wpm = Math.floor(
        (ARTICLE_WORD_COUNT / clickTimeDifferenceMs) * 60 * 1000,
      );
      window.localStorage.setItem("wpm", wpm);
    } else {
      window.localStorage.setItem("wpm", storedWpm);
    }
  }, [clickTimeDifferenceMs, window.localStorage.getItem("wpm")]);

  const [messageList, setMessageList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [articleDataList, setArticleDataList] = useState([]);

  useEffect(() => {
    const storedURLs = JSON.parse(window.localStorage.getItem("URLs"));

    if (storedURLs) {
      setArticleDataList(storedURLs);
    }
  }, []);

  return (
    <>
      <HeaderContainer
        articleDataList={articleDataList}
        setArticleDataList={setArticleDataList}
        setMessageList={setMessageList}
        setIsDeleteMode={setIsDeleteMode}
      />
      <CardContainer isDeleteMode={isDeleteMode} />
      <ToastContainer messageList={messageList} />
      <Outlet
        context={
          ([firstClickTimeMs, setFirstClickTimeMs],
          [clickTimeDifferenceMs, setClickTimeDifferenceMs])
        }
      />
    </>
  );
}

export default App;
