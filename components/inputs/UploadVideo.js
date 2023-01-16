import React, { useEffect, useRef } from 'react'
import { BsCloudUploadFill } from 'react-icons/bs'
import styled from 'styled-components'
import { Widget } from '@uploadcare/react-widget'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px 0px;
`

const FileLabelStyled = styled.label`
	cursor: pointer;
`

const fileTypeLimit = (allowedFileTypes) => {
	const types = allowedFileTypes.split(' ')

	return function (fileInfo) {
		if (fileInfo.name === null) {
			return
		}
		const extension = fileInfo.name.split('.').pop()

		if (extension && !types.includes(extension)) {
			throw new Error('fileType')
		}
	}
}

const ErrorMessage = styled.div`
	color: red;
`

const UploadVideo = (props) => {
	const widgetRef = useRef(null)

	const validators = [fileTypeLimit('mp3 avi mp4')]

	return (
		<Wrapper>
			{props.label || 'Upload Video'}
			<FileLabelStyled
				onClick={() => {
					widgetRef?.current?.openDialog && widgetRef.current?.openDialog()
				}}
				htmlFor={props.id}
			>
				<BsCloudUploadFill fontSize="80px" />
			</FileLabelStyled>
			<Widget
				{...props}
				onChange={(file) => {
					props.onChange(file?.uuid || '')
				}}
				ref={(ref) => (widgetRef.current = ref)}
				publicKey="demopublickey"
				validators={validators}
			/>
			{props.error && <ErrorMessage>{props.error}</ErrorMessage>}
		</Wrapper>
	)
}

export default UploadVideo
