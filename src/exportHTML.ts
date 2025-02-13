export interface Course {
  course: string;
  units: Unit[];
  active: number;
}

interface Unit {
  id: number;
  title: string;
}

export function exportHTML(data: Course) {
  let result = '';
  for (const unit of data.units) {
    
    if (unit.id === data.active) {
      result += '<li><strong>'+ unit.title +'</strong></li>';
    }else{
      result += '<li>' + unit.title + '</li>';
    }
  }
  const units ='<ul>'+ result + '</ul>';
  return `<h1>${data.course}</h1>
          ${units}`;
}
