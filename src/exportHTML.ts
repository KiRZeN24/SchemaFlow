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

  const units ='<ul><li>conceptos basicos</li><li>tablas de unidades</li></ul>';
  return `<h1>${data.course}</h1>
          ${units}`;

}
