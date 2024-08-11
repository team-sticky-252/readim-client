import InfoConceptText from "./Header/InfoConceptText";

function Welcome() {
  return (
    <div className="flex justify-center mt-16">
      <div className="w-3/5 font-thin text-7xl text-zinc-600 max-mobile:w-auto max-mobile:text-4xl">
        <p className="py-2">
          <span className="font-medium">Readim</span>은 시간을
        </p>
        <p className="py-2">
          <InfoConceptText />
          &nbsp;수 있어요.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
