import { Course } from "./interfaces";

export function exportHTML(data: Course) {
  let result = '';
  for (const unit of data.units) {
    
    let content = ''
    if (unit.id === data.active) {
      content = `<strong>${unit.title}</strong>`
    }else{
      content = unit.title;
    }

    result += `<li>${content}</li>`

  }
  const units ='<ul>'+ result + '</ul>';
  return `<h1>${data.course}</h1>
          ${units}`;
}
