import { exportHTMLSchemaType1 } from './exportHTMLSchemaType1'
import { exportHTMLSchemaType2 } from './exportHTMLSchemaType2'
import { Course } from './interfaces'

export function exportHTML(data: Course) {
  switch (data.schemaType) {
    case 1:
      return exportHTMLSchemaType1(data)
      break

    case 2:
      return exportHTMLSchemaType2(data)
      break
  }
  return exportHTMLSchemaType1(data)
}

