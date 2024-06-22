import PropTypes from "prop-types";

import InfoConceptContainer from "./InfoConceptContainer";
import InfoReadingTimeContainer from "./InfoReadingTimeContainer";

function InfoTextContainer({ totalReadTime }) {
  return (
    <>
      {totalReadTime !== 0 && (
        <InfoReadingTimeContainer totalReadTime={totalReadTime} />
      )}
      {totalReadTime === 0 && <InfoConceptContainer />}
    </>
  );
}

export default InfoTextContainer;

InfoTextContainer.propTypes = {
  totalReadTime: PropTypes.number.isRequired,
};
