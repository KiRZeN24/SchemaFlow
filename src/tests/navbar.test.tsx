import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../navbar";

describe("Navbar", () => {
  it("renders the title correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("SchemaFlow")).toBeInTheDocument();
  });


});

