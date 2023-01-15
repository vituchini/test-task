import { gql } from '@apollo/client'

export const FIND_BOOKINGS = gql`
	query ($page: Int!) {
		findMarketplaceEventBookings(page: $page) {
			marketplaceEventBookings {
				id
				email
				phoneNumber
				fullName
				eventName
			}
			totalPages
			currentPage
			errors {
				key
				message
			}
			status
		}
	}
`
