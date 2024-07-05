import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import InfoTextContainer from "../components/Header/InfoTextContainer";

describe("Test InfoTextContainer Component", () => {
  it("Renders nothing when total read time is 0", () => {
    const totalReadTime = 0;

    render(<InfoTextContainer totalReadTime={totalReadTime} />);

    expect(screen.queryByTestId("total-reading-time")).toBeNull();
  });

  it("Renders total reading time when total read time is not 0", () => {
    const totalReadTime = 360000;

    render(<InfoTextContainer totalReadTime={totalReadTime} />);

    expect(screen.queryByTestId("total-reading-time")).toBeInTheDocument();
  });
});
