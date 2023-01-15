import styled from 'styled-components'

const Wrapper = styled.div`
	height: 87vh;
	width: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`
const TextBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70%;
	flex-direction: column;
	p {
		font-family: 'Nunito-Regular';
		font-size: 1.4rem;
		text-align: center;
	}
`

export default function Custom404() {
	return (
		<Wrapper>
			<TextBox>
				<p>Oops!.Cannot find the requested url!!</p>
			</TextBox>
		</Wrapper>
	)
}
