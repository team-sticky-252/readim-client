import OptionButton from "./OptionButton";

function OptionContainer({ hasArticles }) {
  return (
    <div className="relative flex justify-end h-20 max-mobile:h-10">
      <OptionButton hasArticles={hasArticles} />
    </div>
  );
}

export default OptionContainer;
