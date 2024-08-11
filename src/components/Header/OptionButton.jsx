import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function OptionButton({ hasArticles }) {
  const navigate = useNavigate();
  return (
    <div className="real">
      <button
        className={`fixed z-10 p-1 cursor-pointer hover-text group peer top-5 right-5 hover:bg-medium-gray hover:rounded-lg ${hasArticles && "max-mobile:sticky"}`}
        aria-label="open options"
        type="button"
        data-hover="읽기 속도 재측정"
        onClick={() => navigate("/modal/guide")}
      >
        <IoSettingsSharp
          color="white"
          size={22}
          filter="drop-shadow(1px 1px 2px rgb(0 0 0 / 0.25))"
        />
      </button>
    </div>
  );
}

export default OptionButton;
