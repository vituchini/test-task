import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../constants/layoutConstants'

const sidebar = (state, { type }) => {
	switch (type) {
		case OPEN_SIDEBAR:
			return {
				...state,
				openSidebar: true,
			}

		case CLOSE_SIDEBAR:
			return {
				...state,
				openSidebar: false,
			}

		default:
			return state
	}
}

export default sidebar
