import React from 'react'
import { BsFillCloudUploadFill } from 'react-icons/bs'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
	padding: 20px 0px;
`

const FileLabelStyled = styled.label`
	cursor: pointer;
`

const FileInputStyled = styled.input`
	display: none;
`

const FileInput = (props) => {
	return (
		<Wrapper>
			{props.label}
			<FileLabelStyled htmlFor={props.id}>
				<BsFillCloudUploadFill fontSize="40px" />
			</FileLabelStyled>
			<FileInputStyled {...props} type="file" />
			{props.value}
		</Wrapper>
	)
}

export default FileInput
