import React from "react";
import { render, screen } from "../../../tooling/tests";
import JalapenoDip from "pages/food-and-drinks/jalapeno-dip";

describe("JalapenoDip page", () => {
  it("renders title correctly", () => {
    render(<JalapenoDip />);
    const title = screen.queryAllByText(/Jalapeño dip/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<JalapenoDip />);
    const ingress = screen.queryAllByText(
      /This dip, with its zesty jalapeño and hint of garlic/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<JalapenoDip />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<JalapenoDip />);
    const step = screen.queryAllByText(
      /Start by prepping all the ingredients/i
    );
    expect(step).toBeDefined();
  });
});
