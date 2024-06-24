import PropTypes from "prop-types";

import Card from "./Card";

function CardContainer({ isDeleteMode, articleDataList }) {
  return (
    <main className="grid justify-center grid-cols-4 gap-5 bg-fixed bg-right-bottom bg-no-repeat min-w-160 justify-items-center bg-default">
      {articleDataList.map((article) => (
        <Card
          key={article.createDate}
          favicon={article.faviconUrl}
          domain={article.siteName}
          articleTitle={article.title}
          readingTime={article.readingTime}
          isDeleteMode={isDeleteMode}
        />
      ))}
    </main>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  isDeleteMode: PropTypes.bool.isRequired,
  articleDataList: PropTypes.arrayOf(
    PropTypes.shape({
      createDate: PropTypes.string.isRequired,
      readingTime: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      siteName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      faviconUrl: PropTypes.string,
    }),
  ).isRequired,
};
