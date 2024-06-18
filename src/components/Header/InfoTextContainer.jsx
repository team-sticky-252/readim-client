import PropTypes from "prop-types";

import InfoConceptContainer from "./InfoConceptContainer";
import InfoReadingTimeContainer from "./InfoReadingTimeContainer";

function InfoTextContainer({ totalReadTime = 0 }) {
  return (
    <>
      {totalReadTime && (
        <InfoReadingTimeContainer totalReadTime={totalReadTime} />
      )}
      {!totalReadTime && <InfoConceptContainer />}
    </>
  );
}

export default InfoTextContainer;

InfoTextContainer.propTypes = {
  totalReadTime: PropTypes.number.isRequired,
};
