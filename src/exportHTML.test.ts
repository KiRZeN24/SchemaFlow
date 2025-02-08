import { describe, expect, it } from "vitest";
import { exportHTML, CourseData } from "./exportHTML";

describe("exportHTML", () => {
  it("should create the h1 for the course title", () => {
    const data: CourseData = {
      course: "Essential Office Skills for Beginners",
      units: [
        { id: 1, title: "basic concepts" },
        { id: 2, title: "creating tables" },
        { id: 3, title: "orthographic correction" },
      ],
      active: 2,
    };
    const result = exportHTML(data);
    expect(result).toContain("<h1>Essential Office Skills for Beginners</h1>");
  });
});
