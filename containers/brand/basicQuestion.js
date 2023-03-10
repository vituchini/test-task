import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import UploadVideo from '../../components/inputs/UploadVideo'

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

const ExampleLink = styled(Link)`
	color: #6558f5;
	text-decoration: underline;
	margin-bottom: 40px;
`

const Form = styled.form`
	width: 100%;
	max-width: 414px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
`

const Skip = styled.div`
	color: #6558f5;
	text-decoration: underline;
	cursor: pointer;
`

const validationSchema = Yup.object().shape({
	videoText: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	videoFile: Yup.string().required('Required'),
})

const BasicQuestion = ({
	title,
	exampleLink = '',
	formData,
	onFormSave,
	skip,
	onNext,
}) => {
	const initialValues =
		Object.keys(formData).length === 0
			? { videoText: '', videoFile: '' }
			: formData

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			onFormSave && onFormSave(values)
			onNext && onNext()
		},
	})
	console.log('errors', formik.errors)
	return (
		<Wrapper>
			<BigTitle>{title}</BigTitle>
			<ExampleLink href={exampleLink}>Watch an example here</ExampleLink>
			<Form onSubmit={formik.handleSubmit}>
				<Input
					id="videoText"
					name="videoText"
					type="text"
					label="Video Text"
					placeholder="Video Text"
					onChange={formik.handleChange}
					value={formik.values.videoText}
					error={formik.errors.videoText}
				/>
				<UploadVideo
					id="videoFile"
					name="videoFile"
					onChange={(value) => formik.setFieldValue('videoFile', value)}
					value={formik.values.videoFile}
					error={formik.errors.videoFile}
				/>
				<Button>Submit</Button>
			</Form>
			{skip && <Skip onClick={onNext}>SKIP</Skip>}
		</Wrapper>
	)
}

export default BasicQuestion
