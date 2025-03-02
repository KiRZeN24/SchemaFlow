import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SchemaForm from "../schemaForm";
import { validateJson } from "../validateJson";
import { exportHTML } from "../exportHTML";

vi.mock("../validateJson", () => ({
  validateJson: vi.fn(() => ({ isValid: true, message: "Valid JSON" })),
}));

vi.mock("../exportHTML", () => ({
  exportHTML: vi.fn(() => "<h1>Generated HTML</h1>"),
}));

describe("SchemaForm", () => {
  it("renders the form correctly", () => {
    render(<SchemaForm />);
    expect(screen.getByText("SchemaFlow")).toBeInTheDocument();
    expect(screen.getByLabelText("Main Title:")).toBeInTheDocument();
    expect(screen.getByLabelText("Add Subtitle:")).toBeInTheDocument();
  });

  it("updates the main title", () => {
    render(<SchemaForm />);
    const input = screen.getByLabelText("Main Title:") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "My Course" } });
    expect(input.value).toBe("My Course");
  });

  it("adds a new subtitle", () => {
    render(<SchemaForm />);
  
    const input = screen.getByLabelText("Add Subtitle:");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Introduction" } });
    fireEvent.click(addButton);

    const subtitleButtons = screen.getAllByText("Introduction");

    expect(subtitleButtons.length).toBeGreaterThanOrEqual(2);
});

});
