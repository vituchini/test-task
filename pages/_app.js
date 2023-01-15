import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Roboto } from '@next/font/google'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { useApollo } from '../apollo'
import { lightTheme, darkTheme } from '../styles/theme'
import GlobalProvider from '../libs/context/provider'
import GlobalStyle from '../styles/global'
import LayoutMain from '../layout/layoutMain'
import { LIGHT_THEME } from '../constants'
import useTheme from '../hooks/useTheme'
import '../styles/global.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '700', '500'],
	style: ['normal', 'italic'],
})

function MyApp({ Component, pageProps, router }) {
	const [isSsr, setSsr] = useState(true)
	const [theme, themeToggler] = useTheme()

	const selectedTheme = theme === LIGHT_THEME ? lightTheme : darkTheme
	const client = useApollo(pageProps)

	useEffect(() => {
		setSsr(false)
		router.beforePopState((state) => {
			// eslint-disable-next-line no-param-reassign
			state.options.scroll = false
			return true
		})
	}, [])

	const getLayout =
		Component.getLayout ||
		((page) => (
			<ApolloProvider client={client}>
				<GlobalProvider>
					<ThemeProvider className={roboto.className} theme={selectedTheme}>
						<LayoutMain themeToggler={themeToggler} theme={theme}>
							{page}
						</LayoutMain>
					</ThemeProvider>
				</GlobalProvider>
			</ApolloProvider>
		))

	if (isSsr) return null

	return getLayout(
		<div>
			<Head>
				<title>Playback</title>
				<meta property="og:title" content="Playback" key="title" />
				<meta name="description" content="playback_interactive_videos." />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<ApolloProvider client={client}>
				<GlobalProvider>
					<ThemeProvider theme={selectedTheme}>
						<main className={roboto.className}>
							<Component
								themeToggler={themeToggler}
								theme={theme}
								{...pageProps}
								key={router.route}
							/>
							<GlobalStyle />
						</main>
					</ThemeProvider>
				</GlobalProvider>
			</ApolloProvider>
		</div>
	)
}

export default MyApp
