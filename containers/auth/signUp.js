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
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2))
		},
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
				/>
				<Input
					id="contactName"
					name="contactName"
					type="name"
					label="Contact Name"
					placeholder="Contact Name"
					onChange={formik.handleChange}
					value={formik.values.contactName}
				/>
				<Input
					id="phone"
					name="phone"
					type="phone"
					label="Phone Number"
					placeholder="Phone Number"
					onChange={formik.handleChange}
					value={formik.values.phone}
				/>
				<Input
					id="email"
					name="email"
					type="email"
					label="Login email"
					placeholder="Login email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<Input
					id="password"
					type="password"
					name="password"
					label="Password"
					placeholder="Password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				<Input
					id="passwordConfirmation"
					type="password"
					name="passwordConfirmation"
					label="Confirmation password"
					placeholder="Confirmation password"
					onChange={formik.handleChange}
					value={formik.values.passwordConfirmation}
				/>
				<Button>Submit</Button>
			</Form>
		</AuthContainer>
	)
}

export default SignUp
