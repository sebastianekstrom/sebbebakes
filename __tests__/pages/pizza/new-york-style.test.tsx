import React from "react";
import { render, screen } from "../../../tooling/tests";
import NYStyle from "pages/pizza/new-york-style";

describe("NYStyle page", () => {
  it("renders title correctly", () => {
    render(<NYStyle />);
    const title = screen.queryAllByText(/New York style pizza dough/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<NYStyle />);
    const ingress = screen.queryAllByText(
      /This New York-style pizza is all about/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<NYStyle />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<NYStyle />);
    const step = screen.queryAllByText(
      /Knead the dough. If using a stand mixer/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<NYStyle />);
    const alert = screen.queryAllByText(/I usually go for 280g/i);
    expect(alert).toBeDefined();
  });
});
