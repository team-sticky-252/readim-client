import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import TestService from "../components/Service/TestService";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

describe("Test TestService Component", () => {
  it("renders all content correctly", () => {
    render(<TestService navigateNextPage={() => {}} />);

    expect(screen.getByText("Hello World!")).toBeTruthy();

    expect(
      screen.getByText(/여러분이 읽고 있는 이 파트는/, { exact: false }),
    ).toBeTruthy();

    expect(screen.getByText("✔️ 확인했어요")).toBeTruthy();
  });
});
