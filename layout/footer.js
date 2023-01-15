import Link from 'next/link'
import {
	HiOutlineHome,
	HiOutlineTemplate,
	HiCubeTransparent,
	HiOutlineUserCircle,
	HiDesktopComputer,
} from 'react-icons/hi'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useRouter } from 'next/router'

const FooterWrapper = styled.div`
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	height: 5.9rem;
	background-color: ${({ theme }) => theme.colors.white};
	border-top: 1px solid #eee;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	place-items: center;
`
const ItemWrapper = styled.div`
	display: grid;
	place-items: center;
	p {
		font-size: ${({ theme }) => theme.gutters.small};
		color: ${({ theme }) => theme.colors.text};
	}
`

const footer = () => {
	const { colors, gutters } = useContext(ThemeContext)

	const { pathname } = useRouter()

	return (
		<FooterWrapper>
			<Link href="/" passHref legacyBehavior>
				<ItemWrapper>
					<HiOutlineHome
						color={pathname === '/' ? colors.primary : colors.text}
						fontSize={gutters.xlarge}
					/>
					<p style={{ color: pathname === '/' && colors.primary }}>Home</p>
				</ItemWrapper>
			</Link>

			<Link href="/beauty&cosmetics/products" passHref legacyBehavior>
				<ItemWrapper>
					<HiOutlineTemplate
						color={
							pathname === '/beauty&cosmetics/products'
								? colors.primary
								: colors.text
						}
						fontSize={gutters.xlarge}
					/>
					<p
						style={{
							color:
								pathname === '/beauty&cosmetics/products' && colors.primary,
						}}
					>
						Products
					</p>
				</ItemWrapper>
			</Link>

			<Link href="/beauty&cosmetics/services" passHref legacyBehavior>
				<ItemWrapper>
					<HiCubeTransparent
						color={
							pathname === '/beauty&cosmetics/services'
								? colors.primary
								: colors.text
						}
						fontSize={gutters.xlarge}
					/>
					<p
						style={{
							color:
								pathname === '/beauty&cosmetics/services' && colors.primary,
						}}
					>
						Services
					</p>
				</ItemWrapper>
			</Link>
			<Link href="/studio" passHref legacyBehavior>
				<ItemWrapper>
					<HiDesktopComputer
						color={pathname === '/studio' ? colors.primary : colors.text}
						fontSize={gutters.xlarge}
					/>
					<p
						style={{
							color: pathname === '/studio' && colors.primary,
						}}
					>
						Studio
					</p>
				</ItemWrapper>
			</Link>
			<Link href="/auth/signin" passHref legacyBehavior>
				<ItemWrapper>
					<HiOutlineUserCircle
						color={pathname === '/account' ? colors.primary : colors.text}
						fontSize={gutters.xlarge}
					/>
					<p
						style={{
							color: pathname === '/account' && colors.primary,
						}}
					>
						Profile
					</p>
				</ItemWrapper>
			</Link>
		</FooterWrapper>
	)
}

export default footer

/* <Link href="/#hashid" scroll={false}>
  Disables scrolling to the top
</Link> */

// scroll to specific id
