import PropTypes from "prop-types";

function InfoReadingTimeText({ totalReadTime }) {
  let readingMinute = Math.floor(totalReadTime / 1000 / 60);
  const readingSeconds =
    Math.round((totalReadTime / 1000 - readingMinute * 60) * 0.1) * 10;

  if (readingSeconds >= 30) {
    readingMinute += 1;
  }

  const readingHour = Math.floor(readingMinute / 60);
  readingMinute -= readingHour * 60;

  return (
    <span className="inline-block font-medium text-right text-primary">
      {readingHour !== 0 && `${readingHour}시간 `}
      {readingMinute !== 0 && `${readingMinute}분`}
    </span>
  );
}

export default InfoReadingTimeText;

InfoReadingTimeText.propTypes = {
  totalReadTime: PropTypes.number.isRequired,
};
