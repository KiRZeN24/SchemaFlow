import React from 'react'
import { FormData } from './interfaces'

interface PreviewSchemaType1Props {
  units: FormData['units']
  active: FormData['active']
}

const PreviewSchemaType1: React.FC<PreviewSchemaType1Props> = ({
  units,
  active,
}) => {
  return (
    <>
      {units.map((unit) => (
        <div
          key={unit.id}
          className={`subtitle ${active === unit.id ? 'selected' : ''}`}>
          {unit.title}
        </div>
      ))}
    </>
  )
}

export default PreviewSchemaType1

