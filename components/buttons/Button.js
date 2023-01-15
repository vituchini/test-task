import React from 'react'
import styled, { keyframes } from 'styled-components'

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`

const ButtonStyled = styled.button`
	max-width: 100%;
	width: ${({ width }) => width};
	padding: 11px 13px;
	color: rgb(253, 249, 243);
	font-weight: 600;
	text-transform: uppercase;
	background: ${({ secondary }) => (secondary ? '#1aae9f' : '#6558f5')};
	border: none;
	border-radius: 3px;
	outline: 0;
	cursor: pointer;
	margin-top: 0.6rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-out;
	:hover {
		background: ${({ secondary }) => (secondary ? '#1aae9f' : '#6558f5')};
		animation: ${jump} 0.2s ease-out forwards;
	}
`

const Button = (props) => {
	return <ButtonStyled {...props} />
}

export default Button
