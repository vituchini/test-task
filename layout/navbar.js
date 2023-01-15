/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import dynamic from 'next/dynamic'
import { HiBars3CenterLeft, HiOutlineUserCircle } from 'react-icons/hi2'
import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Image from 'next/legacy/image'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { useGlobalContext } from '../libs/context/provider'
import {
	CLOSE_SIDEBAR,
	OPEN_SIDEBAR,
} from '../libs/context/constants/layoutConstants'
import Search from '../components/inputs/search'

const Account = dynamic(() => import('../components/modals/account'), {
	ssr: false,
})

export const HeaderWrapper = styled.header`
	position: fixed;
	width: 100vw;
	display: flex;
	align-items: center;
	top: 0;
	left: 0;
	z-index: 100;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
	height: 7rem;
	p {
		font-size: 1.6rem;
	}
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.white};
`
const Wrap = styled.div`
	display: flex;
	align-items: center;
	padding: 0 2rem;
`

const HumbergerWrapper = styled.div`
	display: flex;
	align-items: center;
	p {
		font-size: ${({ theme }) => theme.gutters.small};
		color: ${({ theme }) => theme.colors.text};
	}
`
const Logo = styled.div`
	display: flex;
	align-items: center;
	// margin-left: 1.8rem;
	p {
		font-weight: 700;
		font-size: 2.47rem;
		color: ${({ theme }) => theme.colors.text};
		margin-left: 0.6rem;
	}
`
const Button = styled.button`
	border-radius: 50%;
	height: 5.5rem;
	width: 5.5rem;
	overflow: hidden;
	border: none;
	cursor: pointer;
	transition: all 0.3s;
	display: none;
	&:hover {
		opacity: 1;
		// background-color: ${({ theme }) => theme.colors.textSlate};
	}
`
const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 3rem;
	.dots {
		cursor: pointer;
		padding: 0.8rem;
		margin-right: 2rem;
		background-color: transparent;
		border: none;
		transition: all 0.3s;
		height: 4.7rem;
		width: 4.7rem;
		border-radius: 50% !important;
		&:active {
			background-color: ${({ theme }) => theme.colors.textSlate};
		}
		&:hover {
			background-color: #eee;
		}
	}
`
const ThemeWrapper = styled.div`
	div {
		display: flex;
		align-items: center;
		border: 1px solid #ccc;
		box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.14);
		padding: 0.7rem 0;
		border-radius: 3.5rem;
		width: 11rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`
const SearchWrapper = styled.div`
	width: 55%;
`

const navbar = () => {
	const { colors, images } = useContext(ThemeContext)
	const { sidebarDispatch, sidebarState } = useGlobalContext()
	const [showAccount, setShowAccount] = useState(false)

	return (
		<HeaderWrapper>
			<Account showModal={showAccount} setShowModal={setShowAccount} />
			<Wrap>
				<HumbergerWrapper>
					<Button
						type="button"
						onClick={() => {
							sidebarDispatch({
								type: sidebarState.openSidebar ? CLOSE_SIDEBAR : OPEN_SIDEBAR,
							})
						}}
					>
						<HiBars3CenterLeft color={colors.text} fontSize="4rem" />
					</Button>
					<Logo>
						<Image src={images.logo} width={31} height={31} priority />
						<p>Playback</p>
					</Logo>
				</HumbergerWrapper>
			</Wrap>
			<SearchWrapper>
				<Search />
			</SearchWrapper>
			<ProfileWrapper>
				<button
					type="button"
					onClick={() => setShowAccount(!showAccount)}
					className="dots"
				>
					<HiOutlineDotsVertical fontSize="3rem" color={colors.text} />
				</button>
				<ThemeWrapper>
					<div>
						<span>
							<HiOutlineUserCircle fontSize="2.5rem" color={colors.text} />
						</span>
						<p>Me</p>
					</div>
				</ThemeWrapper>
			</ProfileWrapper>
		</HeaderWrapper>
	)
}

export default navbar
