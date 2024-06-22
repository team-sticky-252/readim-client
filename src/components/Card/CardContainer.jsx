import PropTypes from "prop-types";

import Card from "./Card";
import articles from "../../utils/URLs.json";

function CardContainer({ isDeleteMode }) {
  return (
    <main className="grid min-w-[40rem] justify-center grid-cols-10 gap-6 bg-fixed bg-right-bottom bg-no-repeat justify-items-center bg-default mx-80">
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
