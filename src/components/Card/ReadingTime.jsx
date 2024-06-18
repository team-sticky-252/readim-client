import PropTypes from "prop-types";

function ReadingTime({ readingTime }) {
  const readingMinute = Math.floor(readingTime / 1000 / 60);
  const readingSeconds = Math.floor((readingTime / 1000) % 60);
  const roundedReadingSeconds = Math.round(readingSeconds) >= 30 ? 30 : "";

  return (
    <div className="my-2">
      <h2 className="inline-block text-4xl font-medium">{readingMinute}</h2>
      <p className="inline-block text-base font-light">분</p>
      <h2 className="inline-block ml-2 text-4xl font-medium">
        {roundedReadingSeconds}
      </h2>
      <p className="inline-block text-base font-light">초</p>
    </div>
  );
}

export default ReadingTime;

ReadingTime.propTypes = {
  readingTime: PropTypes.number.isRequired,
};
