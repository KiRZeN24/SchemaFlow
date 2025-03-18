import React from 'react'
import './schemaPreview.css'
import { FormData } from './interfaces'

interface SchemaPreviewProps {
  formData: FormData
}

const SchemaPreview: React.FC<SchemaPreviewProps> = ({ formData }) => {
  return (
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
  )
}

export default SchemaPreview

