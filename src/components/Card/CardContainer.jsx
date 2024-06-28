import PropTypes from "prop-types";

import Card from "./Card";

function CardContainer({
  articleDataList,
  deleteArticle,
  setArticleSummaryData,
}) {
  return (
    <main className="grid justify-center grid-cols-4 gap-5 bg-fixed bg-right-bottom bg-no-repeat min-w-160 justify-items-center">
      {articleDataList.map((article) => (
        <Card
          key={article.id}
          favicon={article.faviconUrl}
          domain={article.siteName}
          articleTitle={article.title}
          readingTime={article.readingTime}
          mainContent={article.mainContent}
          url={article.url}
          deleteArticle={() => deleteArticle(article.id)}
          setArticleSummaryData={setArticleSummaryData}
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
};
