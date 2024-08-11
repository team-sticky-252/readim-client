import PropTypes from "prop-types";

import InfoReadingTimeContainer from "./InfoReadingTimeContainer";

function InfoTextContainer({ totalReadTime }) {
  return (
    <div
      className={`flex relative bottom-6 justify-center ${totalReadTime > 0 && "h-28 max-mobile:h-10"}`}
    >
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
