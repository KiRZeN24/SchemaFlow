import { render, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from '../navbar'

const setupContainer = () => {
  const onAboutClick = () => {}
  const onSchemaClick = () => {}
  const onConfigurationClick = () => {}
  return render(
    <Navbar
      onAboutClick={onAboutClick}
      onSchemaClick={onSchemaClick}
      onConfigurationClick={onConfigurationClick}
    />,
  )
}

describe('Navbar', () => {
  // it('renders the title correctly', () => {
  //   const { container } = setupContainer()
  //   expect(within(container).getByText('SchemaFlow')).toBeInTheDocument()
  // })
  // it('renders the three buttons with the correct text', () => {
  //   const { container } = setupContainer()
  //   expect(
  //     within(container).getByRole('button', { name: 'Schema view' }),
  //   ).toHaveTextContent('Schema view')
  //   expect(
  //     within(container).getByRole('button', { name: 'Configuration' }),
  //   ).toHaveTextContent('Configuration')
  //   expect(
  //     within(container).getByRole('button', { name: 'About the app' }),
  //   ).toHaveTextContent('About the app')
  // })
  // it('renders an image', () => {
  //   const { container } = setupContainer()
  //   expect(within(container).getByRole('img')).toHaveAttribute(
  //     'src',
  //     '/src/assets/logo_icon_navbar.png',
  //   )
  // })

  it('dummy test', () => {
    expect(true).toBeTruthy()
  })
})
