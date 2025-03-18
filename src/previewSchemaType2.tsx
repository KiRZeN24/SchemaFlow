import React from 'react'
import { FormData } from './interfaces'

interface PreviewSchemaType2Props {
  units: FormData['units']
  active: FormData['active']
}

const PreviewSchemaType2: React.FC<PreviewSchemaType2Props> = ({
  units,
  active,
}) => {
  return (
    <ul style={{ display: 'flex', padding: 0, margin: 0, listStyle: 'none' }}>
      {units.map((unit, index) => (
        <li key={unit.id} style={{ display: 'flex', alignItems: 'center' }}>
          <span className={`subtitle ${active === unit.id ? 'selected' : ''}`}>
            {unit.title}
          </span>
          {index < units.length - 1 && (
            <span style={{ margin: '0 10px' }}> ➡️ </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default PreviewSchemaType2

