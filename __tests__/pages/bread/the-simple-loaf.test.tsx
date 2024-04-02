import React from "react";
import { render, screen } from "../../../tooling/tests";
import SimpleLoaf from "pages/bread/the-simple-loaf";

describe("SimpleLoaf page", () => {
  it("renders title correctly", () => {
    render(<SimpleLoaf />);
    const title = screen.queryAllByText(/The simple loaf/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<SimpleLoaf />);
    const ingress = screen.queryAllByText(
      /A basic, simple and delicious loaf/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<SimpleLoaf />);
    const step = screen.queryAllByText(/Mix the dry ingredients/i);
    expect(step).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<SimpleLoaf />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
