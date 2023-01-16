import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'

import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import AuthContainer from './authContainer'
import * as Yup from 'yup'

const Form = styled.form`
	width: 100%;
	max-width: 414px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
`

const validationSchema = Yup.object({
	companyName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	contactName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	phone: Yup.string()
		.matches(
			/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
			'Phone number is not valid'
		)
		.required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
	password: Yup.string()
		.min(8, 'Password must be 8 characters long')
		.matches(/[0-9]/, 'Password requires a number')
		.matches(/[a-z]/, 'Password requires a lowercase letter')
		.matches(/[A-Z]/, 'Password requires an uppercase letter')
		.matches(/[^\w]/, 'Password requires a symbol')
		.required('Required'),
	passwordConfirmation: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Must match "password" field value')
		.required('Required'),
})

function SignUp() {
	const formik = useFormik({
		initialValues: {
			companyName: '',
			contactName: '',
			phone: '',
			email: '',
			password: '',
			passwordConfirmation: '',
		},
		validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
		validateOnChange: false,
	})

	return (
		<AuthContainer
			title={'Signup'}
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
					id="companyName"
					name="companyName"
					type="name"
					label="Company Name"
					placeholder="Company Name"
					onChange={formik.handleChange}
					value={formik.values.companyName}
					error={formik.errors.companyName}
				/>
				<Input
					id="contactName"
					name="contactName"
					type="name"
					label="Contact Name"
					placeholder="Contact Name"
					onChange={formik.handleChange}
					value={formik.values.contactName}
					error={formik.errors.contactName}
				/>
				<Input
					id="phone"
					name="phone"
					type="phone"
					label="Phone Number"
					placeholder="Phone Number"
					onChange={formik.handleChange}
					value={formik.values.phone}
					error={formik.errors.phone}
				/>
				<Input
					id="email"
					name="email"
					type="email"
					label="Login email"
					placeholder="Login email"
					onChange={formik.handleChange}
					value={formik.values.email}
					error={formik.errors.email}
				/>
				<Input
					id="password"
					type="password"
					name="password"
					label="Password"
					placeholder="Password"
					onChange={formik.handleChange}
					value={formik.values.password}
					error={formik.errors.password}
				/>
				<Input
					id="passwordConfirmation"
					type="password"
					name="passwordConfirmation"
					label="Confirmation password"
					placeholder="Confirmation password"
					onChange={formik.handleChange}
					value={formik.values.passwordConfirmation}
					error={formik.errors.passwordConfirmation}
				/>
				<Button>Submit</Button>
			</Form>
		</AuthContainer>
	)
}

export default SignUp
