import React from "react";
import { render, screen } from "../../../tooling/tests";
import BirriaTacos from "pages/food-and-drinks/birria-tacos";

describe("BirriaTacos page", () => {
  it("renders title correctly", () => {
    render(<BirriaTacos />);
    const title = screen.queryAllByText(/Birria tacos/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BirriaTacos />);
    const ingress = screen.queryAllByText(
      /These tacos are a standout in the world of Mexican cuisine/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<BirriaTacos />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<BirriaTacos />);
    const step = screen.queryAllByText(/De-seed and de-stem the chilis/i);
    expect(step).toBeDefined();
  });
});
