import OptionPopUpButton from "./OptionPopUpButton";

function OptionPopUpContainer() {
  return (
    <div className="fixed grid w-24 gap-[1px] bg-gray rounded-lg cursor-pointer top-5 right-14 shadow-md">
      <OptionPopUpButton text="setting" position="top" />
      <OptionPopUpButton text="edit" position="bottom" />
    </div>
  );
}

export default OptionPopUpContainer;
