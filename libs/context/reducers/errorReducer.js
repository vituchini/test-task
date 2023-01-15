import { OPEN_ERROR, CLOSE_ERROR } from '../constants/errorConstants'

const error = (state, { type, payload }) => {
	switch (type) {
		case OPEN_ERROR:
			return {
				...state,
				openError: true,
				errorMessage: payload,
			}

		case CLOSE_ERROR:
			return {
				...state,
				openError: false,
				errorMessage: '',
			}

		default:
			return state
	}
}

export default error
