import { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import ToastContainer from "../components/Toast/ToastContainer";

describe("Test ToastMessage Component", () => {
  it("Toast Mesaage should show its props's texts", () => {
    render(
      <ToastContainer
        messageList={[
          {
            id: "1",
            icon: "✅",
            messages: ["passed the test"],
            link: "have test",
          },
        ]}
        deleteMessage={() => {}}
        deleteAllMessages={() => {}}
      />,
    );

    const iconElement = screen.getByText("✅");
    const messageElement = screen.getByText("passed the test");
    const linkElement = screen.getByText("have test");

    expect(iconElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  it("When delete Allmessages, Should play fade-out-animation during 0.5s", () => {
    const deleteAllMessagesMock = vi.fn();

    const { container } = render(
      <ToastContainer
        messageList={[
          {
            id: "1",
            icon: "✅",
            messages: ["passed the test"],
            link: "have test",
          },
        ]}
        deleteMessage={() => {}}
        deleteAllMessages={deleteAllMessagesMock}
      />,
    );

    const deleteAllbutton = screen.getByText("모두 지우기").parentElement;

    vi.useFakeTimers();

    act(() => {
      fireEvent.click(deleteAllbutton);
    });

    expect(container.firstChild).toHaveClass("animate-fade-out-bottom");

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(deleteAllMessagesMock).toHaveBeenCalled();

    const hasNoPendingTimers = vi.getTimerCount() === 0;
    expect(hasNoPendingTimers).toBe(true);
  });
});
