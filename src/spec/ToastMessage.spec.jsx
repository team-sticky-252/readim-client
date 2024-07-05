import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import InfoReadingTimeContainer from "../components/Header/InfoReadingTimeContainer";
import ToastMessage from "../components/Toast/ToastMessage";
import App from "../App";
import ToastContainer from "../components/Toast/ToastContainer";

describe("토스트 메시지 검사", () => {
  it("토스트 메시지는 아이콘, 메시지, 또 경우에 따라 입력값을 출력해야합니다", () => {
    render(
      <ToastMessage
        icon="✅"
        messages={["passed the test"]}
        link={"have test"}
        deleteMessage={() => {}}
      />,
    );

    const messages = screen.queryAllByText((content, element) => {
      return (
        element.textContent.includes("✅") &&
        element.textContent.includes("passed the test") &&
        element.textContent.includes("have test")
      );
    });

    expect(messages.length).toBeGreaterThan(0);
  });

  it("메시지가를 삭제하면 0.5초간 애니메이션이 실행되고 삭제되야 합니다.", () => {
    const deleteMessageMock = vi.fn();

    const { container } = render(
      <ToastMessage
        icon="✅"
        messages={["passed the test"]}
        link={"have test"}
        deleteMessage={deleteMessageMock}
      />,
    );

    const deletebutton = screen.getByTitle("메시지 삭제");

    vi.useFakeTimers();

    fireEvent.click(deletebutton);

    expect(container.firstChild).toHaveClass("animate-fade-out-bottom");

    vi.advanceTimersByTime(500);

    expect(deleteMessageMock).toHaveBeenCalled();

    const hasNoPendingTimers = vi.getTimerCount() === 0;
    expect(hasNoPendingTimers).toBe(true);
  });
});
