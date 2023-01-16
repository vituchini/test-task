import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'
import AuthContainer from './authContainer'

const Form = styled.form`
	width: 100%;
	max-width: 414px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
`

const validationSchema = Yup.object({
	password: Yup.string()
		.min(8, 'Password must be 8 characters long')
		.matches(/[0-9]/, 'Password requires a number')
		.matches(/[a-z]/, 'Password requires a lowercase letter')
		.matches(/[A-Z]/, 'Password requires an uppercase letter')
		.matches(/[^\w]/, 'Password requires a symbol')
		.required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
})

function SignIn() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
		validateOnChange: false,
	})
	return (
		<AuthContainer
			title={'Login'}
			additionalInfo={[
				{
					label: "Don't have account?",
					link: '/auth/signup',
					linkLabel: 'Signup here',
				},
				{
					label: 'Forgot Password?',
					link: '/auth/reset',
					linkLabel: 'Reset here',
				},
			]}
		>
			<Form onSubmit={formik.handleSubmit}>
				<Input
					id="email"
					name="email"
					type="email"
					label="Email"
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
					placeholder="Login password"
					onChange={formik.handleChange}
					value={formik.values.password}
					error={formik.errors.password}
				/>
				<Button>Submit</Button>
			</Form>
		</AuthContainer>
	)
}

export default SignIn
