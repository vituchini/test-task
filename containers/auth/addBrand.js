import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import AuthContainer from './authContainer'
import FileInput from '../../components/inputs/FileInput'
import { useRouter } from 'next/router'

const Form = styled.form`
	width: 100%;
	max-width: 414px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
`

const validationSchema = Yup.object().shape({
	brandName: Yup.string()
		.min(2, 'Too Short!')
		.max(16, 'Too Long!')
		.required('Required'),
	brandWebsite: Yup.string()
		.min(2, 'Too Short!')
		.max(16, 'Too Long!')
		.required('Required'),
	logoFile: Yup.string().required('Required'),
})

function AddBrand() {
	const router = useRouter()

	const formik = useFormik({
		initialValues: {
			brandName: '',
			brandWebsite: '',
			logoFile: '',
		},
		validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
			router.push('/auth/setup-brand')
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
					error={formik.errors.brandName}
				/>
				<Input
					id="brandWebsite"
					name="brandWebsite"
					type="name"
					label="Brand Website"
					placeholder="Brand Website"
					onChange={formik.handleChange}
					value={formik.values.brandWebsite}
					error={formik.errors.brandWebsite}
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
