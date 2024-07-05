import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import ToastMessage from "../components/Toast/ToastMessage";

describe("Test ToastMessage Component", () => {
  it("Toast Mesaage should show its props's texts", () => {
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

    expect(messages.length).toBe(3);
  });

  it("When delete the message, Should play fade-out-animation during 0.5s", () => {
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
