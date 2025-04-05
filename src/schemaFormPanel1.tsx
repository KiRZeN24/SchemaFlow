import React from 'react'
import './schemaFormPanel1.css'

interface Props {
  onSchemaTypeChange: (schemaType: string) => void
}
const SchemaFormPanel1: React.FC<Props> = ({ onSchemaTypeChange }) => {
  const handleSchemaTypeChange = (value: string) => {
    onSchemaTypeChange(value)
  }

  return (
    <div className="panel">
      <label>
        Schema type:
        <select onChange={(e) => handleSchemaTypeChange(e.target.value)}>
          <option value="1">Title with subtitles, and active subtitle</option>
          <option value="2">Horizontal items with arrows</option>
        </select>
      </label>
    </div>
  )
}

export default SchemaFormPanel1
