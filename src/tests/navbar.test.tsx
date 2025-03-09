import { render, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from '../navbar'

describe('Navbar', () => {
  it('renders the title correctly', () => {
    const { container } = render(<Navbar />)
    expect(within(container).getByText('SchemaFlow')).toBeInTheDocument()
  })
  it('renders the three buttons: Schema view, Configuration, About the app', () => {
    const { container } = render(<Navbar />)

    expect(
      within(container).getByRole('link', { name: 'Schema view' }),
    ).toHaveAttribute('href', '/')
    expect(
      within(container).getByRole('link', { name: 'Configuration' }),
    ).toHaveAttribute('href', '/configuration')
    expect(
      within(container).getByRole('link', { name: 'About the app' }),
    ).toHaveAttribute('href', '/about')
  })
  it('renders an image', () => {
    const { container } = render(<Navbar />)
    expect(within(container).getByRole('img')).toHaveAttribute(
      'src',
      'src/assets/logo_icon_navbar.png',
    )
  })
})
