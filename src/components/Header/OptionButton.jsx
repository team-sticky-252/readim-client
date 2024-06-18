import { IoSettingsSharp } from "react-icons/io5";

function OptionButton() {
  return (
    <button
      className="fixed p-1 cursor-pointer top-5 right-5 hover:bg-[#E5E5E5] hover:rounded-lg"
      aria-label="open options"
      type="button"
    >
      <IoSettingsSharp
        color="white"
        size={22}
        filter="drop-shadow(1px 1px 2px rgb(0 0 0 / 0.25))"
      />
    </button>
  );
}

export default OptionButton;