import React from "react";
import { render, screen } from "../../../tooling/tests";
import GearForBaking from "pages/guides/gear-for-baking";

describe("GearForBaking page", () => {
  it("renders title correctly", () => {
    render(<GearForBaking />);
    const title = screen.queryAllByText(/Gear for baking/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<GearForBaking />);
    const ingress = screen.queryAllByText(/any gear to bake bread or pizzas/i);
    expect(ingress).toBeDefined();
  });
});
