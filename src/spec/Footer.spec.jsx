import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect } from "vitest";

import OPTIMIZED_SITE_LIST from "../utils/optimizedSiteList";
import Footer from "../components/Footer/Footer";

describe("Footer", () => {
  let getByText;

  beforeEach(() => {
    const rendered = render(<Footer />);
    getByText = rendered.getByText;
  });

  it("Footer has shown all OptimizedSites", () => {
    OPTIMIZED_SITE_LIST.forEach((OptimizedSite) => {
      const linkElement = getByText(OptimizedSite.siteName);

      expect(linkElement).toBeInTheDocument();
    });
  });

  it("Footer remain Support Email address", () => {
    const supportEmail = screen.getByText("teamsticky252@gmail.com");

    expect(supportEmail).toBeInTheDocument();
  });
});
