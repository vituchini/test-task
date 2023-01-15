import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../styles/theme'
import LayoutAuth from '../../layout/layoutAuth'
import Auth from '../../containers/auth/setupBrand'

function SetupBrand() {
	return (
		<div>
			<Auth />
		</div>
	)
}

export default SetupBrand

SetupBrand.getLayout = function getLayout(page) {
	return (
		<ThemeProvider theme={lightTheme}>
			<LayoutAuth>{page}</LayoutAuth>
		</ThemeProvider>
	)
}
