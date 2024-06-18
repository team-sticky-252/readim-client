import InfoTextContainer from "./InfoTextContainer";
import OptionContainer from "./OptionContainer";
import UrlInputContainer from "./UrlInputContainer";

function HeaderContainer() {
  const sumReadTime = 690000;

  return (
    <header className="grid w-full text-center text-centerborder-solid grid-row-3">
      <OptionContainer />
      <InfoTextContainer sumReadTime={sumReadTime} />
      <UrlInputContainer />
    </header>
  );
}

export default HeaderContainer;
