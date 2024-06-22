import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import InfoTextContainer from "./InfoTextContainer";
import OptionContainer from "./OptionContainer";
import UrlInputContainer from "./UrlInputContainer";

function HeaderContainer({
  prevArticleDatas,
  setPrevArticleDatas,
  setMessageList,
  setIsDeleteMode,
}) {
  const [totalReadTime, setTotalReadTime] = useState(0);

  useEffect(() => {
    if (prevArticleDatas && prevArticleDatas.length > 0) {
      let readTime = 0;
      prevArticleDatas.forEach((articleData) => {
        readTime += Number(articleData?.data?.readingTime);
      });
      setTotalReadTime(readTime);
    }
  }, [prevArticleDatas]);

  return (
    <header className="grid w-full text-center text-centerborder-solid grid-row-3">
      <OptionContainer setIsDeleteMode={setIsDeleteMode} />
      <InfoTextContainer totalReadTime={totalReadTime} />
      <UrlInputContainer
        prevArticleDatas={prevArticleDatas}
        setPrevArticleDatas={setPrevArticleDatas}
        setMessageList={setMessageList}
      />
    </header>
  );
}

export default HeaderContainer;

HeaderContainer.propTypes = {
  prevArticleDatas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  setPrevArticleDatas: PropTypes.func.isRequired,
  setMessageList: PropTypes.func.isRequired,
  setIsDeleteMode: PropTypes.func.isRequired,
};
