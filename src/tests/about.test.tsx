import { render, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../about'

describe('About', () => {
  it('renders the about correctly', () => {
    const { container } = render(<About />)
    expect(within(container).getByText('SchemaFlow')).toBeInTheDocument()
  })
})
