describe("Readim 첫 진입시 초기화면", () => {
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
      cy.visit("/modal/test");

      cy.getBySel("test-header").should("have.text", "Hello World!");
      cy.getBySel("test-next-button").should("have.text", "완료");
      cy.getBySel("test-next-button").should("be.disabled");
      cy.getBySel("test-close-button").should("exist");
    });

    it("읽기 측정 테스트를 진행하는 모달창에서 하단으로 스크롤하면 버튼이 활성화된다.", () => {
      cy.visit("/modal/test");

      cy.getBySel("test-next-button").should("be.disabled");
      cy.getBySel("test-area").scrollTo("bottom", { duration: 300 });
      cy.getBySel("test-next-button").should("not.be.disabled");
    });

    it("읽기 측정 테스트를 30초에 완료하면 wpm은 406이다.", () => {
      completeReadingTest(30000, "406");
    });

    it("읽기 측정 테스트를 24초에 완료하면 wpm은 기본값인 202다.", () => {
      completeReadingTest(24000, "202");
    });

    it("읽기 측정 테스트를 2분 25초에 완료하면 wpm은 84이다.", () => {
      completeReadingTest(145000, "84");
    });

    it("읽기 측정 테스트를 2분 26초에 완료하면 wpm은 기본값인 202다.", () => {
      completeReadingTest(146000, "202");
    });
  });

  const completeReadingTest = (tickTime, expectedWpm) => {
    cy.visit("/modal/test");

    cy.clock();

    cy.getBySel("test-next-button").should("be.disabled");
    cy.getBySel("test-area").scrollTo("bottom", { duration: 200 });

    cy.tick(tickTime);

    cy.getBySel("test-next-button").should("not.be.disabled");
    cy.getBySel("test-next-button").click();

    cy.url().should("eq", `http://localhost:5173/`);
    cy.window()
      .its("localStorage")
      .then((localStorage) => {
        const wpm = localStorage.getItem("wpm");
        expect(wpm).to.equal(expectedWpm);
      });
  };
});

describe("Readim 첫 진입시 초기화면", () => {
  beforeEach(() => {
    const wpm = 202;

    cy.session("wpm", () => {
      cy.visit("/");
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
});
