import styled, { ThemeContext } from 'styled-components'
import { Roboto } from '@next/font/google'
import { useContext } from 'react'
import { WrapperScroll } from '../styles/theme/mixins'

const Wrapper = styled.div`
	overflow: auto;
`
const Main = styled(WrapperScroll)`
	height: 100vh;
	overflow: hidden;
`

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	style: ['normal', 'italic'],
})

const layoutAuth = ({ children }) => {
	const { colors } = useContext(ThemeContext)

	return (
		<Wrapper className={roboto.className}>
			<meta name="theme-color" content={colors.statusbar} />
			<main>
				<Main>{children}</Main>
			</main>
		</Wrapper>
	)
}

export default layoutAuth
