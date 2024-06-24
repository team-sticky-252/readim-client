import PropTypes from "prop-types";

import Card from "./Card";
import articles from "../../utils/URLs.json";

function CardContainer({ isDeleteMode }) {
  return (
    <main className="grid justify-center grid-cols-4 gap-5 bg-fixed bg-right-bottom bg-no-repeat min-w-160 justify-items-center bg-default">
      {articles.map((article) => (
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
};
