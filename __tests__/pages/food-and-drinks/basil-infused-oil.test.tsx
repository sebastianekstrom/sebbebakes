import React from "react";
import { render, screen } from "../../../tooling/tests";
import BasilInfusedOil from "pages/food-and-drinks/basil-infused-oil";

describe("BasilInfusedOil page", () => {
  it("renders title correctly", () => {
    render(<BasilInfusedOil />);
    const title = screen.queryAllByText(/Basil-infused oil/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BasilInfusedOil />);
    const ingress = screen.queryAllByText(/Elevate your meals with this easy/i);
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<BasilInfusedOil />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<BasilInfusedOil />);
    const step = screen.queryAllByText(/In a mixing container, combine/i);
    expect(step).toBeDefined();
  });
});
