import { render, screen, fireEvent } from '@testing-library/react'
import { it, expect } from 'vitest'
import SchemaForm from '../schemaForm'

it('clears all data', () => {
  render(<SchemaForm />)
  const input = screen.getByLabelText('Main Title:') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'My Course' } })
  expect(input.value).toBe('My Course')

  const clearAllButton = screen.getByText('Clear all')
  fireEvent.click(clearAllButton)
  expect(input.value).toBe('')
})
