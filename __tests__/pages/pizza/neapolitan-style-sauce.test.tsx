import React from "react";
import { render, screen } from "../../../tooling/tests";
import NeopolitanSauce from "pages/pizza/neapolitan-style-sauce";

describe("NeopolitanSauce page", () => {
  it("renders title correctly", () => {
    render(<NeopolitanSauce />);
    const title = screen.queryAllByText(/Neapolitan style pizza sauce/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<NeopolitanSauce />);
    const ingress = screen.queryAllByText(
      /There's a lot of variants for the tomato sauce/i
    );
    expect(ingress).toBeDefined();
  });

  it("renders the correct ingredients", () => {
    render(<NeopolitanSauce />);
    const ingredientList = screen.getByTestId("INGREDIENT_LIST");
    expect(ingredientList).toMatchSnapshot();
  });

  it("renders the method steps", () => {
    render(<NeopolitanSauce />);
    const step = screen.queryAllByText(/When the pan has heated up, add the/i);
    expect(step).toBeDefined();
  });
});
