import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="container">
      <div className="theme-card">
        <h1>Theme Toggle SPA</h1>
        <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
        
        <button onClick={toggleTheme} className="toggle-button">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        <div className="content">
          <p>This is a Single Page Application that demonstrates dynamic theme switching between light and dark modes.</p>
        </div>
      </div>
    </div>
  )
}

export default App
