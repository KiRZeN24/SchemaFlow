import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('should render at least one element with the text SchemaFlow', () => {
    render(<App />)
    expect(screen.getAllByText('SchemaFlow').length).toBeGreaterThanOrEqual(1)
  })
})
