function SummaryMessage({ children }) {
  return (
    <div className="px-5 py-3 mt-2 text-white break-all ext-base font-extralight max-w-96 rounded-xl bg-pan-left bg-gradient-to-r from-primary via-blue-gray to-deep-blue">
      {children}
    </div>
  );
}

export default SummaryMessage;
