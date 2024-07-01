import React from "react";

import { BsPatchCheckFill } from "react-icons/bs";

function GradientPatchCheckIcon() {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="gradient1"
            gradientTransform="rotate(22)"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="70%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#8ac0a7", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#9ad9f2", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <BsPatchCheckFill
        style={{ fill: "url(#gradient1)", width: "1rem", height: "1.5rem" }}
      />
    </>
  );
}

export default GradientPatchCheckIcon;
