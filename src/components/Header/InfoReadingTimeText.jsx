import PropTypes from "prop-types";

function InfoReadingTimeText({ totalReadTime }) {
  let readingMinute = Math.floor(totalReadTime / 1000 / 60);
  let readingSeconds =
    Math.round((totalReadTime / 1000 - readingMinute * 60) * 0.1) * 10;

  if (readingSeconds >= 30) {
    readingMinute += 1;
    readingSeconds = 0;
  } else {
    readingSeconds = 0;
  }

  return (
    <span className="inline-block text-right text-[#54CABC] font-medium">
      {`${readingMinute}분`}
    </span>
  );
}

export default InfoReadingTimeText;

InfoReadingTimeText.propTypes = {
  totalReadTime: PropTypes.number.isRequired,
};
