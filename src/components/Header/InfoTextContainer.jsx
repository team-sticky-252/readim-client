import PropTypes from "prop-types";

import InfoReadingTimeContainer from "./InfoReadingTimeContainer";

function InfoTextContainer({ totalReadTime }) {
  return (
    <div className={`flex justify-center ${totalReadTime > 0 && "h-28"}`}>
      {totalReadTime > 0 && (
        <InfoReadingTimeContainer totalReadTime={totalReadTime} />
      )}
    </div>
  );
}

export default InfoTextContainer;

InfoTextContainer.propTypes = {
  totalReadTime: PropTypes.number.isRequired,
};
