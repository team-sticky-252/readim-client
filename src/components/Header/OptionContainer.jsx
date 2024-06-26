import TextButton from "../shared/Button/TextButton";
import OptionButton from "./OptionButton";

function OptionContainer() {
  return (
    <div className="flex justify-end h-20">
      <OptionButton />
      <span className="absolute hidden min-w-[50%] right-16 top-7 peer-hover:inline-block">
        <TextButton>
          <span className="m-2 text-slate-700">읽기 속도 재측정</span>
        </TextButton>
      </span>
    </div>
  );
}

export default OptionContainer;
