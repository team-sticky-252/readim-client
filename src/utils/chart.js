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
  const d = [
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
  return d;
};

const setValue = (svg, size, strokeWidth, value) => {
  const adjustedWpm = value > 404 ? 404 : value;
  const slice = svg.querySelector(".slice");
  const text = svg.querySelector("text");

  const normalizedValue = (adjustedWpm / DEFAULT_WPM) * 100;
  let c = (normalizedValue / 100) * 180;
  if (c === 360) c = 359.99;
  const xy = size / 2 - strokeWidth / 2;
  const d = describeArc(xy, xy, xy, 180, 180 + c);
  slice.setAttribute("d", d);
  const tspanSize = size / 3.5 / 3;
  text.innerHTML = `${Math.floor(value)}<tspan font-size="14" dy="${
    -tspanSize * 1.4
  }">wpm</tspan>`;
};

const animateStart = (svg, size, strokeWidth, value) => {
  let v = 0;

  const intervalOne = setInterval(() => {
    const p = +(v / value).toFixed(2);
    const a = p < 0.95 ? 2 - 2 * p : 0.1;
    v += a;

    if (v >= +value) {
      v = value;
      clearInterval(intervalOne);
    }

    setValue(svg, size, strokeWidth, v);
  }, 10);
};

export default animateStart;
