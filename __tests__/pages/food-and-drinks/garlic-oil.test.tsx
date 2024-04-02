import React from "react";
import { render, screen } from "../../../tooling/tests";
import GarlicOil from "pages/food-and-drinks/garlic-oil";

describe("GarlicOil page", () => {
  it("renders title correctly", () => {
    render(<GarlicOil />);
    const title = screen.queryAllByText(/Garlic oil/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<GarlicOil />);
    const ingress = screen.queryAllByText(
      /This garlic infused oil is perfect/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<GarlicOil />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
  it("renders the method steps", () => {
    render(<GarlicOil />);
    const step = screen.queryAllByText(/Peel the garlic and crush the cloves/i);
    expect(step).toBeDefined();
  });
});
