import React from "react";
import { render, screen } from "../../../tooling/tests";
import HamburgerBun from "pages/bread/hamburger-bun";

describe("HamburgerBun page", () => {
  it("renders title correctly", () => {
    render(<HamburgerBun />);
    const title = screen.queryAllByText(/Hamburger bun/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<HamburgerBun />);
    const ingress = screen.queryAllByText(
      /These are the perfect buns for a smashed burger/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<HamburgerBun />);
    const step = screen.queryAllByText(/Boil the baked potato until soft/i);
    expect(step).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<HamburgerBun />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
