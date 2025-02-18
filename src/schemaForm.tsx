import React, { useState } from "react";
import { validateJson } from "./validateJson";
import { exportHTML } from "./exportHTML";
import { FormData, Unit } from "./interfaces";
import "./schemaForm.css";

const SchemaForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    course: "",
    active: 0,
    units: [],
  });
  const [newSubtitle, setNewSubtitle] = useState("");
  const [error, setError] = useState("");
  const [generatedHtml, setGeneratedHtml] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, course: e.target.value });
  };

  const handleAddSubtitle = () => {
    if (newSubtitle.trim() && !formData.units.some(unit => unit.title === newSubtitle)) {
      const newUnit: Unit = { id: formData.units.length + 1, title: newSubtitle };

      setFormData({
        ...formData,
        units: [...formData.units, newUnit],
      });
      setNewSubtitle("");
    }
  };

  const handleSetActive = (unitId: number) => {
    setFormData({ ...formData, active: unitId });
  };

  const handleRemoveSubtitle = (unitId: number) => {
    setFormData({
      ...formData,
      units: formData.units.filter(unit => unit.id !== unitId),
      active: formData.active === unitId ? 0 : formData.active
    });
  };

  const handleGenerateHTML = () => {
    if (validateJson(JSON.stringify(formData))) {
      const htmlOutput = exportHTML(formData);
      setGeneratedHtml(htmlOutput);
      setError("");
    } else {
      setError("Invalid schema data. Please check the form.");
    }
  };

  return (
    <div>
      <h1>SchemaFlow</h1>
      <label>
        Main Title:
        <input type="text" value={formData.course} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Add Subtitle:
        <input
          type="text"
          value={newSubtitle}
          onChange={(e) => setNewSubtitle(e.target.value)}
        />
        <button onClick={handleAddSubtitle}>Add</button>
      </label>
      <br />

      <label>Set Active Subtitle:</label>
      <ul>
        {formData.units.map((unit) => (
          <li key={unit.id}>
            <button onClick={() => handleSetActive(unit.id)}>
              {unit.title} {formData.active === unit.id ? "(Active)" : ""}
            </button>
            <button onClick={() => handleRemoveSubtitle(unit.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <br />

      <button onClick={handleGenerateHTML}>Generate HTML</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {generatedHtml && (
        <div>
          <h2>Generated HTML:</h2>
          <pre style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
            {generatedHtml}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SchemaForm;
