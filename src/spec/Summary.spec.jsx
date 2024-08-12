import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Summary from "../components/Summary/Summary";

describe("Test Summary Component", () => {
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

  it("setIsSummaryClosed called when the close button is clicked", async () => {
    render(
      <Summary
        articleSummaryData={articleSummaryData}
        setIsSummaryClosed={setIsSummaryClosed}
      />,
    );

    const closeButton = screen.getByTitle("카드 삭제");
    fireEvent.click(closeButton);

    await waitFor(
      () => {
        expect(setIsSummaryClosed).toHaveBeenCalledTimes(1);
      },
      { timeout: 600 },
    );
  });
});
