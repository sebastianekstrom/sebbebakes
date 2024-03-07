import React from "react";
import { render, screen } from "../../../tooling/tests";
import DriedCitrus from "pages/food-and-drinks/dried-citrus";

describe("DriedCitrus page", () => {
  it("renders title correctly", () => {
    render(<DriedCitrus />);
    const title = screen.queryAllByText(/Dried citrus/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<DriedCitrus />);
    const ingress = screen.queryAllByText(
      /Take your cocktails to the next level/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<DriedCitrus />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<DriedCitrus />);
    const step = screen.queryAllByText(
      /Slice the citrus fruit into thin rounds/i
    );
    expect(step).toBeDefined();
  });
});
