import { useEffect, useState } from 'react'
import i18next from 'i18next' // <--- Importante: importar i18next
import './configuration.css'

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
]

const Configuration = () => {
  const [apiKey, setApiKey] = useState('')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const storedKey = localStorage.getItem('apiKey') || ''
    const storedTheme =
      (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
    const storedLanguage = localStorage.getItem('language') || 'en'

    setApiKey(storedKey)
    setTheme(storedTheme)
    setLanguage(storedLanguage)

    document.body.setAttribute('data-theme', storedTheme)

    // Cambia el idioma global de i18next al montar
    i18next.changeLanguage(storedLanguage)
  }, [])

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value)
    localStorage.setItem('apiKey', event.target.value)
  }

  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.setAttribute('data-theme', newTheme)
  }

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = event.target.value
    setLanguage(selectedLanguage)
    localStorage.setItem('language', selectedLanguage)
    i18next.changeLanguage(selectedLanguage)
  }

  return (
    <div className="config-container">
      <div className="config-card">
        <div className="form-group">
          <label htmlFor="apiKey">API KEY (ChatGPT):</label>
          <input
            id="apiKey"
            type="text"
            value={apiKey}
            onChange={handleApiKeyChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Application theme:</label>
          <div className="theme-buttons">
            <button
              onClick={() => handleThemeChange('dark')}
              disabled={theme === 'dark'}
              className="theme-button">
              Dark mode
            </button>
            <button
              onClick={() => handleThemeChange('light')}
              disabled={theme === 'light'}
              className="theme-button">
              Light mode
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="input-field"
            aria-label="Language">
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Configuration
