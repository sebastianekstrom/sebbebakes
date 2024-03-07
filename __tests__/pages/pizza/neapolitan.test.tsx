import React from "react";
import { render, screen } from "../../../tooling/tests";
import Neapolitan from "pages/pizza/neapolitan";

describe("Neapolitan page", () => {
  it("renders title correctly", () => {
    render(<Neapolitan />);
    const title = screen.queryAllByText(/Neapolitan style pizza dough/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Neapolitan />);
    const ingress = screen.queryAllByText(/The classic of the classics/i);
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<Neapolitan />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<Neapolitan />);
    const step = screen.queryAllByText(
      /Transfer the dough to a lightly oiled bowl/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<Neapolitan />);
    const alert = screen.queryAllByText(/For optimal results I recommend/i);
    expect(alert).toBeDefined();
  });
});
