export interface CourseData {
  course: string;
  units: object[];
  active: number;
}

export function exportHTML(data: CourseData) {
  const courseTitle = data.course;
  return `<h1>${courseTitle}</h1>`;
}
