import SummaryMessage from "./SummaryMessage";

function SummarySkeleton() {
  return (
    <SummaryMessage>
      <div className="my-2 space-y-4 animate-pulse">
        <div className="w-3/4 h-4 my-1 opacity-50 rounded-xl bg-light-gray"></div>
        <div className="w-1/2 h-4 my-1 opacity-50 rounded-xl bg-light-gray"></div>
        <div className="w-full h-4 my-1 opacity-50 rounded-xl bg-light-gray"></div>
      </div>
    </SummaryMessage>
  );
}

export default SummarySkeleton;
