import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import TextButton from "../shared/Button/TextButton";

function OptionButton() {
  const navigate = useNavigate();
  return (
    <div className="real">
      <button
        className="fixed z-10 p-1 cursor-pointer peer top-5 right-5 hover:bg-medium-gray hover:rounded-lg"
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
      <span className="absolute hidden min-w-[50%] right-16 top-7 peer-hover:inline-block">
        <TextButton>
          <span className="m-2 text-slate-700">읽기 속도 재측정</span>
        </TextButton>
      </span>
    </div>
  );
}

export default OptionButton;
