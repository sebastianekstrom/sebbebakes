import React from "react";
import { render, screen } from "../../../tooling/tests";
import BuffaloChickenWing from "pages/food-and-drinks/buffalo-chicken-wing-sauce";

describe("BuffaloChickenWing page", () => {
  it("renders title correctly", () => {
    render(<BuffaloChickenWing />);
    const title = screen.queryAllByText(/Buffalo Chicken Wing Sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BuffaloChickenWing />);
    const ingress = screen.queryAllByText(/Get ready to rock your taste buds/i);
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<BuffaloChickenWing />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<BuffaloChickenWing />);
    const step = screen.queryAllByText(
      /Generously smother your crispy chicken/i
    );
    expect(step).toBeDefined();
  });
});
