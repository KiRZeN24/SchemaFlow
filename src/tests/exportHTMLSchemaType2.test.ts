import { describe, expect, it } from 'vitest'
import { exportHTML } from '../exportHTML'
import { Course } from '../interfaces'

describe('exportHTML', () => {
  it('should create the arrows of the schemaType 2 and the flex horizontal style in the ul tag', () => {
    const data: Course = {
      schemaType: 2,
      course: 'Ofimática',
      units: [
        { id: 1, title: 'conceptos básicos' },
        { id: 2, title: 'tablas de unidades' },
        { id: 3, title: 'corrección ortográfica' },
      ],
      active: 2,
    }

    const resultHtml = exportHTML(data)

    expect(resultHtml).toContain(`➡️`)
    expect(resultHtml).toContain(
      `<ul style="padding: 0; margin: 0; display: flex; list-style: none;">`,
    )
  })

  it('should be the JSON included as a comment in the HTML', () => {
    const data: Course = {
      schemaType: 2,
      course: 'Ofimática',
      units: [
        { id: 1, title: 'conceptos básicos' },
        { id: 2, title: 'tablas de unidades' },
        { id: 3, title: 'corrección ortográfica' },
      ],
      active: 2,
    }

    const resultHtml = exportHTML(data)

    expect(resultHtml).toContain(
      `<!-- {"schemaType":2,"course":"Ofimática","units":[{"id":1,"title":"conceptos básicos"},{"id":2,"title":"tablas de unidades"},{"id":3,"title":"corrección ortográfica"}],"active":2} -->`,
    )
  })
})
