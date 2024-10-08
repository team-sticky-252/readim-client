const CONTENTS = {
  title: {
    welcome: "환영합니다!",
    guide: "당신에게 맞춘 리딩 타임",
    test: {
      normal: "Hello World!",
      code: "Script 태그",
      detail: "모던 마크업",
    },
    warning: "Readim의 정확한 리딩 타임 제안",
  },
  button: {
    welcome: "다음",
    guide: "시작",
    test: "완료",
    warning: "이전",
  },
  message: {
    welcome: `Readim에게 나중에 읽고 싶은 아티클을 알려주세요.
    그리고 여러분에게 맞춘 리딩 타임을 확인해 보세요.

    이 모든 서비스는 여러분의 응원 말고는 어떤 것도 요구하지 않을게요.
    Readim과 함께 남는 시간을 지식의 바다에서 보내보세요!!`,
    guide: `      Readim은 여러분에게 맞춤화된 리딩 타임을 제공해요.
      이제부터 보여드릴 간단한 글을 편안하게 읽어주세요.`,
    test: [
      {
        type: "normal",
        content:
          "여러분이 읽고 있는 이 파트는 실행 환경에 독립적인 코어 자바스크립트(core JavaScript)를 다룹니다.",
      },
      {
        type: "normal",
        content:
          "코어 자바스크립트를 다루고 있긴 하지만, 학습을 위해선 스크립트를 실행할 수 있는 환경이 필요합니다.",
      },
      {
        type: "normal",
        content:
          "본 튜토리얼은 온라인으로 제공되기 때문에 실행환경으로 브라우저를 사용하도록 하겠습니다.",
      },
      {
        type: "normal",
        content:
          "Node.js와 같이 브라우저 이외의 환경에 주력하는 학습자를 위해, 브라우저 한정 명령어(<code>alert</code> 등)는 최소한으로 사용하도록 하겠습니다.",
      },
      {
        type: "normal",
        content:
          "이런 명령어를 학습하는 데 시간을 보내지 않도록 말이죠. 브라우저 환경에서의 자바스크립트는 다음 파트에서 다루도록 하겠습니다.",
      },
      {
        type: "normal",
        content:
          "먼저, 웹 페이지에 스크립트를 삽입하는 방법에 대해 알아봅시다. 참고로 Node.js와 같은 서버 사이드 환경에서 스크립트를 실행하고 싶다면 <code>node my.js</code>와 같은 명령어를 사용하면 됩니다.",
      },
      {
        type: "code",
        content: `<!DOCTYPE HTML>
<html>
  <body>
    <p>스크립트 전</p>

    <script>
      alert('Hello, world!');
    </script>

    <p>스크립트 후</p>
  </body>
</html>`,
      },
      {
        type: "detail",
        content:
          "<code>&lt;script&gt;</code> 태그엔 몇 가지 속성(attribute)이 있습니다. 요즘엔 잘 사용하진 않지만, 오래된 코드에서 종종 이 속성을 발견할 수 있습니다.",
      },
      {
        type: "detail",
        content:
          "<code>type</code> 속성: <code>&lt;script type='text/javascript'&gt;</code> HTML4에선 스크립트에 type을 명시하는 것이 필수였습니다. 따라서 <code>type='text/javascript'</code> 속성이 붙은 스크립트를 어렵지 않게 찾을 수 있었습니다.",
      },
      {
        type: "detail",
        content:
          "이젠 타입 명시가 필수가 아닙니다. 게다가 모던 HTML 표준에선 이 속성의 의미가 바뀌었습니다. 이제 이 속성은 자바스크립트 모듈에 사용할 수 있습니다.",
      },
      {
        type: "detail",
        content:
          "모듈은 심화 내용이기 때문에 다른 파트에서 다시 이야기하도록 하겠습니다.",
      },
    ],
    warning: `Readim에서는 사용자 맞춤 예상 읽기 시간을 계산해요.
      이 단계를 진행하고 당신만의 리딩 타임을 가져보세요.

      끝까지 읽으면 더 높은 정확도의 리딩 타임을 볼 수 있어요.`,
  },
};

export default CONTENTS;
