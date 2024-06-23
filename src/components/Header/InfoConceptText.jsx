import { useEffect, useState } from "react";

const CONCEPT = ["아낄 ", "파악할", "활용할", "계획할"];

function InfoConceptText() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % CONCEPT.length);
        setAnimate(false);
      }, 400);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span
      className={`whitespace-pre inline-block w-14 text-right text-primary ease-linear duration-300 ${animate ? "opacity-0 -translate-y-3" : "opacity-100"}`}
    >
      {CONCEPT[index]}
    </span>
  );
}

export default InfoConceptText;
