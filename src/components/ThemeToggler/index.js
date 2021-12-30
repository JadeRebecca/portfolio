import React from 'react'
import { func, string } from 'prop-types'
import { Button } from './ThemeTogglerElements'

const ThemeToggler = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>
}
ThemeToggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default ThemeToggler
