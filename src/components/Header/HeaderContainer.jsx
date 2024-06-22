import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import InfoTextContainer from "./InfoTextContainer";
import OptionContainer from "./OptionContainer";
import UrlInputContainer from "./UrlInputContainer";

function HeaderContainer({
  prevArticleDataList,
  setPrevArticleDataList,
  setMessageList,
  setIsDeleteMode,
}) {
  const [totalReadTime, setTotalReadTime] = useState(0);

  useEffect(() => {
    if (prevArticleDataList && prevArticleDataList.length > 0) {
      let readTime = 0;
      prevArticleDataList.forEach((articleData) => {
        readTime += Number(articleData?.data?.readingTime);
      });
      setTotalReadTime(readTime);
    }
  }, [prevArticleDataList]);

  return (
    <header className="grid w-full text-center text-centerborder-solid grid-row-3">
      <OptionContainer setIsDeleteMode={setIsDeleteMode} />
      <InfoTextContainer totalReadTime={totalReadTime} />
      <UrlInputContainer
        prevArticleDataList={prevArticleDataList}
        setPrevArticleDataList={setPrevArticleDataList}
        setMessageList={setMessageList}
      />
    </header>
  );
}

export default HeaderContainer;

HeaderContainer.propTypes = {
  prevArticleDataList: PropTypes.arrayOf(PropTypes.object.isRequired)
    .isRequired,
  setPrevArticleDataList: PropTypes.func.isRequired,
  setMessageList: PropTypes.func.isRequired,
  setIsDeleteMode: PropTypes.func.isRequired,
};
