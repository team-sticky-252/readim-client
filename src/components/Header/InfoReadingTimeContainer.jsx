import PropTypes from "prop-types";
import InfoReadingTimeText from "./InfoReadingTimeText";

function InfoReadingTimeContainer({ sumReadTime }) {
  return (
    <div className="flex items-end justify-center pb-4 text-xl font-thin h-28">
      약&nbsp;
      <InfoReadingTimeText sumReadTime={sumReadTime} />의 아티클이 모여있어요.
    </div>
  );
}

export default InfoReadingTimeContainer;

InfoReadingTimeContainer.propTypes = {
  sumReadTime: PropTypes.number.isRequired,
};
