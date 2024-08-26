import { render, screen, act } from "@testing-library/react";
import { vi } from "vitest";
import TestService from "../components/Service/TestService";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

vi.mock("../../utils/highlightCodeBlock", () => ({
  __esModule: true,
  default: vi.fn((code) => code),
}));

describe("Test TestService Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("enables the button after countdown", async () => {
    render(<TestService navigateNextPage={() => {}} />);

    const nextButton = screen.getByText("다음");

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(nextButton).toBeEnabled();
  });
});
