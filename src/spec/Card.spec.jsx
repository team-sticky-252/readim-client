import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Card from "../components/Card/Card";

describe("Card", () => {
  let rerender;

  beforeEach(() => {
    const resultRender = render(
      <Card
        id="b9d83fd8-219e-49e9-be73-689fb48654ce"
        favicon="https://github.com/fluidicon.png"
        domain="GitHub"
        articleTitle="GitHub - facebook/react: The library for web and native user interfaces."
        readingTime={159207}
        mainContent="React · React is a JavaScript library for building user interfaces..."
        url="https://github.com/facebook/react"
        deleteArticle={() => {}}
        setArticleSummaryData={() => {}}
        isSummaryClosed={true}
        setIsSummaryClosed={() => {}}
      />,
    );

    rerender = resultRender.rerender;
  });

  it("The card component should be deleted when the delete button is clicked.", () => {
    const deleteButton = screen.getByTitle("카드 삭제");
    const articleCard = screen.queryByTestId(
      "b9d83fd8-219e-49e9-be73-689fb48654ce",
    );

    deleteButton.click();

    expect(articleCard).toBeNull();
  });

  it("Card component should render the information passed via props correctly.", () => {
    const domain = screen.getByText("GitHub");
    const title = screen.getByText(
      "GitHub - facebook/react: The library for web and native user interfaces.",
    );
    const readingMinuteTime = screen.getByText("2");
    const readingMinuteText = screen.getByText("분");
    const readingSecondTime = screen.getByText("39");
    const readingSecondText = screen.getByText("초");

    expect(domain).toBeInTheDocument();
    expect(title).toBeInTheDocument();

    expect(readingMinuteTime).toBeInTheDocument();
    expect(readingMinuteText).toBeInTheDocument();
    expect(readingSecondTime).toBeInTheDocument();
    expect(readingSecondText).toBeInTheDocument();
  });

  it("Should display the certification mark for supported sites.", () => {
    const certifiedSite = document.getElementById("gradient1");

    expect(certifiedSite).toBeInTheDocument();
  });

  it("Should not display the certification mark for unsupported sites.", () => {
    rerender(
      <Card
        id="7bc44162-8310-4191-9522-165555b3d06e"
        favicon="https://www.daleseo.com/favicon-32x32.png?v=26b5e5b7ba470a2a36da1861c232ae60"
        domain="daleseo"
        articleTitle="Vitest 처음 시작하기"
        readingTime={293168}
        mainContent="Vitest 처음 시작하기 Vite가 Webpack을 대체하는 차세대 번들러(bundler)로 부상하면서, 더불어 자매 제품인 Vitest도 Jest를 위협하면서 자바스크립트 생태계에서 입지를 넓혀가고 있습니다."
        url="https://www.daleseo.com/vitest/"
        deleteArticle={() => {}}
        setArticleSummaryData={() => {}}
        isSummaryClosed={true}
        setIsSummaryClosed={() => {}}
      />,
    );
    const certifiedSite = document.getElementById("gradient1");

    expect(certifiedSite).not.toBeInTheDocument();
  });
});
