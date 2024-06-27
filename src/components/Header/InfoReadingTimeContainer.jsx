import PropTypes from "prop-types";
import InfoReadingTimeText from "./InfoReadingTimeText";

function InfoReadingTimeContainer({ totalReadTime }) {
  return (
    <div className="flex items-end justify-center text-xl font-thin">
      약&nbsp;
      <InfoReadingTimeText totalReadTime={totalReadTime} />의 아티클이
      모여있어요.
    </div>
  );
}

export default InfoReadingTimeContainer;

InfoReadingTimeContainer.propTypes = {
  totalReadTime: PropTypes.number.isRequired,
};
