import PropTypes from "prop-types";

function ReadingTime({ readingTime }) {
  const readingMinute = Math.floor(readingTime / 1000 / 60);
  const readingSeconds = Math.floor(readingTime / 1000 - readingMinute * 60);

  return (
    <div className="my-3">
      {readingMinute > 0 && (
        <>
          <h2 className="inline-block text-4xl font-medium max-mobile:text-2xl">
            {readingMinute}
          </h2>
          <p className="inline-block ml-px mr-2 text-base font-light tracking-tighter">
            분
          </p>
        </>
      )}
      {readingSeconds > 0 && (
        <>
          <h2 className="inline-block text-4xl font-medium tracking-tighter max-mobile:text-2xl">
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
