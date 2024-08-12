import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import SummaryContainer from "../components/Summary/SummaryContainer";

describe("Test SummaryContainer Component", () => {
  const articleSummaryData = {
    id: "1",
    favicon: "https://example.com/favicon.ico",
    domain: "example.com",
    articleTitle: "Test Article",
    readingTime: 5,
    mainContent: "This is the content of the article.",
    url: "https://example.com",
  };

  const setIsSummaryClosed = vi.fn();

  it("renders correctly with given articleSummaryData", () => {
    const { rerender } = render(
      <SummaryContainer
        articleSummaryData={articleSummaryData}
        isSummaryClosed={false}
        setIsSummaryClosed={setIsSummaryClosed}
      />,
    );

    expect(
      screen.getByText("Test Article의 내용을 요약해줘"),
    ).toBeInTheDocument();
    expect(screen.getByAltText("favicon")).toHaveAttribute(
      "src",
      articleSummaryData.favicon,
    );

    rerender(
      <SummaryContainer
        articleSummaryData={articleSummaryData}
        isSummaryClosed={true}
        setIsSummaryClosed={setIsSummaryClosed}
      />,
    );

    expect(
      screen.queryByText("Test Article의 내용을 요약해줘"),
    ).not.toBeInTheDocument();
    expect(screen.queryByAltText("favicon")).not.toBeInTheDocument();
  });
});
