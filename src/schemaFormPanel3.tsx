import React from 'react'
import { SchemaFormPanel3Props } from './interfaces'
import Preview from './preview'

const SchemaFormPanel3: React.FC<SchemaFormPanel3Props> = ({
  formData,
  generatedHtml,
}) => {
  return (
    <div className="panel live-preview">
      <h2>Live preview:</h2>
      <Preview formData={formData} />
      <h2>Generated HTML:</h2>
      <textarea value={generatedHtml} readOnly rows={5} />
    </div>
  )
}

export default SchemaFormPanel3
