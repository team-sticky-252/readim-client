import PropTypes from "prop-types";

function ReadingTime({ readingTime }) {
  let readingMinute = Math.floor(readingTime / 1000 / 60);
  let readingSeconds =
    Math.round((readingTime / 1000 - readingMinute * 60) * 0.1) * 10;

  if (readingSeconds >= 45) {
    readingMinute += 1;
    readingSeconds = 0;
  } else if (readingSeconds >= 15) {
    readingSeconds = 30;
  } else {
    readingSeconds = 0;
  }

  return (
    <div className="my-3">
      <h2 className="inline-block text-4xl font-medium">{readingMinute}</h2>
      <p className="inline-block ml-px text-base font-light tracking-tighter">
        분
      </p>
      {readingSeconds !== 0 && (
        <>
          <h2 className="inline-block ml-2 text-4xl font-medium tracking-tighter">
            {readingSeconds}
          </h2>
          <p className="inline-block ml-px text-base font-light">초</p>
        </>
      )}
    </div>
  );
}

export default ReadingTime;

ReadingTime.propTypes = {
  readingTime: PropTypes.number.isRequired,
};
