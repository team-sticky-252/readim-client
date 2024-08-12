import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";

import Summary from "../components/Summary/Summary";

import generateResponse from "../utils/api";

describe("Test SummaryResult Component", () => {
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

  beforeEach(() => {
    vi.mock("../utils/api", () => ({
      default: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("displays error message if generateResponse fails", async () => {
    generateResponse.mockRejectedValueOnce(new Error());

    render(
      <Summary
        articleSummaryData={articleSummaryData}
        setIsSummaryClosed={setIsSummaryClosed}
      />,
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          "요약 생성 중 에러가 발생했습니다. 다시 시도해주세요.",
        ),
      ).toBeInTheDocument();
    });
  });

  it("calls generateResponse and displays the summary text", async () => {
    const summaryText = "This is a summary of the article.";
    generateResponse.mockResolvedValueOnce(summaryText);

    render(
      <Summary
        articleSummaryData={articleSummaryData}
        setIsSummaryClosed={setIsSummaryClosed}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText(summaryText)).toBeInTheDocument();
    });
  });
});
