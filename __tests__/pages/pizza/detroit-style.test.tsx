import React from "react";
import { render, screen } from "../../../tooling/tests";
import DetroitStyle from "pages/pizza/detroit-style";

describe("DetroitStyle page", () => {
  it("renders title correctly", () => {
    render(<DetroitStyle />);
    const title = screen.queryAllByText(/Detroit style pizza/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<DetroitStyle />);
    const ingress = screen.queryAllByText(
      /The Detroit style pizza is a deep-dish pizza/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<DetroitStyle />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<DetroitStyle />);
    const step = screen.queryAllByText(
      /Adjust oven rack to lowest position and preheat/i
    );
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<DetroitStyle />);
    const alert = screen.queryAllByText(/Remember to over season your sauce/i);
    expect(alert).toBeDefined();
  });
});
