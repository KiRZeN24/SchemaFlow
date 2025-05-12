import { describe, it, expect, beforeAll, afterEach } from 'vitest'
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react'
import Configuration from '../configuration'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Inicialización de i18next para los tests
beforeAll(() => {
  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: { translation: {} },
      es: { translation: {} },
    },
    interpolation: { escapeValue: false },
  })
})

afterEach(() => {
  cleanup()
  localStorage.clear()
})

describe('Configuration component', () => {
  it('render API Key input and theme buttons', () => {
    render(<Configuration />)

    expect(screen.getByLabelText(/API KEY/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Dark mode/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Light mode/i }),
    ).toBeInTheDocument()
  })

  it('allows user to type in API key input', () => {
    render(<Configuration />)

    const apiKeyInput = screen.getByLabelText(/API KEY/i) as HTMLInputElement
    fireEvent.change(apiKeyInput, { target: { value: 'test-key' } })

    expect(apiKeyInput.value).toBe('test-key')
  })

  it('activates dark mode by default', () => {
    render(<Configuration />)

    const darkModeButton = screen.getByRole('button', { name: /Dark mode/i })
    const lightModeButton = screen.getByRole('button', { name: /Light mode/i })

    expect(darkModeButton).toBeDisabled()
    expect(lightModeButton).toBeEnabled()
  })

  it('switches to light mode button is clicked', async () => {
    render(<Configuration />)

    const darkModeButton = screen.getByRole('button', { name: /Dark mode/i })
    const lightModeButton = screen.getByRole('button', { name: /Light mode/i })

    fireEvent.click(lightModeButton)

    await waitFor(() => {
      expect(darkModeButton).toBeEnabled()
      expect(lightModeButton).toBeDisabled()
    })
  })

  it('renders a select element with Language options', () => {
    render(<Configuration />)

    const languageSelect = screen.getByRole('combobox', {
      name: /Language/i,
    }) as HTMLSelectElement

    expect(languageSelect).toBeInTheDocument()
    expect(languageSelect.options).toHaveLength(2)
    // Si cambiaste los values a 'en' y 'es', ajusta aquí:
    expect(languageSelect.options[0].value).toBe('en')
    expect(languageSelect.options[1].value).toBe('es')
  })
})
