function SummaryMessage({ children }) {
  return (
    <div className="px-5 py-3 mt-2 text-base font-normal text-white break-all max-w-96 rounded-xl bg-pan-left bg-gradient-to-r from-pastel-purple via-blush-pink to-sunset-orange">
      {children}
    </div>
  );
}

export default SummaryMessage;
