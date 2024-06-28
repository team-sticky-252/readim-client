import InfoConceptText from "./Header/InfoConceptText";

function Welcome() {
  return (
    <div className="flex justify-center mt-48">
      <div className="w-3/5 font-thin text-7xl">
        <p className="inline-block py-2 text-neutral-300">
          <span className="font-medium">Readim</span>
          <span>은 시간을</span>
        </p>
        <p className="inline-block py-2 text-neutral-300">
          <InfoConceptText />
          <span>&nbsp;수 있어요.</span>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
