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

const UploadVideo = (props) => {
	const widgetRef = useRef(null)

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
				ref={(ref) => (widgetRef.current = ref)}
				publicKey="ac907022f9e84d920f6b"
				type="file"
				accept="video/mp4,video/x-m4v,video/*"
			/>
		</Wrapper>
	)
}

export default UploadVideo
