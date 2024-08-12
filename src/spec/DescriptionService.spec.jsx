import { render } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import DescriptionService from "../components/Service/DescriptionService";

vi.mock("../components/shared/Service/Service", () => ({
  default: ({ isDisabledButton }) => (
    <div data-testid="service-component" data-disabled={isDisabledButton} />
  ),
}));

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

test("DescriptionService renders with isDisabledButton set to false", () => {
  const { getByTestId } = render(
    <DescriptionService navigateNextPage={() => {}} statement="test" />,
  );

  const serviceComponent = getByTestId("service-component");
  expect(serviceComponent.dataset.disabled).toBe("false");
});
