import Summary from "./Summary";

function SummaryContainer({ articleSummaryData, setArticleSummaryData }) {
  return (
    <aside className="fixed z-50 flex -translate-y-1/2 top-1/2 h-100vh left-7">
      {articleSummaryData?.articleTitle && (
        <Summary
          setArticleSummaryData={setArticleSummaryData}
          articleSummaryData={articleSummaryData}
        />
      )}
    </aside>
  );
}

export default SummaryContainer;
