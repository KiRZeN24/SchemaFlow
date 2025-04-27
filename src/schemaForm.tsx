import React, { useState } from 'react'
import { validateJson } from './validateJson'
import { exportHTML } from './exportHTML'
import { FormData } from './interfaces'
import SchemaFormPanel1 from './schemaFormPanel1'
import SchemaFormPanel2 from './schemaFormPanel2'
import SchemaFormPanel3 from './schemaFormPanel3'
import './schemaForm.css'

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
      const newUnit = {
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
    let newUnitId = unitId
    if (formData.active === unitId) {
      newUnitId = 0
    }
    setFormData({ ...formData, active: newUnitId })
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

  const saveEdit = () => {
    if (editingIndex !== null) {
      const newUnits = [...formData.units]
      newUnits[editingIndex].title = editText
      setFormData({ ...formData, units: newUnits })
      setEditingIndex(null)
    }
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

  const handleLoadJSON = (value: string) => {
    if (validateJson(value)) {
      setFormData(JSON.parse(value))
      setError('')
    } else {
      setError('Invalid schema data. Please check the form.')
    }
  }

  const handleClearAll = () => {
    setFormData({
      schemaType: 1,
      course: '',
      active: 0,
      units: [],
    })
  }

  return (
    <div className="container">
      <SchemaFormPanel1
        onSchemaTypeChange={handleSchemaTypeChange}
        onLoadJSON={handleLoadJSON}
        onClearAll={handleClearAll}
        currentFormData={formData}
      />

      <SchemaFormPanel2
        formData={formData}
        newSubtitle={newSubtitle}
        setNewSubtitle={setNewSubtitle}
        handleInputChange={handleInputChange}
        handleAddSubtitle={handleAddSubtitle}
        handleSetActive={handleSetActive}
        handleRemoveSubtitle={handleRemoveSubtitle}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        startEditing={startEditing}
        editingIndex={editingIndex}
        editText={editText}
        setEditText={setEditText}
        saveEdit={saveEdit}
        handleGenerateHTML={handleGenerateHTML}
        error={error}
      />

      <SchemaFormPanel3 formData={formData} generatedHtml={generatedHtml} />
    </div>
  )
}

export default SchemaForm
