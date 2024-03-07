import React from "react";
import { render, screen } from "../../../tooling/tests";
import BanhMiBun from "pages/bread/banh-mi-bun";

describe("BanhMiBun page", () => {
  it("renders title correctly", () => {
    render(<BanhMiBun />);
    const title = screen.queryAllByText(/Bánh mì bun/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<BanhMiBun />);
    const ingress = screen.queryAllByText(
      /This iconic Vietnamese bread is known/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the ingredients", () => {
    render(<BanhMiBun />);
    const waterLabel = screen.queryAllByText(/Water/i);
    const eggLabel = screen.queryAllByText(/Egg/i);
    expect(waterLabel).toBeDefined();
    expect(eggLabel).toBeDefined();
  });

  it("renders the method steps", () => {
    render(<BanhMiBun />);
    const step = screen.queryAllByText(
      /Start by melting the butter over low heat/i
    );
    expect(step).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<BanhMiBun />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });
});
