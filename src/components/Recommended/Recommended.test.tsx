import React from "react";
import { render, screen } from "@testing-library/react";
import { Recommended } from "./Recommended";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Recommended Component", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: "/",
      route: "/bread/baguette",
    });
  });

  it("renders correctly with valid props", () => {
    render(<Recommended title="Check these out!" category="bread" />);

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(3);
  });

  it("returns null of a category isn't passed", () => {
    const { container } = render(
      <Recommended title="Check these out!" category="" />
    );

    expect(container).toBeEmptyDOMElement();
  });
});
