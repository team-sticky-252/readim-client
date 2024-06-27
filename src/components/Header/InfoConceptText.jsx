import { useEffect, useState } from "react";

const CONCEPT = ["아낄 ", "파악할", "활용할", "계획할"];

function InfoConceptText() {
  const [index, setIndex] = useState(0);
  const [rotateAnimation, setRotateAnimation] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotateAnimation(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % CONCEPT.length);
        setRotateAnimation(false);
      }, 400);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span
      className={`inline-block w-auto w-14 text-transparent bg-gradient-to-r from-primary via-blue-gray to-deep-blue bg-clip-text ease-linear duration-300 ${rotateAnimation ? "opacity-0 -translate-y-3" : "opacity-100"}`}
    >
      {CONCEPT[index]}
    </span>
  );
}

export default InfoConceptText;
