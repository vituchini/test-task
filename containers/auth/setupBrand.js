import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { BsCheckLg, BsXLg } from 'react-icons/bs'
import BasicQuestion from '../brand/basicQuestion'

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 30px;
`
const TitleWrapper = styled.div`
	display: flex;
	gap: 100px;
	align-items: center;
	font-size: 80px;
`

const StepWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const StepItemStyled = styled.div`
	color: ${({ active = false }) => (active ? '#6558f5' : 'black')};
	border-bottom: 4px solid
		${({ active = false }) => (active ? '#6558f5' : 'black')};
	font-size: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0px 40px;
	cursor: pointer;
`

const Content = styled.div`
	margin-top: 20px;
	border: 1px solid black;
	height: 70%;
`

const StepItem = ({ status = true, active = false, number = 0, onClick }) => {
	return (
		<StepItemStyled active={active} onClick={onClick}>
			{status ? (
				<BsCheckLg fontSize="35px" color={active ? '#6558f5' : 'black'} />
			) : (
				<BsXLg fontSize="35px" color={active ? '#6558f5' : 'black'} />
			)}
			<p>Step {number + 1}</p>
		</StepItemStyled>
	)
}
function SetupBrand() {
	const initialProgress = [...new Array(7)].map((el, index) => ({
		id: index,
		data: {},
		status: false,
	}))
	const [progress, setProgress] = useState(initialProgress)
	const [currentStep, setCurrentStep] = useState(0)

	const onFormSave = (id) => (data) =>
		setProgress((prev) =>
			prev.map((el, i) => (i === id ? { ...el, data, status: true } : el))
		)

	return (
		<Wrapper>
			<TitleWrapper>
				<Image
					src={
						'data:image/jpeg;base64,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'
					}
					width={150}
					height={70}
					alt="image"
				/>
				<div>Setup Welcome Buddle</div>
			</TitleWrapper>
			<StepWrapper>
				{progress.map(({ status, id }) => {
					return (
						<StepItem
							status={status}
							active={currentStep === id}
							number={id}
							onClick={() => {
								setCurrentStep(id)
							}}
						/>
					)
				})}
			</StepWrapper>
			<Content>
				{currentStep === 0 && (
					<BasicQuestion
						title={'Introduce yourself and your brand'}
						onNext={() => setCurrentStep(1)}
						formData={progress[0].data}
						onFormSave={onFormSave(0)}
					/>
				)}
				{currentStep === 1 && (
					<BasicQuestion
						title={'Why did you build your brand and why is it so different?'}
						onNext={() => setCurrentStep(2)}
						formData={progress[1].data}
						onFormSave={onFormSave(1)}
					/>
				)}
				{currentStep === 2 && (
					<BasicQuestion
						title={'What are some recommended best sellers?'}
						onNext={() => setCurrentStep(3)}
						formData={progress[2].data}
						onFormSave={onFormSave(2)}
						skip
					/>
				)}
				{currentStep === 3 && (
					<BasicQuestion
						title={'Do you have discount code?'}
						onNext={() => setCurrentStep(4)}
						formData={progress[3].data}
						onFormSave={onFormSave(3)}
						skip
					/>
				)}
			</Content>
		</Wrapper>
	)
}

export default SetupBrand
