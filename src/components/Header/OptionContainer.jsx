import OptionButton from "./OptionButton";
import OptionPopUpContainer from "./OptionPopUpContainer";

function OptionContainer() {
  return (
    <div className="flex justify-end h-20 relatvie">
      <OptionPopUpContainer />
      <OptionButton />
    </div>
  );
}

export default OptionContainer;
