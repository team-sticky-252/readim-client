import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import PieChart from "../components/shared/Chart/PieChart";

vi.mock("../../../utils/chart", () => ({
  default: vi.fn(),
}));

describe("PieChart", () => {
  const animateStartMock = require("../utils/chart").default;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with given size and value", () => {
    const size = 200;
    const value = 75;

    const { getByText, container } = render(
      <PieChart size={size} value={value} />,
    );

    const svgElement = container.querySelector("svg");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("width", `${size}px`);
    expect(svgElement).toHaveAttribute("height", `${size}px`);

    expect(getByText("wpm")).toBeInTheDocument();

    expect(animateStartMock).toHaveBeenCalledWith(
      svgElement,
      size,
      size / 8,
      value,
    );
  });
});
