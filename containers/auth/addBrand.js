import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'

import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import AuthContainer from './authContainer'
import FileInput from '../../components/inputs/FileInput'

const Form = styled.form`
	width: 100%;
	max-width: 414px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
`

function AddBrand() {
	const formik = useFormik({
		initialValues: {
			brandName: '',
			brandWebsite: '',
			logoFile: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
	})
	return (
		<AuthContainer
			title={'Add Your Brand'}
			additionalInfo={[
				{
					label: 'Have account?',
					link: '/auth/signin',
					linkLabel: 'Login here',
				},
			]}
		>
			<Form onSubmit={formik.handleSubmit}>
				<Input
					id="brandName"
					name="brandName"
					type="name"
					label="Brand Name"
					placeholder="Brand Name"
					onChange={formik.handleChange}
					value={formik.values.brandName}
				/>
				<Input
					id="brandWebsite"
					name="brandWebsite"
					type="name"
					label="Brand Website"
					placeholder="Brand Website"
					onChange={formik.handleChange}
					value={formik.values.brandWebsite}
				/>
				<FileInput
					id="logoFile"
					name="logoFile"
					accept="image/png"
					label="Upload logo"
					onChange={formik.handleChange}
					value={formik.values.logoFile}
				/>
				<Button>Submit</Button>
			</Form>
		</AuthContainer>
	)
}

export default AddBrand
