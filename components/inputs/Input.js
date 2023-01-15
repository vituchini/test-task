import React from 'react'
import styled from 'styled-components'
const InputWrapper = styled.div`
	position: relative;
	margin-bottom: 10px;
`

const InputStyled = styled.input`
	height: 32px;
	width: 100%;
	font-size: 14px;
	border-radius: 4px;
	padding: 5px 12px 5px 12px;
	border: 1px solid ${(props) => (props?.error ? 'red' : 'black')};
	&:focus-visible {
		outline: none;
		border: 1px solid ${(props) => props.theme.colors.secondary};
		box-shadow: 0 0 2px ${(props) => props.theme.colors.secondary};
	}
	&::placeholder {
		font-weight: 500;
		color: ${(props) => props.theme.colors.grayDark};
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		appearance: none;
		-webkit-appearance: none;
	}
	-moz-appearance: textfield;
`

const Label = styled.label``

const Input = (props) => {
	return (
		<InputWrapper>
			{props.label && <Label>{props.label}</Label>}
			<InputStyled {...props} onChange={props.onChange} value={props.value} />
		</InputWrapper>
	)
}

export default Input
