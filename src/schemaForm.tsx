import React, { useState } from 'react'
import { validateJson } from './validateJson'
import { exportHTML } from './exportHTML'
import { FormData, Unit } from './interfaces'
import './schemaForm.css'

const SchemaForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    course: '',
    active: 0,
    units: [],
  })
  const [newSubtitle, setNewSubtitle] = useState('')
  const [error, setError] = useState('')
  const [generatedHtml, setGeneratedHtml] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, course: e.target.value })
  }

  const handleAddSubtitle = () => {
    if (
      newSubtitle.trim() &&
      !formData.units.some((unit) => unit.title === newSubtitle)
    ) {
      const newUnit: Unit = {
        id: formData.units.length + 1,
        title: newSubtitle,
      }

      setFormData({
        ...formData,
        units: [...formData.units, newUnit],
      })
      setNewSubtitle('')
    }
  }

  const handleSetActive = (unitId: number) => {
    setFormData({ ...formData, active: unitId })
  }

  const handleRemoveSubtitle = (unitId: number) => {
    setFormData({
      ...formData,
      units: formData.units.filter((unit) => unit.id !== unitId),
      active: formData.active === unitId ? 0 : formData.active,
    })
  }

  const handleGenerateHTML = () => {
    if (validateJson(JSON.stringify(formData))) {
      const htmlOutput = exportHTML(formData)
      setGeneratedHtml(htmlOutput)
      setError('')
    } else {
      setError('Invalid schema data. Please check the form.')
    }
  }

  return (
    <div className="container">
      <div className="panel">
        <label>
          Schema type:
          <select>
            <option value="option1">
              Title with subtitles, and active subtitle
            </option>
            <option value="option2">Horizontal items with arrows</option>
          </select>
        </label>
      </div>

      <div className="panel">
        <label>
          Main Title:
          <input
            type="text"
            value={formData.course}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Add Subtitle:
          <input
            type="text"
            value={newSubtitle}
            onChange={(e) => setNewSubtitle(e.target.value)}
          />
          <button onClick={handleAddSubtitle}>Add</button>
        </label>

        <label>Set Active Subtitle:</label>
        <ul>
          {formData.units.map((unit) => (
            <li key={unit.id}>
              <button onClick={() => handleSetActive(unit.id)}>
                {unit.title} {formData.active === unit.id ? '(Active)' : ''}
              </button>
              <button onClick={() => handleRemoveSubtitle(unit.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button onClick={handleGenerateHTML}>Generate HTML</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      <div className="panel live-preview">
        <h2>Live preview:</h2>
        <div className="schema-preview">
          <div className="title">{formData.course || 'Main Title'}</div>
          {formData.units.map((unit) => (
            <div
              key={unit.id}
              className={`subtitle ${
                formData.active === unit.id ? 'selected' : ''
              }`}>
              {unit.title}
            </div>
          ))}
        </div>
        <h2>Generated HTML:</h2>
        <textarea value={generatedHtml} readOnly rows={5} />
      </div>
    </div>
  )
}

export default SchemaForm

