import { DEFAULT_WPM } from "./readTimeTest";

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const pathData = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return pathData;
};

const setValue = (svg, size, strokeWidth, value) => {
  const adjustedWpm = value > 404 ? 404 : value;
  const slice = svg.querySelector(".slice");
  const text = svg.querySelector("text");
  const normalizedValue = (adjustedWpm / DEFAULT_WPM) * 100;
  let centralAngel = (normalizedValue / 100) * 180;

  if (centralAngel === 360) centralAngel = 359.99;

  const xy = size / 2 - strokeWidth / 2;
  const pathData = describeArc(xy, xy, xy, 180, 180 + centralAngel);
  slice.setAttribute("d", pathData);

  const tspanSize = size / 3.5 / 3;
  text.innerHTML = `${Math.floor(value)}<tspan font-size="14" dy="${
    -tspanSize * 1.4
  }">wpm</tspan>`;
};

const animateStart = (svg, size, strokeWidth, value) => {
  let currentValue = 0;

  const intervalOne = setInterval(() => {
    const progressPercentage = +(currentValue / value).toFixed(2);
    const incrementAmount =
      progressPercentage < 0.95 ? 2 - 2 * progressPercentage : 0.1;

    currentValue += incrementAmount;

    if (currentValue >= +value) {
      currentValue = value;

      clearInterval(intervalOne);
    }

    setValue(svg, size, strokeWidth, currentValue);
  }, 10);
};

export default animateStart;
