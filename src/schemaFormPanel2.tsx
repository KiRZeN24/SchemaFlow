import React from 'react'
import { FormData } from './interfaces'
import { FaTrash, FaArrowUp, FaArrowDown, FaEdit } from 'react-icons/fa'
import './schemaFormPanel2.css'

interface SchemaFormPanel2Props {
  formData: FormData
  newSubtitle: string
  editingIndex: number | null
  editText: string
  error: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onAddSubtitle: () => void
  onSetActive: (unitId: number) => void
  onRemoveSubtitle: (unitId: number) => void
  onMoveUp: (index: number) => void
  onMoveDown: (index: number) => void
  onStartEditing: (index: number) => void
  onEditTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSaveEdit: () => void
  onGenerateHTML: () => void
  onNewSubtitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SchemaFormPanel2: React.FC<SchemaFormPanel2Props> = ({
  formData,
  newSubtitle,
  editingIndex,
  editText,
  error,
  onInputChange,
  onAddSubtitle,
  onSetActive,
  onRemoveSubtitle,
  onMoveUp,
  onMoveDown,
  onStartEditing,
  onEditTextChange,
  onSaveEdit,
  onGenerateHTML,
  onNewSubtitleChange,
}) => {
  return (
    <div className="panel">
      <label>
        Main Title:
        <input type="text" value={formData.course} onChange={onInputChange} />
      </label>
      <label>
        Add Subtitle:
        <input type="text" value={newSubtitle} onChange={onNewSubtitleChange} />
        <button onClick={onAddSubtitle}>Add</button>
      </label>
      <label>Set Active Subtitle</label>
      <ul>
        {formData.units.map((unit, index) => (
          <li key={unit.id} className="subtitle-item">
            {editingIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={onEditTextChange}
                onBlur={onSaveEdit}
                autoFocus
              />
            ) : (
              <button onClick={() => onSetActive(unit.id)}>
                {unit.title}
                {formData.active === unit.id ? ' (active)' : ''}
              </button>
            )}

            <div className="subtitle-buttons">
              <button
                onClick={() => onRemoveSubtitle(unit.id)}
                aria-label="Remove">
                <FaTrash />
              </button>
              <button onClick={() => onMoveUp(index)} aria-label="Move Up">
                <FaArrowUp />
              </button>
              <button onClick={() => onMoveDown(index)} aria-label="Move Down">
                <FaArrowDown />
              </button>
              <button onClick={() => onStartEditing(index)} aria-label="Edit">
                <FaEdit />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={onGenerateHTML}>Generate HTML</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default SchemaFormPanel2
