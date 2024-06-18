import { useEffect, useState } from "react";

const CONCEPT = ["아낄", "볼", "활용할", "계획할"];

function InfoConceptText() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % CONCEPT.length);
        setAnimate(false);
      }, 400); // 애니메이션 지속 시간 (0.5초)
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <span
      className={`inline-block w-14 text-right text-[#54CABC] ${animate ? "ease-linear duration-300 opacity-0 -translate-y-3" : "ease-linear duration-300 opacity-100"}`}
    >
      {CONCEPT[index]}
    </span>
  );
}

export default InfoConceptText;
