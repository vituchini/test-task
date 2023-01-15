import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'

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

function SignIn() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
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
				/>
				<Input
					id="password"
					type="password"
					name="password"
					label="Password"
					placeholder="Login password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				<Button>Submit</Button>
			</Form>
		</AuthContainer>
	)
}

export default SignIn
