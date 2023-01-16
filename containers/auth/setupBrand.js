import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { BsCheckLg, BsXLg } from 'react-icons/bs'

import BasicQuestion from '../brand/basicQuestion'
import ShareLink from '../brand/shareLink'
import InstallPlugin from '../brand/installPlugin'
import SelectPlan from '../brand/selectPlan'

const Wrapper = styled.div`
	overflow: auto;
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
	const questionsFromServer = [
		'waiting_for_brand',
		'waiting_question_1',
		'waiting_question_2',
		'waiting_question_3',
		'waiting_question_4',
		'waiting_question_6',
		'waiting_question_5',
	]

	const initialProgress = [...new Array(questionsFromServer.length)].map(
		(el, index) => ({
			id: index,
			data: {},
			status: false,
		})
	)

	const [progress, setProgress] = useState(initialProgress)
	const [currentStep, setCurrentStep] = useState(0)

	useEffect(() => {
		const storedProgress = sessionStorage.getItem('progress')
		if (storedProgress) {
			setProgress(JSON.parse(storedProgress))
		}
		const storedStep = sessionStorage.getItem('currentStep')
		if (storedStep) {
			setCurrentStep(JSON.parse(storedStep))
		}
	}, [])
	console.log(progress)

	useEffect(() => {
		sessionStorage.setItem('progress', JSON.stringify(progress))
	}, [progress])
	useEffect(() => {
		sessionStorage.setItem('currentStep', JSON.stringify(currentStep))
	}, [currentStep])

	const onFormSave = (id) => (data) =>
		setProgress((prev) =>
			prev.map((el, i) => (i === id ? { ...el, data, status: true } : el))
		)

	const onNext = (id) => {
		if (id < questionsFromServer.length - 1) {
			setCurrentStep(id + 1)
		} else if (id === questionsFromServer.length - 1) {
			alert('Thank you for choosing us!')
		}
	}

	const allSteps = {
		waiting_for_brand: {
			render: (id) => (
				<BasicQuestion
					title={'Introduce yourself and your brand'}
					onNext={() => onNext(id)}
					formData={progress[id].data}
					onFormSave={onFormSave(id)}
				/>
			),
		},
		waiting_question_1: {
			render: (id) => (
				<BasicQuestion
					title={'Why did you build your brand and why is it so different?'}
					onNext={() => onNext(id)}
					formData={progress[id].data}
					onFormSave={onFormSave(id)}
				/>
			),
		},
		waiting_question_2: {
			render: (id) => (
				<BasicQuestion
					title={'What are some recommended best sellers?'}
					onNext={() => onNext(id)}
					formData={progress[id].data}
					onFormSave={onFormSave(id)}
					skip
				/>
			),
		},
		waiting_question_3: {
			render: (id) => (
				<BasicQuestion
					title={'Do you have discount code?'}
					onNext={() => onNext(id)}
					formData={progress[id].data}
					onFormSave={onFormSave(id)}
					skip
				/>
			),
		},
		waiting_question_4: {
			render: (id) => (
				<ShareLink
					onNext={() => onNext(id)}
					formData={progress[id].data}
					onFormSave={onFormSave(id)}
				/>
			),
		},
		waiting_question_5: {
			render: (id) => (
				<InstallPlugin
					onNext={() => {
						onNext(id)
						onFormSave(id)({})
					}}
				/>
			),
		},
		waiting_question_6: {
			render: (id) => (
				<SelectPlan
					formData={progress[id].data}
					onFormSave={onFormSave(id)}
					onNext={() => onNext(id)}
				/>
			),
		},
	}

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
				{questionsFromServer.map((el, index) => {
					return currentStep === index && allSteps[el].render(index)
				})}
			</Content>
		</Wrapper>
	)
}

export default SetupBrand
