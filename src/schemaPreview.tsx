import React from 'react'
import { FormData } from './interfaces'
import './schemaPreview.css'

interface SchemaPreviewProps {
  formData: FormData
}

const SchemaPreview: React.FC<SchemaPreviewProps> = ({ formData }) => {
  return (
    <div className="schema-preview">
      <div className="title">{formData.course || 'Main Title'}</div>
      {formData.schemaType === 1 &&
        formData.units.map((unit) => (
          <div
            key={unit.id}
            className={`subtitle ${
              formData.active === unit.id ? 'selected' : ''
            }`}>
            {unit.title}
          </div>
        ))}
      {formData.schemaType === 2 && (
        <ul
          style={{ display: 'flex', padding: 0, margin: 0, listStyle: 'none' }}>
          {formData.units.map((unit, index) => (
            <li key={unit.id} style={{ display: 'flex', alignItems: 'center' }}>
              <span
                className={`subtitle ${
                  formData.active === unit.id ? 'selected' : ''
                }`}>
                {unit.title}
              </span>
              {index < formData.units.length - 1 && (
                <span style={{ margin: '0 10px' }}> ➡️ </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SchemaPreview

