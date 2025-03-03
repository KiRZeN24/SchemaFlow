import { render, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../navbar";

describe("Navbar", () => {
  it("renders the title correctly", () => {
    const { container } = render(<Navbar />);
    expect(within(container).getByText("SchemaFlow")).toBeInTheDocument();
  });
});

