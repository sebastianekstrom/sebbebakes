import { render, screen } from "../../tooling/tests";
import Home from "pages/index";

describe("Home", () => {
  it("renders recipe titles", () => {
    render(<Home />);
    expect(screen.getByText("Pasta Bolognese")).toBeDefined();
    expect(screen.getByText("Birria tacos")).toBeDefined();
  });

  it("renders category sections", () => {
    render(<Home />);
    expect(screen.getByText("More delicious pizza")).toBeDefined();
    expect(screen.getByText("Mmmm... bread")).toBeDefined();
  });
});
