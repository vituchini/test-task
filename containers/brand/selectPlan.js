import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../components/buttons/Button'
import Input from '../../components/inputs/Input'

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	overflow: auto;
	padding-top: 30px;
`

const Form = styled.form`
	width: 100%;
	max-width: 600px;
	padding: 1.3rem;
	display: flex;
	flex-direction: column;
	position: relative;
`
const InputsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30px;
`
const SmallInputContainer = styled.div`
	width: 100px;
`

const BigTitle = styled.p`
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 30px;
`

const CardsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 50px;
`

const Card = styled.div`
	width: 200px;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	border: 1px solid grey;
	padding: 10px;
	gap: 50px;
	cursor: pointer;
`
const Discount = styled.div`
	color: red;
	font-size: 12px;
`

const validationSchema = Yup.object().shape({
	cardNumber: Yup.string()
		.min(16, 'Too Short!')
		.max(16, 'Too Long!')
		.required('Required'),
	cvv: Yup.string()
		.min(3, 'Too Short!')
		.max(3, 'Too Long!')
		.required('Required'),
	mmyy: Yup.string()
		.matches(
			/([0-9]{2})\/([0-9]{2})/,
			'Not a valid expiration date. Example: MM/YY'
		)
		.required('Required'),
})

const SelectPlan = ({ formData, onFormSave, onNext }) => {
	const initialValues =
		Object.keys(formData).length === 0
			? { plan: '', cardNumber: '', cvv: '', mmyy: '' }
			: formData

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			onFormSave && onFormSave(values)
			onNext && onNext()
		},
	})

	if (formik.values.plan)
		return (
			<Wrapper>
				<BigTitle>Add Card Details</BigTitle>
				<Form onSubmit={formik.handleSubmit}>
					<InputsWrapper>
						<Input
							id="cardNumber"
							name="cardNumber"
							type="number"
							label="Card Number"
							placeholder="Card Number"
							onChange={formik.handleChange}
							value={formik.values.cardNumber}
							error={formik.errors.cardNumber}
						/>
						<SmallInputContainer>
							<Input
								width={'600px'}
								id="cvv"
								name="cvv"
								type="number"
								label="CVV"
								placeholder="CVV"
								onChange={formik.handleChange}
								value={formik.values.cvv}
								error={formik.errors.cvv}
							/>
						</SmallInputContainer>
						<SmallInputContainer>
							<Input
								id="mmyy"
								name="mmyy"
								type="text"
								label="MM/YY"
								placeholder="MM/YY"
								onChange={formik.handleChange}
								value={formik.values.mmyy}
								error={formik.errors.mmyy}
							/>
						</SmallInputContainer>
					</InputsWrapper>
					<Button>Submit</Button>
				</Form>
			</Wrapper>
		)

	return (
		<Wrapper>
			<BigTitle>Select Plan</BigTitle>
			<CardsContainer>
				<Card onClick={() => formik.setFieldValue('plan', 'monthly')}>
					<p>Monthly Plan</p>
					<div>$29/month</div>
				</Card>
				<Card onClick={() => formik.setFieldValue('plan', 'yearly')}>
					<div>Yearly Plan</div>
					<div>
						$278/year<Discount>20% OFF</Discount>
					</div>
				</Card>
			</CardsContainer>
		</Wrapper>
	)
}

export default SelectPlan
