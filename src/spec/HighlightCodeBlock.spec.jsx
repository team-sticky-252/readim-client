import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import codeHighlighter from "../utils/HighlightCodeBlock";

describe("Test HighlightCodeBlock Component", () => {
  it("It should be highlighted according to the type of code", () => {
    const code = "<html><body>Hello, world!</body></html>";
    const { container } = render(codeHighlighter({ code }));

    expect(container.innerHTML).toContain(
      '<span style="color: rgb(86, 156, 214);">&lt;html&gt;</span>',
    );
    expect(container.innerHTML).toContain(
      '<span style="color: rgb(86, 156, 214);">&lt;body&gt;</span>',
    );
    expect(container.innerHTML).toContain(
      '<span style="color: rgb(86, 156, 214);">&lt;/body&gt;</span>',
    );
    expect(container.innerHTML).toContain(
      '<span style="color: rgb(86, 156, 214);">&lt;/html&gt;</span>',
    );

    "Hello, world!".split("").forEach((char) => {
      if (char === ",") {
        expect(container.innerHTML).toContain(
          `<span style="color: rgb(128, 128, 128);">,</span>`,
        );
      } else if (char === " ") {
        expect(container.innerHTML).toContain(
          `<span style="color: rgb(212, 212, 212);"> </span>`,
        );
      } else {
        expect(container.innerHTML).toContain(
          `<span style="color: rgb(212, 212, 212);">${char}</span>`,
        );
      }
    });

    expect(container.innerHTML).toMatch(
      /<span style="color: rgb\(212, 212, 212\);"><\/span>/,
    );

    expect(container.innerHTML).toMatch(
      /<span style="color: rgb\(212, 212, 212\);"><\/span><span style="color: rgb\(86, 156, 214\);">&lt;html&gt;<\/span><span style="color: rgb\(212, 212, 212\);"><\/span><span style="color: rgb\(86, 156, 214\);">&lt;body&gt;<\/span><span style="color: rgb\(212, 212, 212\);">H<\/span><span style="color: rgb\(212, 212, 212\);">e<\/span><span style="color: rgb\(212, 212, 212\);">l<\/span><span style="color: rgb\(212, 212, 212\);">l<\/span><span style="color: rgb\(212, 212, 212\);">o<\/span><span style="color: rgb\(212, 212, 212\);"><\/span><span style="color: rgb\(128, 128, 128\);">,<\/span><span style="color: rgb\(212, 212, 212\);"> <\/span><span style="color: rgb\(212, 212, 212\);">w<\/span><span style="color: rgb\(212, 212, 212\);">o<\/span><span style="color: rgb\(212, 212, 212\);">r<\/span><span style="color: rgb\(212, 212, 212\);">l<\/span><span style="color: rgb\(212, 212, 212\);">d<\/span><span style="color: rgb\(212, 212, 212\);">!<\/span><span style="color: rgb\(212, 212, 212\);"><\/span><span style="color: rgb\(86, 156, 214\);">&lt;\/body&gt;<\/span><span style="color: rgb\(86, 156, 214\);">&lt;\/html&gt;<\/span>/,
    );
  });
});
