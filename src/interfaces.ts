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

export interface SchemaFormPanel1Props {
  onSchemaTypeChange: (value: string) => void
  onLoadJSON: (value: string) => void
  onClearAll: () => void
  currentFormData: FormData
}

export interface SchemaFormPanel2Props {
  formData: FormData
  newSubtitle: string
  setNewSubtitle: (value: string) => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleAddSubtitle: () => void
  handleSetActive: (unitId: number) => void
  handleRemoveSubtitle: (unitId: number) => void
  handleMoveUp: (index: number) => void
  handleMoveDown: (index: number) => void
  startEditing: (index: number) => void
  editingIndex: number | null
  editText: string
  setEditText: (value: string) => void
  saveEdit: () => void
  handleGenerateHTML: () => void
  error: string
}

export interface SchemaFormPanel3Props {
  formData: FormData
  generatedHtml: string
}
