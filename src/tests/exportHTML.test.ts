import { describe, expect, it } from "vitest";
import { exportHTML, Course } from "../exportHTML";

describe("exportHTML", () => {
  it("should create the h1 for the course title", () => {
    const data: Course = {
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
  it('Deberiamos convertir la propiedad Unidades', () => {
    const data ={"course":"ofimática","units":[{"id":1,"title":"conceptos basicos"},{"id":2,"title":"tablas de unidades"},{"id":3,"title":"correcion ortografica"}],"active":2}
    const resultHtml=exportHTML(data);
    expect(resultHtml).toContain('<ul><li>conceptos basicos</li><li><strong>tablas de unidades</strong></li><li>correcion ortografica</li></ul>')
  })
});
