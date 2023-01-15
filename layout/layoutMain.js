import styled, { ThemeContext } from 'styled-components'
import { Roboto } from '@next/font/google'
import { useContext } from 'react'
import Navbar from './navbar'
import Sidebar from './sideBar'
import { WrapperScroll } from '../styles/theme/mixins'
import { useGlobalContext } from '../libs/context/provider'

const Wrapper = styled.div``
const Main = styled(WrapperScroll)`
	// background-color: red;
	height: calc(100vh - 7rem);
	overflow: auto;
	width: ${({ active }) => (active ? '88vw' : '93vw')};
	transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	position: fixed;
	top: 7rem;
	right: 0;
`
const Content = styled.div``

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	style: ['normal', 'italic'],
})

const layoutMain = ({ children }) => {
	const { colors } = useContext(ThemeContext)
	const { sidebarState } = useGlobalContext()

	return (
		<Wrapper className={roboto.className}>
			<meta name="theme-color" content={colors.statusbar} />
			<Navbar />
			<main>
				<Main active={sidebarState?.openSidebar === true}>
					<Content>{children}</Content>
				</Main>
			</main>
			<Sidebar />
		</Wrapper>
	)
}

export default layoutMain
