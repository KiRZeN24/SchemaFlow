import { describe, expect, it } from 'vitest'
import { exportHTML } from '../exportHTML'
import { Course } from '../interfaces'

describe('exportHTML', () => {
  it('should create the course container with proper styling', () => {
    const data: Course = {
      schemaType: 1,
      course: 'Essential Office Skills for Beginners',
      units: [
        { id: 1, title: 'basic concepts' },
        { id: 2, title: 'creating tables' },
        { id: 3, title: 'orthographic correction' },
      ],
      active: 2,
    }

    const result = exportHTML(data)

    expect(result).toContain(
      `<div style="font-family: Arial, sans-serif; background-color: #333; color: white; padding: 20px; border-radius: 10px; width: fit-content;">`,
    )
    expect(result).toMatch(
      /<h1 .*?>\s*Essential Office Skills for Beginners\s*<\/h1>/,
    )
  })

  it('should convert the units property with proper styling', () => {
    const data: Course = {
      schemaType: 1,
      course: 'Ofimática',
      units: [
        { id: 1, title: 'conceptos básicos' },
        { id: 2, title: 'tablas de unidades' },
        { id: 3, title: 'corrección ortográfica' },
      ],
      active: 2,
    }

    const resultHtml = exportHTML(data)

    expect(resultHtml).toContain(`<ul style="padding: 0; margin: 0;">`)
    expect(resultHtml).toContain(
      `<span style="display: block; background: #6a8; color: white; padding: 10px; border-radius: 5px; margin-top: 5px; font-size: 1em; font-weight: bold;">`,
    )
    expect(resultHtml).toContain(`<strong>tablas de unidades</strong>`)
  })

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
})

