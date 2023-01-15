/* eslint-disable import/no-cycle */
// import dynamic from 'next/dynamic'
import { createContext, useReducer, useContext, useMemo } from 'react'

// State
import errorInitialState from './initialStates/errorState'
import sidebarInitialState from './initialStates/layoutState'

// Reducer
import error from './reducers/errorReducer'
import sidebar from './reducers/layoutReducer'

export const GlobalContext = createContext({})

export const useGlobalContext = () => {
	return useContext(GlobalContext)
}

/* const ErrorMessage = dynamic(() => import('../../components/ErrorMessage'), {
	ssr: false,
})

const LoaderSpinner = dynamic(() => import('../../components/LoaderSpinner'), {
	ssr: false,
}) */

function GlobalProvider({ children }) {
	const [errorState, errorDispatch] = useReducer(error, errorInitialState)
	const [sidebarState, sidebarDispatch] = useReducer(
		sidebar,
		sidebarInitialState
	)

	const dataObject = useMemo(
		() => ({
			errorState,
			errorDispatch,
			sidebarState,
			sidebarDispatch,
		}),
		[errorState, sidebarState]
	)

	return (
		<GlobalContext.Provider value={dataObject}>
			{children}
			{/* 
			<AnimatePresence>
				{errorState.openError && (
					<ErrorMessage
						key="error-message-modal"
						message={errorState.errorMessage}
						showModal={errorState.openError}
					/>
				)}

				{loadingState.openLoading && (
					<LoaderSpinner
						key="loading-spinner-modal"
						showModal={loadingState.openLoading}
					/>
				)}
			</AnimatePresence> */}
		</GlobalContext.Provider>
	)
}

export default GlobalProvider
