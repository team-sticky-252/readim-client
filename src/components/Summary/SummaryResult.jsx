import SummaryMessage from "./SummaryMessage";
import SummarySkeleton from "./SummarySkeleton";

function SummaryResult({ summaryText, summaryError }) {
  if (summaryError) {
    return <SummaryMessage>{summaryError}</SummaryMessage>;
  }

  if (summaryText) {
    return (
      <>
        <SummaryMessage>요청하신 아티클을 요약해드릴게요.</SummaryMessage>
        <SummaryMessage>{summaryText}</SummaryMessage>
      </>
    );
  }

  return <SummarySkeleton />;
}

export default SummaryResult;
