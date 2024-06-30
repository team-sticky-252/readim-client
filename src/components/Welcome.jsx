import InfoConceptText from "./Header/InfoConceptText";

function Welcome() {
  return (
    <div className="flex justify-center mt-48">
      <div className="w-3/5 font-thin text-7xl text-zinc-600">
        <p className="py-2">
          <span>Readim은 시간을</span>
        </p>
        <p className="py-2">
          <InfoConceptText />
          <span>&nbsp;수 있어요.</span>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
