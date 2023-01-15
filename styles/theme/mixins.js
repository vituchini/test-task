import React from 'react'
import styled from 'styled-components'

export const WrapperScroll = styled.div`
	scrollbar-gutter: ${({ collapse }) => (collapse ? '' : 'stable')};
	&::-webkit-scrollbar {
		width: 8px;
		border-radius: 0.6rem;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
		width: 8px;
		border-radius: 0.6rem;
	}

	&::-webkit-scrollbar-thumb {
		background: none;
		width: 4px;
		border-radius: 0.6rem;
		transition-timing-function: linear;
		transition-property: background;
		transition-duration: 1.5s;
	}

	&:hover {
		&::-webkit-scrollbar-thumb {
			background: rgba(203, 203, 203, 0.9);
			width: 8px;
			border-radius: 0.6rem;
		}
	}
	position: relative;
`

export const hideScrollbar = () => {
	return <WrapperScroll />
}
