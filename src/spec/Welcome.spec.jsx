import { describe, it, expect, beforeEach, vi } from "vitest";
import Welcome from "./../components/Welcome";
import { Container } from "postcss";
import { render } from "@testing-library/react";

describe("아티클 카드가 없는 경우 컨셉 문구가 순환하고 있어야 한다.", () => {
  const conceptTexts = ["절약할", "파악할", "활용할", "계획할"];

  it("컨셉 문구가 순환하고 있어야 한다", async () => {
    render(<Welcome />);

    for (let index = 0; index < conceptTexts.length; index++) {
      if (index > 0) {
        vi.advanceTimersByTime(1900);
        await nextTick();
      }
      const textElement = wrapper.find('[data-test="test-conceptText"]');
      expect(textElement.text()).toBe(conceptTexts[index]);
    }
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
