import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SchemaForm from "../SchemaForm";

describe("SchemaForm", () => {
    it('renders the form with all fields', () => {
        render(<SchemaForm />);

        expect(screen.getByRole('schemaForm')).toBeInTheDocument();
    });
});