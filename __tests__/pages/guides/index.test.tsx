import { render, screen } from "../../../tooling/tests";
import Guides from "pages/guides/index";

describe("Guides", () => {
  it("renders guide titles", () => {
    render(<Guides />);
    expect(screen.getByText("Gear for baking")).toBeDefined();
  });
});
