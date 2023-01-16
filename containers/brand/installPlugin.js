import React from 'react'
import styled from 'styled-components'
import Button from '../../components/buttons/Button'
import { BsBack } from 'react-icons/bs'
import Image from 'next/image'

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	overflow: auto;
	padding-top: 30px;
`

const BigTitle = styled.p`
	font-weight: bold;
	font-size: 32px;
`

const SubTitle = styled.p`
	font-size: 24px;
`

const SupStep = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30px;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	padding: 10px;
`

const InstallCode = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 50px;
	font-size: 24px;
`

const ScriptContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const ScriptBlock = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`

const ScriptInput = styled.input`
	width: 370px;
	box-shadow: 0px 0px 2px 2px #9d9d9d;
	color: #9d9d9d;
	font-size: 18px;
	padding: 5px;
`

const ScriptLabel = styled.label`
	font-size: 13px;
`

const ShopifyContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 12px;
	justify-content: center;
	align-items: center;
	img {
		width: 70px;
	}
`

const CircleNumber = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 2px 2px #9d9d9d;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	font-size: 24px;
`

const Continue = styled.div`
	margin-top: 40px;
	display: flex;
	position: relative;
`

const Copy = styled(BsBack)`
	cursor: pointer;
`

const InstallPlugin = ({ onNext }) => {
	return (
		<Wrapper>
			<BigTitle>Install Website Plugin. Go LIVE!</BigTitle>
			<SubTitle>
				Install the Payback plugin on your website to finish the setup
			</SubTitle>
			<SupStep>
				<CircleNumber>1</CircleNumber>
				Install Code
			</SupStep>
			<InstallCode>
				<ScriptContainer>
					<ScriptLabel htmlFor="companyName">
						Copy the code below the {'<footer>'} tag on your website
					</ScriptLabel>
					<ScriptBlock>
						<ScriptInput
							id="companyName"
							name="companyName"
							type="name"
							label="Company Name"
							placeholder={`<script href="xxx">this is the script</script>`}
							disabled
						/>
						<Copy fontSize={'35px'} />
					</ScriptBlock>
				</ScriptContainer>
				OR
				<ShopifyContainer>
					<Image src={'/images/shopify.png'} width={100} height={30} />
					<Button secondary>Install Shopify Plugin</Button>
				</ShopifyContainer>
			</InstallCode>
			<SupStep>
				<CircleNumber>2</CircleNumber>
				Verify Installation
			</SupStep>
			<SubTitle>
				Click below to see the bubble on your site via secret link
			</SubTitle>
			<Button secondary>Preview button</Button>
			<Continue>
				<Button onClick={onNext} width={'400px'}>
					Continue
				</Button>
			</Continue>
		</Wrapper>
	)
}

export default InstallPlugin
