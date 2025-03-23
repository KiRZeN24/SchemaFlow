import React, { useState } from 'react'
import { validateJson } from './validateJson'
import { exportHTML } from './exportHTML'
import { FormData, Unit } from './interfaces'
import Preview from './preview'
import './schemaForm.css'
import { FaTrash, FaArrowUp, FaArrowDown, FaEdit } from 'react-icons/fa'

const SchemaForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    schemaType: 1,
    course: '',
    active: 0,
    units: [],
  })
  const [newSubtitle, setNewSubtitle] = useState('')
  const [error, setError] = useState('')
  const [generatedHtml, setGeneratedHtml] = useState<string>('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

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

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const newUnits = [...formData.units]
      ;[newUnits[index], newUnits[index - 1]] = [
        newUnits[index - 1],
        newUnits[index],
      ]
      setFormData({ ...formData, units: newUnits })
    }
  }

  const handleMoveDown = (index: number) => {
    if (index < formData.units.length - 1) {
      const newUnits = [...formData.units]
      ;[newUnits[index], newUnits[index + 1]] = [
        newUnits[index + 1],
        newUnits[index],
      ]
      setFormData({ ...formData, units: newUnits })
    }
  }
  const startEditing = (index: number) => {
    setEditingIndex(index)
    setEditText(formData.units[index].title)
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

  const handleSchemaTypeChange = (value: string) => {
    setFormData({
      ...formData,
      schemaType: Number(value),
    })
  }

  return (
    <div className="container">
      <div className="panel">
        <label>
          Schema type:
          <select onChange={(e) => handleSchemaTypeChange(e.target.value)}>
            <option value="1">Title with subtitles, and active subtitle</option>
            <option value="2">Horizontal items with arrows</option>
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
        <Preview formData={formData} />
        <h2>Generated HTML:</h2>
        <textarea value={generatedHtml} readOnly rows={5} />
      </div>
    </div>
  )
}

export default SchemaForm
