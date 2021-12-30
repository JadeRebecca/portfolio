import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/Globalstyle'
import { lightTheme, darkTheme } from './components/Themes'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'

function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />

        <Router>
          <Home themeToggler={themeToggler} />
        </Router>
      </>
    </ThemeProvider>
  )
}

export default App
