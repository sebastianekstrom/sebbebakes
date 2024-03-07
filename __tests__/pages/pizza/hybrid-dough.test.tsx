import React from "react";
import { render, screen } from "../../../tooling/tests";
import HybridDough from "pages/pizza/hybrid-dough";

describe("HybridDough page", () => {
  it("renders title correctly", () => {
    render(<HybridDough />);
    const title = screen.queryAllByText(/The hybrid pizza dough/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<HybridDough />);
    const ingress = screen.queryAllByText(
      /This dough is the result of me experimenting/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<HybridDough />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<HybridDough />);
    const step = screen.queryAllByText(
      /Place the poolish in the fridge for between/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<HybridDough />);
    const alert = screen.queryAllByText(/to see if the dough is ready/i);
    expect(alert).toBeDefined();
  });
});
