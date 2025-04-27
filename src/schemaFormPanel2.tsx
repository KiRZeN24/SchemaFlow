import React from 'react'
import { SchemaFormPanel2Props } from './interfaces'
import { FaTrash, FaArrowUp, FaArrowDown, FaEdit } from 'react-icons/fa'

const SchemaFormPanel2: React.FC<SchemaFormPanel2Props> = ({
  formData,
  newSubtitle,
  editText,
  editingIndex,
  handleInputChange,
  setNewSubtitle,
  handleAddSubtitle,
  handleSetActive,
  handleRemoveSubtitle,
  handleMoveUp,
  handleMoveDown,
  startEditing,
  saveEdit,
  setEditText,
  handleGenerateHTML,
}) => {
  return (
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
        {formData.units.map((unit, index) => (
          <li key={unit.id} className="subtitle-item">
            {editingIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={saveEdit}
                autoFocus
              />
            ) : (
              <button onClick={() => handleSetActive(unit.id)}>
                {unit.title} {formData.active === unit.id ? '(Active)' : ''}
              </button>
            )}
            <div className="subtitle-buttons">
              <button
                onClick={() => handleRemoveSubtitle(unit.id)}
                aria-label="Remove">
                <FaTrash />
              </button>
              <button onClick={() => handleMoveUp(index)} aria-label="Move Up">
                <FaArrowUp />
              </button>
              <button
                onClick={() => handleMoveDown(index)}
                aria-label="Move Down">
                <FaArrowDown />
              </button>
              <button onClick={() => startEditing(index)} aria-label="Edit">
                <FaEdit />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleGenerateHTML}>Generate HTML</button>
    </div>
  )
}

export default SchemaFormPanel2
