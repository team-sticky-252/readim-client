import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import PieChart from "../components/shared/Chart/PieChart";
import animateStar from "../utils/chart";

vi.mock("../utils/chart", () => ({
  default: vi.fn(),
}));

describe("PieChart", async () => {
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

    expect(animateStar).toHaveBeenCalledWith(svgElement, size, size / 8, value);
  });
});
