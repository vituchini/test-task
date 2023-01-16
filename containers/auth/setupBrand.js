import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { BsCheckLg, BsXLg } from 'react-icons/bs'

import BasicQuestion from '../brand/basicQuestion'
import ShareLink from '../brand/shareLink'
import InstallPlugin from '../brand/installPlugin'
import SelectPlan from '../brand/selectPlan'

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
	border-bottom: 3px solid
		${({ active = false }) => (active ? '#6558f5' : 'black')};
	font-size: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	align-items: center;
	padding: 0px 50px;
	padding-bottom: 10px;
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
				<BsCheckLg fontSize="25px" color={active ? '#6558f5' : 'green'} />
			) : (
				<BsXLg fontSize="25px" color={active ? '#6558f5' : 'black'} />
			)}
			<p>STEP {number + 1}</p>
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
				<Image src={'/images/logo.png'} width={150} height={70} alt="image" />
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
				{currentStep === 4 && (
					<ShareLink
						onNext={() => setCurrentStep(5)}
						formData={progress[4].data}
						onFormSave={onFormSave(4)}
					/>
				)}
				{currentStep === 5 && (
					<InstallPlugin
						onNext={() => {
							setCurrentStep(6)
							onFormSave(5)({})
						}}
					/>
				)}
				{currentStep === 6 && <SelectPlan />}
			</Content>
		</Wrapper>
	)
}

export default SetupBrand
