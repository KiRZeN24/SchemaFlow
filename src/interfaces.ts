export interface Unit {
  id: number
  title: string
}

export interface Course {
  schemaType: number
  course: string
  units: Unit[]
  active: number
}

export interface FormData {
  schemaType: number
  course: string
  active: number
  units: Unit[]
}

export interface NavbarProps {
  onAboutClick: () => void
  onSchemaClick: () => void
  onConfigurationClick: () => void
}

