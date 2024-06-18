function OptionPopUpButton({ text, position }) {
  return (
    <>
      {position === "top" && (
        <button
          type="button"
          className="h-8 bg-white rounded-t-lg hover:bg-[#E5E5E5]"
          onClick={() => {}}
        >
          {text}
        </button>
      )}
      {position === "bottom" && (
        <button
          type="button"
          className="h-8 bg-white rounded-b-lg hover:bg-[#E5E5E5]"
          onClick={() => {}}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default OptionPopUpButton;
