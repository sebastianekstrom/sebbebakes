import React from "react";
import { render, screen } from "../../../tooling/tests";
import RasberryFudge from "pages/food-and-drinks/rasberry-fudge";

describe("RasberryFudge page", () => {
  it("renders title correctly", () => {
    render(<RasberryFudge />);
    const title = screen.queryAllByText(/Rasberry fudge/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<RasberryFudge />);
    const ingress = screen.queryAllByText(/A refreshing cocktail inspired by/i);
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<RasberryFudge />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<RasberryFudge />);
    const step = screen.queryAllByText(
      /Combine all ingredients in a shaker filled/i
    );
    expect(step).toBeDefined();
  });
});
