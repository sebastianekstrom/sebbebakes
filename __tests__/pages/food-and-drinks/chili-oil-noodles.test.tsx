import React from "react";
import { render, screen } from "../../../tooling/tests";
import ChiliOildNoodles from "pages/food-and-drinks/chili-oil-noodles";

describe("ChiliOildNoodles page", () => {
  it("renders title correctly", () => {
    render(<ChiliOildNoodles />);
    const title = screen.queryAllByText(/Chili oil noodles/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<ChiliOildNoodles />);
    const ingress = screen.queryAllByText(
      /This recipe is a quick and flavorful!/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<ChiliOildNoodles />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
  it("renders the method steps", () => {
    render(<ChiliOildNoodles />);
    const step = screen.queryAllByText(/Take a small piece of cheesecloth/i);
    expect(step).toBeDefined();
  });
});
