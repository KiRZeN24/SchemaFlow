import React from 'react'
import './schemaFormPanel1.css'

interface Props {
  onSchemaTypeChange: (schemaType: string) => void
  onLoadJSON: (value: string) => void
}
const SchemaFormPanel1: React.FC<Props> = ({
  onSchemaTypeChange,
  onLoadJSON,
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

  return (
    <div className="panel">
      <button onClick={loadJSON}>Load JSON</button>
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
