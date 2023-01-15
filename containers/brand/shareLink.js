import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import Button from '../../components/buttons/Button'

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
	font-size: 32px;
`

const Textarea = styled.textarea`
	border: 1px solid black;
	width: 400px;
	height: 100px;
	margin-bottom: 40px;
	padding: 5px;
`

const Form = styled.form`
	width: 100%;
	max-width: 414px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
`

const ShareLink = ({ formData, onFormSave, onNext }) => {
	const initialValues =
		Object.keys(formData).length === 0 ? { link: '' } : formData

	const formik = useFormik({
		initialValues,
		onSubmit: (values) => {
			onFormSave && onFormSave(values)
			onNext && onNext()
		},
	})

	return (
		<Wrapper>
			<BigTitle>Share a link to shop products</BigTitle>
			<Form onSubmit={formik.handleSubmit}>
				<Textarea
					id="link"
					name="link"
					value={formik.values.link}
					onChange={formik.handleChange}
				/>
				<Button>Submit</Button>
			</Form>
		</Wrapper>
	)
}

export default ShareLink
