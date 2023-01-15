/* eslint-disable no-unused-expressions */
import { useState } from 'react'
import { LIGHT_THEME, DARK_THEME } from '../constants'

const THEMES = {
	LIGHT: LIGHT_THEME,
	DARK: DARK_THEME,
}

const useTheme = () => {
	const [theme, setTheme] = useState(THEMES.LIGHT)
	const themeToggler = () => {
		theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT)
	}
	return [theme, themeToggler]
}

export default useTheme
