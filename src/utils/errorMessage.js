const ERROR_MESSAGE = {
  BLANK: {
    icon: "⛓️‍💥",
    messages: ["유효하지 않은 URL 이에요.", "공백은 추가할 수 없어요."],
  },
  NOT_VALID_URL: {
    icon: "⛓️‍💥",
    messages: ["유효하지 않은 URL 이에요."],
  },
  DUPLICATE_URL: {
    icon: "🔗",
    messages: ["이미 등록된 URL 이에요."],
  },
  400: {
    icon: "⛓️‍💥",
    messages: ["유효하지 않은 URL 이에요."],
  },
  512: {
    icon: "⌛️",
    messages: ["리딩 타임을 측정할 수 없는 URL 이에요."],
  },
  500: {
    icon: "⛔️",
    messages: ["서버 에러가 발생했습니다.", "잠시 후 다시 시도해 주세요."],
  },
};

export default ERROR_MESSAGE;
