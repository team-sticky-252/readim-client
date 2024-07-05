import { act } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Welcome from "../components/Welcome";

describe("Test Welcome Component.", () => {
  vi.useFakeTimers();

  it("Should rotate the concept texts", async () => {
    render(<Welcome />);

    const conceptText = screen.getByTestId("test-conceptText");

    expect(conceptText).toHaveTextContent("절약할");

    await act(async () => {
      vi.advanceTimersByTime(1900);
    });

    expect(conceptText).toHaveTextContent("파악할");

    await act(async () => {
      vi.advanceTimersByTime(1900);
    });

    expect(conceptText).toHaveTextContent("활용할");

    await act(async () => {
      vi.advanceTimersByTime(1900);
    });

    expect(conceptText).toHaveTextContent("계획할");

    await act(async () => {
      vi.advanceTimersByTime(1900);
    });

    expect(conceptText).toHaveTextContent("절약할");
  });
});
