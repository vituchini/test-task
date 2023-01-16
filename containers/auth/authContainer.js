import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Title = styled.div`
	font-size: 32px;
	margin-bottom: 30px;
`

const Wrapper = styled.section`
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	overflow: auto;
	padding-top: 30px;
`

const AdditionalInfo = styled.div`
	padding-top: 15px;
	text-align: center;
`

const LinkStyled = styled(Link)`
	color: #6558f5;
	text-decoration: underline;
`

function AuthContainer(props) {
	return (
		<Wrapper>
			<Image src={'/images/logo.png'} width={150} height={100} alt="image" />
			<Title>{props.title}</Title>
			{props.children}
			{props.additionalInfo?.map(({ label, link, linkLabel }) => {
				return (
					<AdditionalInfo>
						{label}
						<LinkStyled href={link}> {linkLabel}</LinkStyled>
					</AdditionalInfo>
				)
			})}
		</Wrapper>
	)
}

export default AuthContainer
