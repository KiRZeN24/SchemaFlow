import { exportHTMLSchema1 } from './exportSchemaType1'
import { exportHTMLSchema2 } from './exportSchemaType2'
import { Course } from './interfaces'

export function exportHTML(data: Course) {
  switch (data.schemaType) {
    case 1:
      return exportHTMLSchema1(data)
      break

    case 2:
      return exportHTMLSchema2(data)
      break
  }
  return exportHTMLSchema1(data)
}

