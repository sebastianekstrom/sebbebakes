import { render, screen, fireEvent } from "@testing-library/react";
import { ViewModeToggle, type ViewMode } from "./ViewModeToggle";

describe("ViewModeToggle", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with map mode active", () => {
    render(<ViewModeToggle activeMode="map" onChange={mockOnChange} />);

    expect(screen.getByText("Map")).toBeInTheDocument();
    expect(screen.getByText("Grid")).toBeInTheDocument();

    const mapButton = screen.getByText("Map").closest("button");
    expect(mapButton).toHaveClass("bg-brand");

    const gridButton = screen.getByText("Grid").closest("button");
    expect(gridButton).toHaveClass("bg-brand-secondary");
  });

  it("renders the component with grid mode active", () => {
    render(<ViewModeToggle activeMode="grid" onChange={mockOnChange} />);

    const mapButton = screen.getByText("Map").closest("button");
    expect(mapButton).toHaveClass("bg-brand-secondary");

    const gridButton = screen.getByText("Grid").closest("button");
    expect(gridButton).toHaveClass("bg-brand");
  });

  it("calls onChange with 'map' when map button is clicked", () => {
    render(<ViewModeToggle activeMode="grid" onChange={mockOnChange} />);

    const mapButton = screen.getByText("Map").closest("button");
    fireEvent.click(mapButton as HTMLElement);

    expect(mockOnChange).toHaveBeenCalledWith("map");
  });

  it("calls onChange with 'grid' when grid button is clicked", () => {
    render(<ViewModeToggle activeMode="map" onChange={mockOnChange} />);

    const gridButton = screen.getByText("Grid").closest("button");
    fireEvent.click(gridButton as HTMLElement);

    expect(mockOnChange).toHaveBeenCalledWith("grid");
  });
});
