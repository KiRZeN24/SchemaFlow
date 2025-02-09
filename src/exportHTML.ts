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
  return `<h1>${data.course}</h1>`;
}
