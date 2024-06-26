import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function OptionButton() {
  const navigate = useNavigate();
  return (
    <button
      className="fixed p-1 cursor-pointer peer top-5 right-5 hover:bg-medium-gray hover:rounded-lg"
      aria-label="open options"
      type="button"
      onClick={() => navigate("/modal/guide")}
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
