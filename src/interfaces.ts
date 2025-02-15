export interface Unit {
    id: number;
    title: string;
  }

  export interface Course {
    course: string;
    units: Unit[];
    active: number;
  }