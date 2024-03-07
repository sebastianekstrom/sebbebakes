import React from "react";
import { render, screen } from "../../../tooling/tests";
import BurgerSauce from "pages/food-and-drinks/burger-sauce";

describe("BurgerSauce page", () => {
  it("renders title correctly", () => {
    render(<BurgerSauce />);
    const title = screen.queryAllByText(/The Burger Sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BurgerSauce />);
    const ingress = screen.queryAllByText(
      /A delicious mix of creamy mayo, spicy sriracha, tangy garlic pickles/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<BurgerSauce />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<BurgerSauce />);
    const step = screen.queryAllByText(
      /Finely chop onion and pickles, then place in a mixing/i
    );
    expect(step).toBeDefined();
  });
});
