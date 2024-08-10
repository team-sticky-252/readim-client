import PropTypes from "prop-types";

import Card from "./Card";

function CardContainer({
  articleDataList,
  deleteArticle,
  setArticleSummaryData,
  isSummaryClosed,
  setIsSummaryClosed,
}) {
  const mobileResponsiveStyle =
    "max-mobile:grid-cols-2 w-10/12 min-w-0 gap-y-2 gap-x-[3dvw] pb-10 m-auto";

  return (
    <main
      className={`grid justify-center grid-cols-4 gap-5 bg-fixed bg-right-bottom bg-no-repeat min-w-160 justify-items-center ${mobileResponsiveStyle}`}
      data-test="test-cardContainer"
    >
      {articleDataList.map((article) => (
        <Card
          key={article.id}
          id={article.id}
          favicon={article.faviconUrl}
          domain={article.siteName}
          articleTitle={article.title}
          readingTime={article.readingTime}
          mainContent={article.mainContent}
          url={article.url}
          deleteArticle={() => deleteArticle(article.id)}
          setArticleSummaryData={setArticleSummaryData}
          isSummaryClosed={isSummaryClosed}
          setIsSummaryClosed={setIsSummaryClosed}
        />
      ))}
    </main>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  articleDataList: PropTypes.arrayOf(
    PropTypes.shape({
      createDate: PropTypes.string.isRequired,
      readingTime: PropTypes.number.isRequired,
      mainContent: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      siteName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      faviconUrl: PropTypes.string,
    }),
  ).isRequired,
  deleteArticle: PropTypes.func.isRequired,
  setArticleSummaryData: PropTypes.func.isRequired,
  isSummaryClosed: PropTypes.bool.isRequired,
  setIsSummaryClosed: PropTypes.func.isRequired,
};
