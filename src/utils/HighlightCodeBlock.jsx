const codeColors = {
  keyword: "#C586C0",
  tag: "#569CD6",
  attribute: "#9CDCFE",
  string: "#CE9178",
  punctuation: "#808080",
  function: "#DCDCAA",
  comment: "#6A9955",
  default: "#D4D4D4",
};

const codeStyles = [
  { regex: /\b(DOCTYPE|html|head|body|script)\b/, type: "keyword" },
  { regex: /(<\/?\w+>|&lt;\/?\w+&gt;)/, type: "tag" },
  { regex: /\b\w+(?==)/, type: "attribute" },
  { regex: /(["'`])(?:(?=(\\?))\2.)*?\1/, type: "string" },
  { regex: /[<>{}()[\],;]/, type: "punctuation" },
  { regex: /\b(alert)\b/, type: "function" },
  { regex: /\/\/.*/, type: "comment" },
];

const findMatch = (code) => {
  return codeStyles.reduce(
    (acc, style) => {
      if (acc.match) return acc;

      const regex = new RegExp(`^(${style.regex.source})`);
      const result = code.match(regex);

      return result ? { match: result[0], type: style.type } : acc;
    },
    { match: null, type: "default" },
  );
};

const tokenize = (code) => {
  const tokens = [];

  while (code.length > 0) {
    const { match, type } = findMatch(code);

    if (match) {
      if (match !== code) {
        tokens.push({
          type: "default",
          content: code.slice(0, code.indexOf(match)),
        });
      }

      tokens.push({ type, content: match });
      code = code.slice(match.length);
    } else {
      tokens.push({ type: "default", content: code.charAt(0) });
      code = code.slice(1);
    }
  }

  return tokens;
};

const codeHighlighter = ({ code }) => {
  if (typeof code !== "string" || code.length === 0) {
    return null;
  }

  const tokens = tokenize(code);

  return tokens.map((token) => (
    <span key={crypto.randomUUID()} style={{ color: codeColors[token.type] }}>
      {token.content}
    </span>
  ));
};

export default codeHighlighter;
