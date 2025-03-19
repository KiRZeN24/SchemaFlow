import React from 'react'
import { FormData } from './interfaces'
import PreviewSchemaType1 from './previewSchemaType1'
import PreviewSchemaType2 from './previewSchemaType2'
import './preview.css'

interface PreviewProps {
  formData: FormData
}

const Preview: React.FC<PreviewProps> = ({ formData }) => {
  return (
    <div className="schema-preview">
      <div className="title">{formData.course || 'Main Title'}</div>
      {formData.schemaType === 1 ? (
        <PreviewSchemaType1 units={formData.units} active={formData.active} />
      ) : (
        <PreviewSchemaType2 units={formData.units} active={formData.active} />
      )}
    </div>
  )
}

export default Preview

