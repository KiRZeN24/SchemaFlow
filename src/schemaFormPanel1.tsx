import React from 'react'
import './schemaFormPanel1.css'
import { FormData } from './interfaces'

interface Props {
  onSchemaTypeChange: (schemaType: string) => void
  onLoadJSON: (value: string) => void
  onClearAll: () => void
  currentFormData: FormData
}
const SchemaFormPanel1: React.FC<Props> = ({
  onSchemaTypeChange,
  onLoadJSON,
  onClearAll,
  currentFormData,
}) => {
  const handleSchemaTypeChange = (value: string) => {
    onSchemaTypeChange(value)
  }
  const loadJSON = () => {
    const promptJSON = prompt('insert a JSON')
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
