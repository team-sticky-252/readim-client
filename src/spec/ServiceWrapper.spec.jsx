import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ServiceWrapper from "../components/Service/ServiceWrapper";

vi.mock("../components/Service/TestService", () => ({
  default: () => <div data-testid="test-service">Test Service</div>,
}));

vi.mock("../components/Service/ResultService", () => ({
  default: () => null,
}));
vi.mock("../components/Service/DescriptionService", () => ({
  default: () => null,
}));

describe("Test ServiceWrapper Component", () => {
  it('renders TestService when statement is "test"', () => {
    render(
      <MemoryRouter initialEntries={["/service/test"]}>
        <Routes>
          <Route path="/service/:serviceId" element={<ServiceWrapper />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("test-service")).toBeInTheDocument();
  });
});
