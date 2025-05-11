import React from 'react'

interface ItemsGeneratorProps {
  label?: string
  inputValue: string
  onInputChange: (value: string) => void
  onAdd: () => void
  placeholder?: string
  buttonLabel?: string
}

const ItemsGenerator: React.FC<ItemsGeneratorProps> = ({
  label = 'Add Item:',
  inputValue,
  onInputChange,
  onAdd,
  placeholder = '',
  buttonLabel = 'Add',
}) => {
  return (
    <label>
      {label}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={onAdd}>{buttonLabel}</button>
    </label>
  )
}

export default ItemsGenerator
