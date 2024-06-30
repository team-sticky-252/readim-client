import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import animateStart from "../../../utils/chart";

function PieChart({ size, value }) {
  const strokeWidth = size / 8;
  const svgRef = useRef(null);

  useEffect(() => {
    animateStart(svgRef.current, size, strokeWidth, value);
  }, [size, value, strokeWidth]);

  return (
    <svg ref={svgRef} width={`${size}px`} height={`${size}px`}>
      <defs>
        <linearGradient id="gradient">
          <stop stopColor="#D2C2F4" offset="0%" />
          <stop stopColor="#FFBB9A" offset="100%" />
        </linearGradient>
      </defs>
      <path
        className="slice"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
        transform={`translate(${strokeWidth / 2},${strokeWidth / 2})`}
      />
      <text
        x={size / 2 + size / 4 / 7.5}
        y={size / 2 + size / 4 / 4}
        fontFamily="Pretendard"
        fontSize={size / 4}
        textAnchor="middle"
      >
        <tspan>wpm</tspan>
      </text>
    </svg>
  );
}

export default PieChart;

PieChart.propTypes = {
  size: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
