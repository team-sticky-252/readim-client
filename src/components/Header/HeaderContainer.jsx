import InfoTextContainer from "./InfoTextContainer";
import OptionContainer from "./OptionContainer";
import UrlInputContainer from "./UrlInputContainer";

function HeaderContainer() {
  const totalReadTime = 690000;

  return (
    <header className="grid w-full text-center text-centerborder-solid grid-row-3">
      <OptionContainer />
      <InfoTextContainer totalReadTime={totalReadTime} />
      <UrlInputContainer />
    </header>
  );
}

export default HeaderContainer;
