import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { HiOutlineSearch } from 'react-icons/hi'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.background};
	padding: 0.5rem 1.2rem;
	border-radius: 0.3rem;
	height: 100%;
	width: 100%;
	border: 1px solid #ccc;
	outline: none;
	border-radius: 3.5rem;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
`
const Icon = styled.div`
	margin-right: 0.5rem;
`
const Input = styled.input`
	outline: none;
	padding: 0.9rem 1.2rem;
	border: none;
	background-color: ${({ theme }) => theme.colors.background};
	font-weight: 200;
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.6rem;
	border-radius: 3.5rem;
	height: 100%;
	min-width: 50vw;
	&:focus {
		transition: all 0.3s;
		outline: none;
		&::-webkit-input-placeholder {
			color: ${({ theme }) => theme.colors.text};
		}
	}
	&::-webkit-input-placeholder {
		font-weight: 200;
		color: ${({ theme }) => theme.colors.textSlate};
		font-size: 1.7rem;
	}
`

const search = ({ placeholder = 'Search in videos' }) => {
	const { colors, gutters } = useContext(ThemeContext)

	return (
		<Wrapper>
			<Icon>
				<HiOutlineSearch color={colors.text} fontSize={gutters.xxlarge} />
			</Icon>
			<Input placeholder={placeholder} />
		</Wrapper>
	)
}

export default search
