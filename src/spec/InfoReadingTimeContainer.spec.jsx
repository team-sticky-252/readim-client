import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import InfoReadingTimeContainer from "../components/Header/InfoReadingTimeContainer";

describe("Test InfoReadingTimeContainer Component", () => {
  it("If it's 1 hour, 3 minutes and 42 seconds, display it as 1 hour and 4 minutes", () => {
    const hours = 1;
    const minutes = 3;
    const seconds = 42;
    const totalReadTime = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

    render(<InfoReadingTimeContainer totalReadTime={totalReadTime} />);

    const readingTime = screen.getByTestId("total-reading-time");

    expect(readingTime.textContent.replace(/\s+/g, " ")).toBe(
      "약 1시간 4분 분량의 아티클이 모여있어요.",
    );
  });

  it("If it's 1 hour, 59 minutes and 42 seconds, display it as 2 hours", () => {
    const hours = 1;
    const minutes = 59;
    const seconds = 42;
    const totalReadTime = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

    render(<InfoReadingTimeContainer totalReadTime={totalReadTime} />);

    const readingTime = screen.getByTestId("total-reading-time");

    expect(readingTime.textContent.replace(/\s+/g, " ")).toBe(
      "약 2시간 분량의 아티클이 모여있어요.",
    );
  });

  it("If it's 5 minutes and 42 seconds, display it as 6 minutes", () => {
    const hours = 0;
    const minutes = 5;
    const seconds = 42;
    const totalReadTime = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

    render(<InfoReadingTimeContainer totalReadTime={totalReadTime} />);

    const readingTime = screen.getByTestId("total-reading-time");

    expect(readingTime.textContent.replace(/\s+/g, " ")).toBe(
      "약 6분 분량의 아티클이 모여있어요.",
    );
  });
});
