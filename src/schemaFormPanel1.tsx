import React from 'react'
import './schemaFormPanel1.css'
import { SchemaFormPanel1Props } from './interfaces'

const SchemaFormPanel1: React.FC<SchemaFormPanel1Props> = ({
  onSchemaTypeChange,
  onLoadJSON,
  onClearAll,
  currentFormData,
}) => {
  const handleSchemaTypeChange = (value: string) => {
    onSchemaTypeChange(value)
  }

  const loadJSON = () => {
    const promptJSON = prompt('Insert a JSON')
    if (promptJSON !== null) {
      onLoadJSON(promptJSON)
    }
  }

  const clearAll = () => {
    onClearAll()
  }

  return (
    <div className="panel">
      <button onClick={loadJSON}>Load JSON</button>
      <button onClick={clearAll}>Clear all</button>
      <label>
        Schema type:
        <select
          value={String(currentFormData.schemaType)}
          onChange={(e) => handleSchemaTypeChange(e.target.value)}>
          <option value="1">Title with subtitles, and active subtitle</option>
          <option value="2">Horizontal items with arrows</option>
        </select>
      </label>
    </div>
  )
}

export default SchemaFormPanel1
