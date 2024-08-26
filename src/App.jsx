import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import CardContainer from "./components/Card/CardContainer";
import ToastContainer from "./components/Toast/ToastContainer";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome";
import SummaryContainer from "./components/Summary/SummaryContainer";

import { DEFAULT_WPM } from "./utils/readTimeTest";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [articleDataList, setArticleDataList] = useState([]);
  const [articleSummaryData, setArticleSummaryData] = useState({
    id: "",
    favicon: "",
    domain: "",
    articleTitle: "",
    readingTime: 0,
    mainContent: "",
    url: "",
  });
  const [isSummaryClosed, setIsSummaryClosed] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const storedWpm = window.localStorage.getItem("wpm");

    if (!storedWpm) {
      window.localStorage.setItem("wpm", DEFAULT_WPM);
      navigate("/service/welcome");
    }
  }, []);

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
    <div className="relative flex flex-col items-center justify-between min-h-screen overflow-x-hidden">
      <div className="flex justify-center h-auto min-h-full mb-auto">
        <div className="w-216 min-w-90 max-mobile:w-dvw max-mobile:flex max-mobile:flex-col max-mobile:justify-center max-mobile:p-5 max-mobile:pb-14">
          {articleDataList.length === 0 && <Welcome />}
          <SummaryContainer
            articleSummaryData={articleSummaryData}
            isSummaryClosed={isSummaryClosed}
            setIsSummaryClosed={setIsSummaryClosed}
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
            isSummaryClosed={isSummaryClosed}
            setIsSummaryClosed={setIsSummaryClosed}
          />
          <ToastContainer
            messageList={messageList}
            deleteMessage={deleteMessage}
            deleteAllMessages={deleteAllMessages}
          />
        </div>
      </div>
      <Footer />
      <div className="absolute w-full h-20 bg-gradient-to-b from-white -z-10"></div>
    </div>
  );
}

export default App;
