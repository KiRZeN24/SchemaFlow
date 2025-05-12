import { vi } from 'vitest'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        appName: 'SchemaFlow',
      }
      return translations[key] || key
    },
    i18n: { changeLanguage: () => new Promise(() => {}) },
  }),
}))

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('should render at least one element with the text SchemaFlow', () => {
    render(<App />)
    expect(screen.getAllByText('SchemaFlow').length).toBeGreaterThanOrEqual(1)
  })
})
