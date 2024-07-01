import PropTypes from "prop-types";
import Summary from "./Summary";

function SummaryContainer({
  articleSummaryData = {
    id: "",
    favicon: "",
    domain: "",
    articleTitle: "",
    readingTime: 0,
    mainContent: "",
    url: "",
  },
  isSummaryClosed,
  setIsSummaryClosed,
}) {
  return (
    <div>
      {!isSummaryClosed && (
        <aside className="fixed z-50 flex -translate-y-1/2 top-1/2 h-100vh left-7">
          {articleSummaryData?.articleTitle && (
            <Summary
              articleSummaryData={articleSummaryData}
              setIsSummaryClosed={setIsSummaryClosed}
            />
          )}
        </aside>
      )}
    </div>
  );
}

export default SummaryContainer;

SummaryContainer.propTypes = {
  articleSummaryData: PropTypes.shape({
    favicon: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    articleTitle: PropTypes.string.isRequired,
    readingTime: PropTypes.number.isRequired,
    mainContent: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  isSummaryClosed: PropTypes.bool.isRequired,
  setIsSummaryClosed: PropTypes.func.isRequired,
};
