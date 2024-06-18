import InfoTextContainer from "./InfoTextContainer";
import OptionContainer from "./OptionContainer";
import UrlInputContainer from "./UrlInputContainer";

function HeaderContainer() {
  return (
    <header className="grid w-full text-center text-centerborder-solid grid-row-3 h-60">
      <OptionContainer />
      <InfoTextContainer />
      <UrlInputContainer />
    </header>
  );
}

export default HeaderContainer;
