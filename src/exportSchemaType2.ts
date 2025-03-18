import { Course } from './interfaces'

export function exportHTMLSchema2(data: Course) {
  let result = ''

  for (const unit of data.units) {
    let content = `<span style="display: block; background: #4a6; color: white; padding: 10px; border-radius: 5px; margin-top: 5px; font-size: 1em;">
                       ${unit.title}
                     </span>`

    if (unit.id === data.active) {
      content = `<span style="display: block; background: #6a8; color: white; padding: 10px; border-radius: 5px; margin-top: 5px; font-size: 1em; font-weight: bold;">
                     <strong>${unit.title}</strong>
                   </span>`
    }

    result += `<li style="list-style: none; margin: 5px 0;">${content}</li>`
  }

  const units = `<ul style="padding: 0; margin: 0;">${result}</ul>`

  return `
      <div style="font-family: Arial, sans-serif; background-color: #333; color: white; padding: 20px; border-radius: 10px; width: fit-content;">
        <h1 style="background: #556; color: white; padding: 10px; border-radius: 5px; font-size: 1.2em;">
          ${data.course || 'Main Title'}
        </h1>
        ${units || "<p style='color: lightgray;'>No subtitles added.</p>"}
      </div>
    `
}

