import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import OptionContainer from "../components/Header/OptionContainer";

describe("Test OptionContainer Component", () => {
  it("Displays button with 'open options' label in OptionContainer", () => {
    render(<OptionContainer />, { wrapper: BrowserRouter });

    expect(
      screen.queryByRole("button", { name: "open options" }),
    ).toBeInTheDocument();
  });
});
