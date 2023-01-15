import React, { useEffect, useRef } from 'react'
import { BsCloudUploadFill } from 'react-icons/bs'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px 0px;
`

const FileLabelStyled = styled.label`
	cursor: pointer;
`

const FileInputStyled = styled.input`
	display: none;
`

const UploadVideo = (props) => {
	const inputRef = useRef()

	return (
		<Wrapper>
			{props.label || 'Upload Video'}
			<FileLabelStyled htmlFor={props.id}>
				<BsCloudUploadFill fontSize="80px" />
			</FileLabelStyled>
			<FileInputStyled
				{...props}
				type="file"
				accept="video/mp4,video/x-m4v,video/*"
			/>
			{props.uploaded && 'File Uploaded'}
		</Wrapper>
	)
}

export default UploadVideo
