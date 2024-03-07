import React from "react";
import Sebbys from "pages/pizza/sebbys";
import { render, screen } from "../../../tooling/tests";

import "@testing-library/jest-dom";

describe("Sebbys page", () => {
  it("renders title correctly", () => {
    render(<Sebbys />);
    const title = screen.queryAllByText(/Sebby's/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Sebbys />);
    const ingress = screen.queryAllByText(
      /Every Swede knows about the glorious/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<Sebbys />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<Sebbys />);
    const step = screen.queryAllByText(/Make the bolognese/i);
    expect(step).toBeDefined();
  });

  it("renders the alert with the correct description", () => {
    render(<Sebbys />);
    const alert = screen.queryAllByText(
      /I make my mirepoix with the 1:2:1 ratio/i
    );
    expect(alert).toBeDefined();
  });
});
