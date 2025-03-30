import { Course } from './interfaces'

export function exportHTMLSchemaType2(data: Course) {
  const units = data.units.map((unit, index) => {
    let content = `<span style="display: inline-block; background: #4a6; color: white; padding: 10px; border-radius: 5px; font-size: 1em;">
                     ${unit.title}
                   </span>`

    if (unit.id === data.active) {
      content = `<span style="display: inline-block; background: #6a8; color: white; padding: 10px; border-radius: 5px; font-size: 1em; font-weight: bold;">
                   <strong>${unit.title}</strong>
                 </span>`
    }

    const arrow =
      index < data.units.length - 1
        ? `<span style="margin: 0 10px;">➡️</span>`
        : ''

    return `<li style="display: flex; align-items: center; list-style: none; margin-right: 10px;">${content}${arrow}</li>`
  })

  const unitsHTML = `<ul style="padding: 0; margin: 0; display: flex; list-style: none;">${units.join(
    '',
  )}</ul>`

  const commentedJSON = `<!-- ${JSON.stringify(data)} -->`

  return `
      ${commentedJSON}
      <div style="font-family: Arial, sans-serif; background-color: #333; color: white; padding: 20px; border-radius: 10px; width: fit-content;">
        <h1 style="background: #556; color: white; padding: 10px; border-radius: 5px; font-size: 1.2em;">
          ${data.course || 'Main Title'}
        </h1>
        ${unitsHTML || "<p style='color: lightgray;'>No subtitles added.</p>"}
      </div>
    `
}
