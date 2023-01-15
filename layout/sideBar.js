import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { ThemeContext } from 'styled-components'
import {
	BsGraphUp,
	BsGear,
	BsCameraReels,
	BsCameraReelsFill,
	BsBag,
	BsBagFill,
	BsPeople,
	BsPeopleFill,
	BsGearFill,
	BsSpotify,
	BsSpeedometer,
	BsHeart,
	BsHeartHalf,
} from 'react-icons/bs'
import { useGlobalContext } from '../libs/context/provider'

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	width: ${({ active }) => (active ? '12vw' : '7vw')};
	height: calc(100vh - 7rem);
	position: fixed;
	top: 7rem;
	left: 0;
	z-index: 90;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
	transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	// padding: 2rem 0;
	position: relative;
	display: flex;
	align-items: center;
	// justify-content: center;
	flex-direction: column;
`

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	// margin-bottom: 3rem;
	padding: 2.3rem 0;
	// border-radius: 0.6rem;
	transition: all 0.3s ease-in-out;
	width: 100%;
	border-right: ${({ theme, active }) =>
		active ? `2px solid ${theme.colors.text}` : '2px solid transparent'};
	background-color: ${({ theme, active }) => active && theme.colors.statusbar};

	&:hover {
		background-color: ${({ theme }) => theme.colors.statusbar};
		// border-right: 2px solid ${({ theme }) => theme.colors.textBsLight};
		p {
			color: ${({ theme }) => theme.colors.textBsLight};
		}
	}
	cursor: pointer;
	p {
		font-size: 1.6rem;
		font-weight: 400;
		margin-top: 0.8rem;
		color: ${({ theme }) => theme.colors.text};
	}
`

const sideBar = () => {
	const { sidebarState } = useGlobalContext()
	const { colors } = useContext(ThemeContext)

	const { pathname } = useRouter()

	return (
		<Wrapper active={sidebarState?.openSidebar}>
			<Link href="/" passHref legacyBehavior>
				<IconWrapper active={pathname === '/'}>
					{pathname === '/' ? (
						<>
							<BsCameraReelsFill fontSize="2.2rem" color={colors.black} />
							<p>Videos</p>
						</>
					) : (
						<>
							<BsCameraReels fontSize="2.2rem" color={colors.text} />
							<p>Videos</p>
						</>
					)}
				</IconWrapper>
			</Link>
			<Link href="/products" passHref legacyBehavior>
				<IconWrapper active={pathname === '/products'}>
					{pathname === '/products' ? (
						<>
							<BsBagFill fontSize="2.2rem" color={colors.black} />
							<p>Products</p>
						</>
					) : (
						<>
							<BsBag fontSize="2.2rem" color={colors.text} />
							<p>Products</p>
						</>
					)}
				</IconWrapper>
			</Link>
			<Link href="/promoters" passHref legacyBehavior>
				<IconWrapper active={pathname === '/promoters'}>
					{pathname === '/promoters' ? (
						<>
							<BsPeopleFill fontSize="2.2rem" color={colors.black} />
							<p>Promoters</p>
						</>
					) : (
						<>
							<BsPeople fontSize="2.2rem" color={colors.text} />
							<p>Promoters</p>
						</>
					)}
				</IconWrapper>
			</Link>
			<Link href="/analytics" passHref legacyBehavior>
				<IconWrapper active={pathname === '/analytics'}>
					{pathname === '/analytics' ? (
						<>
							<BsGraphUp fontSize="2.2rem" color={colors.black} />
							<p>Analytics</p>
						</>
					) : (
						<>
							<BsGraphUp fontSize="2.2rem" color={colors.text} />
							<p>Analytics</p>
						</>
					)}
				</IconWrapper>
			</Link>
			<Link href="/settings" passHref legacyBehavior>
				<IconWrapper active={pathname === '/settings'}>
					{pathname === '/settings' ? (
						<>
							<BsGearFill fontSize="2.2rem" color={colors.black} />
							<p>Analytics</p>
						</>
					) : (
						<>
							<BsGear fontSize="2.2rem" color={colors.text} />
							<p>Analytics</p>
						</>
					)}
				</IconWrapper>
			</Link>
			<Link href="/settings" passHref legacyBehavior>
				<IconWrapper active={pathname === '/settings'}>
					{pathname === '/settings' ? (
						<>
							<BsSpotify fontSize="2.2rem" color={colors.black} />
							<p>Sporti</p>
						</>
					) : (
						<>
							<BsSpeedometer fontSize="2.2rem" color={colors.text} />
							<p>Sporti</p>
						</>
					)}
				</IconWrapper>
			</Link>
			<Link href="/settings" passHref legacyBehavior>
				<IconWrapper active={pathname === '/settings'}>
					{pathname === '/settings' ? (
						<>
							<BsHeart fontSize="2.2rem" color={colors.black} />
							<p>Likes</p>
						</>
					) : (
						<>
							<BsHeartHalf fontSize="2.2rem" color={colors.text} />
							<p>Likes</p>
						</>
					)}
				</IconWrapper>
			</Link>
		</Wrapper>
	)
}

export default sideBar
