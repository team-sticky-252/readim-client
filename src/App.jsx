import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import CardContainer from "./components/Card/CardContainer";
import ToastContainer from "./components/Toast/ToastContainer";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome";
import SummaryContainer from "./components/Summary/SummaryContainer";

function App() {
  const [firstClickTimeMs, setFirstClickTimeMs] = useState(0);
  const [clickTimeDifferenceMs, setClickTimeDifferenceMs] = useState(0);
  const [messageList, setMessageList] = useState([]);
  const [articleDataList, setArticleDataList] = useState([]);
  const [articleSummaryData, setArticleSummaryData] = useState({
    favicon: "",
    domain: "",
    articleTitle: "",
    readingTime: 0,
    mainContent: "",
    url: "",
  });

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

  useEffect(() => {
    const storedURLs = JSON.parse(window.localStorage.getItem("URLs"));

    if (storedURLs) {
      setArticleDataList(storedURLs);
    }
  }, []);

  const deleteArticle = (id) => {
    const filteredArticleDataList = articleDataList.filter(
      (article) => article.id !== id,
    );

    window.localStorage.setItem(
      "URLs",
      JSON.stringify(filteredArticleDataList),
    );

    setArticleDataList(filteredArticleDataList);
  };

  const deleteMessage = (id) => {
    const filteredMessageList = messageList.filter(
      (message) => message.id !== id,
    );

    setMessageList(filteredMessageList);
  };

  const deleteAllMessages = () => {
    setMessageList([]);
  };

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen">
      <div className="flex justify-center h-auto min-h-full mb-auto">
        <div className="w-216">
          {articleDataList.length === 0 && <Welcome />}
          <SummaryContainer
            key={articleSummaryData?.url}
            articleSummaryData={articleSummaryData}
            setArticleSummaryData={setArticleSummaryData}
          />
          <HeaderContainer
            articleDataList={articleDataList}
            setArticleDataList={setArticleDataList}
            setMessageList={setMessageList}
          />
          <CardContainer
            articleDataList={articleDataList}
            setArticleSummaryData={setArticleSummaryData}
            deleteArticle={deleteArticle}
          />
          <ToastContainer
            messageList={messageList}
            deleteMessage={deleteMessage}
            deleteAllMessages={deleteAllMessages}
          />
          <Outlet
            context={
              ([firstClickTimeMs, setFirstClickTimeMs],
              [clickTimeDifferenceMs, setClickTimeDifferenceMs])
            }
          />
        </div>
      </div>
      <Footer />
      <div className="absolute w-full h-20 bg-gradient-to-b from-white -z-10"></div>
    </div>
  );
}

export default App;
