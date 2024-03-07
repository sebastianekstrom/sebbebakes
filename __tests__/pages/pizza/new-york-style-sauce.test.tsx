import React from "react";
import { render, screen } from "../../../tooling/tests";
import NYSauce from "pages/pizza/new-york-style-sauce";

describe("NYSauce page", () => {
  it("renders title correctly", () => {
    render(<NYSauce />);
    const title = screen.queryAllByText(/New York style pizza sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<NYSauce />);
    const ingress = screen.queryAllByText(
      /This tomato sauce is quite salty to balance the sweetness/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<NYSauce />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<NYSauce />);
    const step = screen.queryAllByText(
      /Add all the ingredients in a container/i
    );
    expect(step).toBeDefined();
  });
});
