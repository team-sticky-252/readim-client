describe("Readim 첫 방문시 초기화면", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("localStorage에 wpm이 없는 경우 읽기 속도 측정 모달창이 보여야 한다.", () => {
    it("첫 화면은 환영하는 인사를 건네는 모달창이 보여야 한다.", () => {
      cy.getBySel("test-header").should("have.text", "환영합니다!");
      cy.getBySel("test-next-button").should("have.text", "다음");
      cy.getBySel("test-close-button").should("exist");
    });

    it("다음 버튼 클릭 시, 읽기 측정 테스트를 안내하는 모달창이 보여야 한다.", () => {
      cy.getBySel("test-next-button").click();
      cy.getBySel("test-header").should("have.text", "당신에게 맞춘 리딩 타임");
      cy.getBySel("test-next-button").should("have.text", "시작");
      cy.getBySel("test-close-button").should("exist");
    });

    it("읽기 측정 테스트를 진행하는 모달창이 보여야 한다.", () => {
      cy.visit("/service/test");

      cy.getBySel("test-header").should("have.text", "Hello World!");
      cy.getBySel("test-next-button").should("have.text", "완료");
      cy.getBySel("test-next-button").should("be.disabled");
      cy.getBySel("test-close-button").should("exist");
    });

    it("읽기 측정 테스트를 진행하는 모달창에서 하단으로 스크롤하면 버튼이 활성화된다.", () => {
      cy.visit("/service/test");

      cy.getBySel("test-next-button").should("be.disabled");
      cy.getBySel("test-area").scrollTo("bottom", { duration: 300 });
      cy.getBySel("test-next-button").should("not.be.disabled");
    });

    it("읽기 측정 테스트를 30초에 완료하면 wpm은 406이다.", () => {
      completeReadingTest(30000, "406", "/service/result");
    });

    it("읽기 측정 테스트를 24초에 완료하면 wpm은 기본값인 202다.", () => {
      completeReadingTest(24000, "202", "/");
    });

    it("읽기 측정 테스트를 2분 25초에 완료하면 wpm은 84이다.", () => {
      completeReadingTest(145000, "84", "/service/result");
    });

    it("읽기 측정 테스트를 2분 26초에 완료하면 wpm은 기본값인 202다.", () => {
      completeReadingTest(146000, "202", "/");
    });
  });

  const completeReadingTest = (tickTime, expectedWpm, path) => {
    cy.visit("/service/test");

    cy.clock();

    cy.getBySel("test-next-button").should("be.disabled");
    cy.getBySel("test-area").scrollTo("bottom", { duration: 200 });

    cy.tick(tickTime);

    cy.getBySel("test-next-button").should("not.be.disabled");
    cy.getBySel("test-next-button").click();

    cy.url().should("eq", `http://localhost:5173${path}`);
    cy.window()
      .its("localStorage")
      .then((localStorage) => {
        const wpm = localStorage.getItem("wpm");
        expect(wpm).to.equal(expectedWpm);
      });
  };
});

describe("Readim 메인페이지 초기화면", () => {
  beforeEach(() => {
    const wpm = 202;

    cy.session("wpm", () => {
      cy.visit("/");
      window.localStorage.clear();
      window.localStorage.setItem("wpm", wpm);
    });
  });

  it("localStorage wpm이 202로 설정되어 있다.", () => {
    cy.window()
      .its("localStorage")
      .then((localStorage) => {
        const wpm = localStorage.getItem("wpm");
        expect(wpm).to.equal("202");
      });
  });

  it("아티클 카드가 없는 경우 컨셉 문구가 순환하고 있어야 한다.", () => {
    cy.visit("/");
    cy.clock();

    const conceptTexts = ["절약할", "파악할", "활용할", "계획할"];

    conceptTexts.forEach((text, index) => {
      if (index > 0) {
        cy.tick(1900);
      }
      cy.getBySel("test-conceptText").should("have.text", text);
    });
  });

  it("URL입력 전에는 articleCard가 하나도 없어야 한다.", () => {
    cy.visit("/");
    cy.getBySel("test-cardContainer").children().should("not.exist");
  });

  describe("정확한 URL을 입력하는 경우", () => {
    const correctUrl = "https://developer.mozilla.org/ko/docs/Web/JavaScript";

    it("입력창에 URL을 입력한 후 Enter를 누르면 API를 요청해야한다.", () => {
      requestURL(correctUrl);
    });

    it("API요청 응답이 온 경우, 입력창이 초기화 되고 아티클 카드가 추가돼야 한다.", () => {
      requestURL(correctUrl);

      cy.getBySel("test-cardContainer").within(() => {
        cy.getBySel("test-articleCard").should("exist");
      });
    });

    it("생성된 카드에는 해당 사이트 명이 포함돼 있어야 한다.", () => {
      requestURL(correctUrl);

      cy.window()
        .its("localStorage")
        .then((localStorage) => {
          const articleCardData = JSON.parse(localStorage.getItem("URLs"));
          return articleCardData;
        })
        .then((articleCardData) =>
          cy
            .getBySel("test-articleCard")
            .should("include.text", `${articleCardData[0].siteName}`),
        );
    });

    it("생성된 카드에는 해당 아티클 타이틀이 포함돼있어야 한다.", () => {
      requestURL(correctUrl);

      cy.window()
        .its("localStorage")
        .then((localStorage) => {
          const articleCardData = JSON.parse(localStorage.getItem("URLs"));
          return articleCardData;
        })
        .then((articleCardData) =>
          cy
            .getBySel("test-articleCard")
            .should("include.text", `${articleCardData[0].title}`),
        );
    });

    it("생성된 카드에는 해당 아티클의 리딩 타임이 포함돼있어야 한다.", () => {
      requestURL(correctUrl);

      cy.window()
        .its("localStorage")
        .then((localStorage) => {
          const articleCardData = JSON.parse(localStorage.getItem("URLs"));
          const readingTimeText = getReadingTime(
            articleCardData[0].readingTime,
          );

          cy.getBySel("test-articleCard").should(
            "include.text",
            readingTimeText,
          );
        });
    });

    it("생성된 카드에는 해당 도메인의 파비콘이 포함돼있어야 한다.", () => {
      requestURL(correctUrl);

      cy.window()
        .its("localStorage")
        .then((localStorage) => {
          const articleCardData = JSON.parse(localStorage.getItem("URLs"));
          const articleFaviconURL = articleCardData[0].faviconUrl;

          cy.getBySel("test-articleCardFavicon")
            .invoke("attr", "src")
            .should("equal", articleFaviconURL);
        });
    });
  });

  const requestURL = (url) => {
    cy.visit("/");
    cy.intercept(
      "GET",
      `http://localhost:8080/articleSummary?url=${encodeURIComponent(url)}&wpm=202`,
    ).as("getArticleData");
    cy.getBySel("test-inputWindow").type(`${url}{enter}`);
    cy.wait("@getArticleData").then((articleData) => {
      expect(articleData.response.statusCode).to.equal(200);
    });
  };

  const getReadingTime = (readingMS) => {
    let readingMinute = Math.floor(readingMS / 1000 / 60);
    let readingSeconds =
      Math.round((readingMS / 1000 - readingMinute * 60) * 0.1) * 10;

    if (readingSeconds >= 45) {
      readingMinute += 1;
      readingSeconds = 0;
    } else if (readingSeconds >= 15) {
      readingSeconds = 30;
    } else {
      readingSeconds = 0;
    }

    return `${readingMinute}분${readingSeconds}초`;
  };
});
