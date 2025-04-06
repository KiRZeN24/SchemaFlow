import { useEffect, useState } from 'react'
import './configuration.css'

const Configuration = () => {
  const [apiKey, setApiKey] = useState('')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const storedKey = localStorage.getItem('apiKey') || ''
    const storedTheme =
      (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
    setApiKey(storedKey)
    setTheme(storedTheme)
    document.body.setAttribute('data-theme', storedTheme)
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
      </div>
    </div>
  )
}

export default Configuration
