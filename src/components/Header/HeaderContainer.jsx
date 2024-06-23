import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import InfoTextContainer from "./InfoTextContainer";
import OptionContainer from "./OptionContainer";
import UrlInputContainer from "./UrlInputContainer";

function HeaderContainer({
  articleDataList,
  setArticleDataList,
  setMessageList,
  setIsDeleteMode,
}) {
  const [totalReadTime, setTotalReadTime] = useState(0);

  useEffect(() => {
    if (articleDataList && articleDataList.length > 0) {
      let readTime = 0;

      articleDataList.forEach((articleData) => {
        readTime += Number(articleData?.data?.readingTime);
      });

      setTotalReadTime(readTime);
    }
  }, [articleDataList]);

  return (
    <header className="grid w-full text-center text-centerborder-solid grid-row-3">
      <OptionContainer setIsDeleteMode={setIsDeleteMode} />
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
  articleDataList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  setArticleDataList: PropTypes.func.isRequired,
  setMessageList: PropTypes.func.isRequired,
  setIsDeleteMode: PropTypes.func.isRequired,
};
