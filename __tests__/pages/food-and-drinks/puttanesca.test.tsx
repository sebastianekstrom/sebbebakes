import React from "react";
import { render, screen } from "../../../tooling/tests";
import Puttanesca from "pages/food-and-drinks/puttanesca";

describe("Puttanesca page", () => {
  it("renders title correctly", () => {
    render(<Puttanesca />);
    const title = screen.queryAllByText(/Pasta alla puttanesca/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Puttanesca />);
    const ingress = screen.queryAllByText(
      /Pasta alla puttanesca is a rustic, hearty dish from southern/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<Puttanesca />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<Puttanesca />);
    const step = screen.queryAllByText(/Begin by prepping your ingredients/i);
    expect(step).toBeDefined();
  });
});
