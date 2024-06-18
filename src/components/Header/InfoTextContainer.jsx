import PropTypes from "prop-types";

import InfoConceptContainer from "./InfoConceptContainer";
import InfoReadingTimeContainer from "./InfoReadingTimeContainer";

function InfoTextContainer({ sumReadTime = 0 }) {
  return (
    <>
      {sumReadTime && <InfoReadingTimeContainer sumReadTime={sumReadTime} />}
      {!sumReadTime && <InfoConceptContainer />}
    </>
  );
}

export default InfoTextContainer;

InfoTextContainer.propTypes = {
  sumReadTime: PropTypes.number.isRequired,
};
