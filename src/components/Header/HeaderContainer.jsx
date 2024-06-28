import PropTypes from "prop-types";

import InfoTextContainer from "./InfoTextContainer";
import OptionContainer from "./OptionContainer";
import UrlInputContainer from "./UrlInputContainer";

function HeaderContainer({
  articleDataList,
  setArticleDataList,
  setMessageList,
}) {
  const totalReadTime = articleDataList.reduce((acc, articleData) => {
    return acc + articleData.readingTime;
  }, 0);

  return (
    <header className="grid w-full text-center text-centerborder-solid grid-row-3">
      <OptionContainer />
      <InfoTextContainer totalReadTime={totalReadTime} />
      <UrlInputContainer
        articleDataList={articleDataList}
        setArticleDataList={setArticleDataList}
        setMessageList={setMessageList}
      />
    </header>
  );
}

export default HeaderContainer;

HeaderContainer.propTypes = {
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
  setArticleDataList: PropTypes.func.isRequired,
  setMessageList: PropTypes.func.isRequired,
};
