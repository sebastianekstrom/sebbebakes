import React from "react";
import { render, screen } from "../../../tooling/tests";
import Piefection from "pages/guides/piefection";

describe("Piefection page", () => {
  it("renders title correctly", () => {
    render(<Piefection />);
    const title = screen.queryAllByText(/The Art of Pie-fection/i);
    expect(title).toBeDefined();
  });

  it("renders the ingress text", () => {
    render(<Piefection />);
    const ingress = screen.queryAllByText(/Ah, pizza—the culinary equivalent/i);
    expect(ingress).toBeDefined();
  });

  it("renders some steps", () => {
    render(<Piefection />);
    const step = screen.queryAllByText(
      /Hosting a pizza party can feel like herding/i
    );
    expect(step).toBeDefined();
  });
});
