import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import UrlInputContainer from "../components/Header/UrlInputContainer";

describe("Test UrlInputContainer Component", () => {
  it("Should render URL textarea field correctly", () => {
    render(
      <UrlInputContainer
        articleDataList={[]}
        setArticleDataList={() => {}}
        setMessageList={() => {}}
      />,
    );

    const textarea = screen.getByPlaceholderText("URL을 입력해 주세요.");

    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("should render button with correct class on hover", () => {
    render(
      <UrlInputContainer
        articleDataList={[]}
        setArticleDataList={() => {}}
        setMessageList={() => {}}
      />,
    );

    const button = screen.getByRole("button", { name: "request url" });

    expect(button.classList).toContain("hover:bg-zinc-100");
  });
});
