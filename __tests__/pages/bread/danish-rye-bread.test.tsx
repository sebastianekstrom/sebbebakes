import React from "react";
import { render, screen } from "../../../tooling/tests";
import Danish from "pages/bread/danish-rye-bread";

describe("Danish page", () => {
  it("renders title correctly", () => {
    render(<Danish />);
    const title = screen.queryAllByText(/Danish rye brad/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Danish />);
    const ingress = screen.queryAllByText(
      /A delicious sweet Danish rye bread that/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<Danish />);
    const step = screen.queryAllByText(/Grind the anise and fennel/i);
    expect(step).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<Danish />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
