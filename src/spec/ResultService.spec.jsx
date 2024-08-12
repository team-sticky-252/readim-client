import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ResultService from "../components/Service/ResultService";
import useLocalStorage from "../hooks/useLocalStorage";

vi.mock("../hooks/useLocalStorage");
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

describe("Test ResultService Component", () => {
  it("should display the reading time when rendered", () => {
    vi.mocked(useLocalStorage).mockReturnValue([399]);

    render(
      <ResultService
        clickTimeDifferenceMs={30000}
        navigateNextPage={() => {}}
      />,
    );

    const timeElement = screen.getByText(/\d+초/);

    expect(timeElement).toBeInTheDocument();
    expect(timeElement.classList.contains("highlight")).toBe(true);
  });
});
