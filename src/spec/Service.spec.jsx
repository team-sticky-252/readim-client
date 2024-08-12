import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Service from "../components/shared/Service/Service";

describe("Test Service Component", () => {
  it("button should not be clickable when isDisabledButton is true", () => {
    const mockNextButtonClick = vi.fn();

    render(
      <Service
        title="Test Title"
        onNextButtonClick={mockNextButtonClick}
        isDisabledButton={true}
      >
        <div>Test content</div>
      </Service>,
    );

    const button = screen.getByText("✔️ 확인했어요");

    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(mockNextButtonClick).not.toHaveBeenCalled();
  });
});
