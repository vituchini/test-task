/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-cycle */
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
// import axios from 'axios'
import styled from 'styled-components'

const Background = styled(motion.div)`
	background: rgba(0, 0, 0, 0.15);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	right: 0;
	z-index: 200;
	height: 100%;
	width: 100%;
`

const ModalWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.15);
	background: #fff;
	border-radius: 10px;
`

const ModalContent = styled.div`
	padding: 1rem;
	background-color: #fff;
	position: absolute;
	top: 7.9rem;
	width: 11vw;
	height: 30vh;
	right: 8.5vw;
	border-radius: 0.3rem;
	border: 1px solid rgba(0, 0, 0, 0.17);
	// box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.21);
`

function Sidebar({ showModal, setShowModal }) {
	const modalRef = useRef()

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(!showModal)
		}
	}

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showModal) {
				setShowModal(!showModal)
			}
		},
		[showModal]
	)

	useEffect(() => {
		document.addEventListener('keydown', keyPress)
		return () => document.removeEventListener('keydown', keyPress)
	}, [keyPress])

	return (
		<AnimatePresence>
			{showModal && (
				<Background
					onClick={closeModal}
					ref={modalRef}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<ModalWrapper showModal={showModal}>
						<ModalContent>ggugu</ModalContent>
					</ModalWrapper>
				</Background>
			)}
		</AnimatePresence>
	)
}
// AnimatePresence
export default Sidebar
